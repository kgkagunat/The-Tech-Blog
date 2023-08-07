# The-Tech-Blog

## Overview

This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers' posts. 
It uses the Model-View-Controller (MVC) paradigm in its architectural structure, with Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Challenges and Acceptance Criteria

The challenge was to build a CMS-style blog site from scratch and deploy it to Heroku. For the full acceptance criteria, please refer to the initial assignment description.

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Key Features

- View all blog posts and their comments.
- Sign up and log in to access personalized features.
- Add new blog posts.
- Comment on blog posts.
- Update or delete your own blog posts.
- Idle time out for enhanced security.

## Usage

To use this application:

- Visit the deployed site on Heroku.
- Sign up for a new account or log in to your existing account.
- Create new blog posts or comment on existing posts.
  
## Installation

To run this project locally:

- Clone the repository to your local machine.
- Run `npm install` in the command line to install the necessary dependencies.
- Set up the .env file with your own credentials and secret key.
- Run the schema.sql file in MySQL Workbench to set up the database.
- If you want to seed the database with sample data, run `npm run seed` in the terminal.
- Start the server by running `npm start`.

## Setting Up Your .env and .env.example

- Rename .env.example to .env and modify the properties with your MySQL credentials and a secret session key. Here's what the .env file should look like:

```env
DB_NAME='blogPost_db'
DB_USER='your_username'
DB_PASSWORD='your_password'
```

- Replace "your_username" and "your_password" with your actual MySQL information.

- The .env.example file serves as a guide and should look exactly like the .env file, but with placeholder values. Do not push your actual .env file with your private credentials to GitHub.

## License

This project is licensed under the terms of the MIT license.

## Screenshots

<img width="1923" alt="Screen Shot 2023-08-06 at 1 36 08 PM" src="https://github.com/kgkagunat/The-Tech-Blog/assets/127634764/033b7567-8c7a-4bf7-b24f-d80f53f2080a">

<img width="1923" alt="Screen Shot 2023-08-06 at 1 36 22 PM" src="https://github.com/kgkagunat/The-Tech-Blog/assets/127634764/456fc3ee-567d-4575-93a9-3b4f67feea2d">

<img width="1921" alt="Screen Shot 2023-08-06 at 1 36 33 PM" src="https://github.com/kgkagunat/The-Tech-Blog/assets/127634764/03cad7a2-e74b-498a-93d5-abb69bbf1632">

<img width="1923" alt="Screen Shot 2023-08-06 at 1 37 05 PM" src="https://github.com/kgkagunat/The-Tech-Blog/assets/127634764/e392ccb9-a216-463f-b392-a60edc737e6e">

<img width="1922" alt="Screen Shot 2023-08-06 at 1 38 05 PM" src="https://github.com/kgkagunat/The-Tech-Blog/assets/127634764/0287ca7d-eea4-40e7-ae31-fcbf41f60f89">

<img width="1923" alt="Screen Shot 2023-08-06 at 1 38 15 PM" src="https://github.com/kgkagunat/The-Tech-Blog/assets/127634764/b51de148-854e-4f26-bf4c-d4bf6d45694b">

<img width="1922" alt="Screen Shot 2023-08-06 at 1 38 38 PM" src="https://github.com/kgkagunat/The-Tech-Blog/assets/127634764/5f038b50-d242-4efa-abe2-08e9137a1bd4">

