const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Elias's Bookmarks",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/fossforlife/bookmarks/',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Coding',
        link: 'https://ej-bookmarks.netlify.app/coding/md/',
        target: '_self'
      },
      {
        text: 'Knowledge',
        link: 'https://ej-bookmarks.netlify.app/knowledge/md/',
        target: '_self'
      },
      {
        text: 'Music',
        link: 'https://ej-bookmarks.netlify.app/music/md/discovery',
        target: '_self'
      },
    ],
    sidebar: {
      '/md/': [
        {
          title: 'Coding',
          collapsable: false,
          children: [
            '',
            'stars',
          ]
        }
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  dest: 'dist/coding',
  base: '/coding/'
}
