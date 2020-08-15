const fs = require('fs');
const fetch = require('node-fetch');
const astralData = require('./FOSSforlife_astral_data.json');
const { noCase } = require('change-case');
const { titleCase } = require('title-case');
const dotenv = require('dotenv');
dotenv.config();
const { GITHUB_USERNAME, GITHUB_ACCESS_TOKEN } = process.env;

const OUTPUT_FILE = './coding/md/stars.md'
const SORT_ITEMS_BY = 'stars'; // created_at, updated_at, name
const SORT_GROUPS_BY = 'name'; // amount
const GROUP_BY = 'tags'; // languages
const ITEM_LIMIT = undefined;
const IGNORE_TAGS = [];
const TITLE_CASE = true;
const REFRESH_CACHE = false;
const DOCUMENT_TITLE = 'Stars';

const heading = (name) => {
  return TITLE_CASE ? titleCase(noCase(name)) : name;
}

const sortNumberAscending = (a, b) => {
  return a - b;
}

const sortNumberDescending = (a, b) => {
  return b - a;
}

const sortStringAscending = (a, b) => {
  var nameA = a.toUpperCase(); // ignore upper and lowercase
  var nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

const sortStringDescending = (a, b) => {
  var nameA = a.toUpperCase(); // ignore upper and lowercase
  var nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

const headers = {
  Authorization: 'Basic ' + Buffer.from(GITHUB_USERNAME + ":" + GITHUB_ACCESS_TOKEN).toString('base64')
};

const githubData = REFRESH_CACHE ? [] : require('../github_cache.json');
const repoRequest = (id) => {
  if(githubData[id]) {
    return Promise.resolve(githubData[id]);
  }
  else {
    return fetch(`https://api.github.com/repositories/${id}`, {
      headers
    }).then(res => res.json());
  }
}

async function main() {
  const stars = {};
  const fetchPromises = [];
  Object.values(astralData).forEach(entry => {
    const repoRequestPromise = repoRequest(entry.repo_id).then((repo) => {
      // console.log(repo);
      githubData[entry.repo_id] = repo;
      let groupings = [];

      if(GROUP_BY === 'tags') {
        entry.tags.forEach(({ name }) => {
          if(!IGNORE_TAGS.find(tag => tag === name)) {
            groupings.push(heading(name))
          }
        });
      }
      else if(GROUP_BY === 'languages') {
        groupings.push(repo.language);
      }

      groupings.forEach(grouping => {
        if(!stars[grouping]) stars[grouping] = [];
        if(ITEM_LIMIT && stars[grouping].length >= ITEM_LIMIT) {
          return;
        }

        stars[grouping].push({
          url: repo.svn_url,
          homepage: repo.homepage,
          stargazers_count: repo.stargazers_count,
          description: repo.description,
          name: repo.name,
          created_at: entry.created_at,
          updated_at: entry.updated_at,
        })
      })

    });
    fetchPromises.push(repoRequestPromise);

  });
  Promise.all(fetchPromises).then(() => {
    fs.writeFileSync('./github_cache.json', JSON.stringify(githubData, null, 2))

    let mdOutput = `# ${DOCUMENT_TITLE}\n(Generated using [astral-to-md](https://github.com/fossforlife/astral-to-md))\n`;

    let groupings = Object.keys(stars);
    if(SORT_GROUPS_BY === 'name') {
      groupings = groupings.sort();
    }
    else if(SORT_GROUPS_BY === 'amount') {
      groupings = groupings.sort((a, b) => {
        return stars[b].length - stars[a].length;
      });
    }

    groupings.forEach(grouping => {
      mdOutput += `\n## ${grouping}\n`;

      let items = stars[grouping];
      if(SORT_ITEMS_BY === 'name') {
        items = items.sort((a, b) => sortStringAscending(a.name, b.name));
      }
      else if(SORT_ITEMS_BY === 'stars') {
        items = items.sort((a, b) => sortNumberDescending(a.stargazers_count, b.stargazers_count));
      }
      else if(SORT_ITEMS_BY === 'created_at') {
        items = items.sort((a, b) => sortStringDescending(a.created_at, b.created_at));
      }
      else if(SORT_ITEMS_BY === 'updated_at') {
        items = items.sort((a, b) => sortStringDescending(a.updated_at, b.updated_at));
      }

      items.forEach(item => {
        mdOutput += `- [${item.name}](${item.url}) - ${item.description} (${item.stargazers_count} stars)\n`
      });

      fs.writeFileSync(OUTPUT_FILE, mdOutput);
    })
  })

}

main();
