Preview
Database Design
Database Terminology
Creating Tables
Analyzing CREATE TABLE
Inserting Data Into a Table
Retrieving Data with Select
Create, Insert, and Select!
Calculated Columns
Calculating Phone Revenue
Using Calculated Columns
Exercise Solution
String Operators and Functions
Filtering Rows with "Where"
More on the "Where" Keyword
Compound "Where" Clauses
A "Where" Exercise Overview
Practicing Where Statements
A "Where" Solution
"Where" With Lists
A More Challenging 'Where'
A "Where" With Lists Solution
Calculations in "Where" Clauses
Trying Calculations in Where Clauses
Solving Calculations
Updating Rows
Deleting Rows
Try Updating Records In a Table!
A Solution for Updating Rows
Practice Deleting Records
Solution for Deleting Rows
The Plan Moving Forward
Approaching Database Design
Let's Design Some Schema
2 questions
One-to-Many and Many-to-One Relationships
A 'Has One' or 'Has Many'?
4 questions
One-to-One and Many-to-Many Relationships
Identifying One-to-One and Many-to-Many Relationships
Primary Keys and Foreign Keys
Understanding Foreign Keys
Foreign Keys; How Do They Work?
4 questions
Auto-Generated ID's
Creating Foreign Key Columns
Running Queries on Associated Data
Exercise Overview
Creating and Using Foreign Keys
Foreign Key Creation Solution
Foreign Key Constraints Around Insertion
Constraints Around Deletion
Commands You’ll Need for the Next Video
Testing Deletion Constraints
Setting Foreign Keys to Null on Delete
What Happens On Delete?
2 questions
Adding Some Complexity
Adding Some Data
Queries with Joins and Aggregations
Joining Data from Different Tables
Another Quick Join
Exercise Overview
Practice Joining Data
A Joinful Solution
Alternate Forms of Syntax
Missing Data in Joins
Why Wasn't It Included
Four Kinds of Joins
Each Join in Practice
Does Order Matter?
Test Your Joining Knowledge
5 questions
Exercise Overview
Joins, Joins, Join!
Two Possible Solutions
Where with Join
Three Way Joins
A Bit of Practice
Three Way Exercise
Exercise Solution
Aggregating and Grouping
Picturing Group By
Selecting Columns After Grouping
2 questions
Aggregate Functions
Combining Group By and Aggregates
A Gotcha with Count
Visualizing More Grouping
Exercise Overview
Practice For Grouping and Aggregating
Grouping Solution
Adding a Layer of Difficulty
Grouping With a Join!
Solution
Filtering Groups with Having
Having In Action
More on Having!
A Having Exercise Overview
Practice Yourself Some Having
A Quick Solution
A New Dataset
Investigating This Dataset
Some Group By Practice
Group By Review
Group By Review Solution
Remember Joins?
Inner Join Review
Of Course You Remember!
The Basics of Sorting
Two Variations on Sorting
Offset and Limit
Exercise Overview
Sorting, Offsetting, and Limiting
Exercise Solution
Handling Sets with Union
A Few Notes on Union
Commonalities with Intersect
Removing Commonalities with Except
Union Exercise Overview
Merging Results with Union
Exercise Solution
What's a Subquery?
Thinking About the Structure of Data
What's the Data Look Like?
4 questions
Subqueries in a Select
Exercise Overview
Embedding in Select
Select Solution
Subqueries in a From
From Subqueries that Return a Value
Example of a Subquery in a From
Exercise Overview
Subquery From's
Exercise Solution
Subqueries in a Join Clause
More Useful - Subqueries with Where
Data Structure with Where Subqueries
Exercise Overview
Subquery Where's
Exercise Solution
The Not In Operator with a List
A New Where Operator
Finally Some!
Is It A Valid Subquery?
Exercise Overview
Practice Your Subqueries!
A Quick Solution
Probably Too Much About Correlated Subqueries
More on Correlated Subqueries
A Select Without a From?
Exercise Overview
From-less Selects
Exercise Solution
Selecting Distinct Values
Exercise Overview
Some Practice with Distinct
A Distinct Solution
The Greatest Value in a List
And the Least Value in a List!
The Case Keyword
PostgreSQL Installation on macOS
PGAdmin Setup on macOS
Postgres installation on Windows
What'd We Just Do?
Data Types
Fast Rules on Numeric Data Types
More on Number Data Types
Reminder on Character Types
Boolean Data Types
Times, Dates, and Timestamps
Really Awesome Intervals
Thinking About Validation
Creating and Viewing Tables in PGAdmin
Applying a Null Constraint
Solving a Gotcha with Null Constraints
Creating NULL Constraints
Default Column Values
Applying a Unique Constraint to One column
Multi-Column Uniqueness
Is It Unique?
Adding a Validation Check
Checks Over Multiple Columns
Does It Pass a Check?
So Where Are We Applying Validation?
Approaching More Complicated Designs
Using a SQL Design Tool
A Config-based Schema Designer
Here's the Plan
Rebuilding Some Schema
Requirements of a Like System
How Not to Design a Like System
Designing a Like System
Building a Similar System
Making a Reaction System Instead
Polymorphic Associations
Polymorphic Association Alternative Implementation
The Simplest Alternative
Polymorphic Associations
2 questions
So Which Approach?
Additional Features Around Posts
Adding Captions and Locations
Photo Mentions vs Caption Mentions
Considerations on Photo Tags vs Caption Tags
Update For Tags
Designing a Hashtag System
Tables for Hashtags
Including the Hashtag Table
A Few More User Columns
Why No Number of Followers or Posts?
Designing a Follower System
Back to Postgres
Creating Tables with Checks
Posts Creation
Comments Creation
Likes Creation
Photo Tags and Caption Tags
Creating Hashtags, Hashtag Posts, and Followers
Quick Note About Adding Some Data
Adding Some Data
Restoring from Scratch
Highest User ID's Exercise
Solution for User ID's
Posts by a Particular User
Solving for Posts by User
Likes Per User
Solution for Likes Per User
Thinking About Performance
Where Does Postgres Store Data?
Heaps, Blocks, and Tuples
Terminology Check
4 questions
Block Data Layout
Heap File Layout
Full Table Scans
What's an Index
How an Index Works
Creating an Index
Benchmarking Queries
Downsides of Indexes
Index Types
Automatically Generated Indexes
Using Automatically Created Indexes
Behind the Scenes of Indexes
The Query Processing Pipeline
Explain and Explain Analyze
Explain Vs Explain Analyze
Solving an Explain Mystery
Developing an Intuitive Understanding of Cost
Calculating Cost by Hand
A Touch More on Costs
Calculating Costs
2 questions
Startup vs Total Costs
Costs Flow Up
Use My Index!
Common Table Expressions
A Quick Solution
So What's a CTE?
Recursive CTE's
Recursive CTE's Step by Step
Why Use Recursive CTE's?
Writing the Query
Walking Through Recursion
Most Popular Users
A Possible Solution for Merging Tables
Creating a View
When to Use a View?
Deleting and Changing Views
Materialized Views
Grouping by Week
Reminder on Left Joins
Writing a Slow Query
Creating and Refreshing Materialized Views
Views vs Materialized Views
2 questions
What are Transactions Used For?
Some Sample Data
Opening and Closing Transactions
Transaction Cleanup on Crash
Closing Aborted Transactions
A Story on Migrations
Migration Files
Issues Solved by Migrations
A Few Notes on Migrations Libraries
A Note About Node Installation
Project Creation
Generating and Writing Migrations
Applying and Reverting Migrations
Generating and Applying a Second Migration
Schema vs Data Migrations
Dangers Around Data Migrations
Properly Running Data and Schema Migrations
Creating a Posts Table
A Small Web Server
Web Server Setup Instructions
Adding the Loc Column
Writing Values to Both Columns
Transaction Locks
Updating Values
Migrations Setup Instructions
Updating the App Server
Dropping the Last Columns
Section Goal
Initial Setup
One Fast Migration
Building the Users Router
Understanding Connection Pools
Validating Connection Credentials
Query and Close
The Repository Pattern
Creating a Repository
Accessing the API
Casing Issues
Fixing Casing
Finding Particular Users
SQL Injection Exploits
Handling SQL Injection with Prepared Statements
Preventing SQL Injection
Reminder on Post Requests
Inserting Users
Handling Updates
And, Finally, Delete
A Note on Testing
Assertions Around User Count
Connecting to a DB For Tests
Disconnecting After Tests
Multi-DB Setup
Assumptions Around Content
Issues with Parallel Tests
Isolation with Schemas
Creating and Accessing Schemas
Controlling Schema Access with Search Paths
Routing Schema Access
Strategy for Isolation
Programmatic Schema Creation
Escaping Identifiers
Test Helpers
Cleaning up Schemas and Roles
Finally... Parallel Tests!
