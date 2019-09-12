# Table of Contents
1. [About :green_book:]()
2. [Usage :smile:]()
3. [How does it work :question:]()
4. [Stack :books:]()

# About
Face-Recognition App, that comes with the following features: Registration, Signin, Leveling Up and Session Token Storage.

# Usage
Simply register when you enter the app. Once you are registered, insert any image url into the form and click on detect! The app will detect any faces that are on your image. You can sign again with the e-mail and password you signed in with and your sessions will be managed by session tokens.

# Stack
This app was created using the PERN stack (Postgres, Express, React and Node) and deployed using a Docker container.

## Frontend:
The frontend was created using React, and for the styling I used Styled-Components with Tachyons (This allowed for flexible and fast styling keeping good markup) 

## Backend:
The backend is served by Node, with Postgres for the database (using knex as a SQL Query Builder) and Redis for token storage.
