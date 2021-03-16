<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
# MindFront
Mindful Confrontation

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**MindFront** is a safe space for confrontation, for people to share anonymously yet mindfully about people, places and things in a positive light, even if the topic is sensitive. Think missed connections on Craigslist meets Reddit but with a gratitude filter.. and PG. Users can make an account and post on their matters. Other users (must be subscribed users) can comment and "like" as they wish. The app prompts members to confront their matters carefully, using non aggressive vocabulary and with others in mind. In fact, if a user tries to post a vulgar word, the app will algorithmically hash or replace the word. The goal of this app is to start a conversation about how to have converations with strangers. Typically anonymity creates a barrier between people and therefore allows for aggression, negativity and bullying. Mindfront will push us to mindfully confront each other and help us learn how to show up in this world with care and compassion._

<br>

## MVP

_The **MindFront** MVP is to create a blog where users can post and comment. Authentication will allow users to create a membership where they have access to their posts feed, have the ability to create posts, and comment on other users post. A non-subscriber can view posts and browse the feed. If a non-subscriber clicks comments, create posts, or view my posts, they will be redirected to a login/subscribe page._

<br>

### Goals

- _Use Authentication for User Login_ 
- _Utilize Full CRUD for Front End and Back End._
- _Create a different experience for subscribers vs non-subscribers._

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Javascript Framework for Front End._ |
|   React Router   | _Declarative Routing for React._ |
|      Rails       | _Ruby Framework for Back End._ |
|      JWT         | _Gem for Authentication._ |
|      BCRYPT      | _Gem for Authentication._ |
|      CORS        | _Dependency that allows for cross-origin resource sharing._ |


<br>

### Client (Front End)

#### Wireframes

[DESKTOP AND MOBILE WORKFLOW](https://whimsical.com/GmUN8HzwvVSPJFLTLS1hNm)

[DESKTOP VIEWS](https://wireframe.cc/n6vsxS)

[MOBILE VIEWS](https://wireframe.cc/wSuIbt)


#### Component Tree

 [Component Tree](https://whimsical.com/P24TDNVenaNqWEGJzESByF)

#### Component Hierarchy 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Nav.jsx
      |__ Login.jsx
      |__ Subscribe.jsx
      |__ Main.jsx
      |__ ShowPosts.jsx
      |__ ShowComments.jsx
      |__ EditPost.jsx
      |__ CreatePost.jsx
      |__ DeletePost.jsx
|__ services/
    |__ api-helper.js
    |__ auth.js
    |__ users.js
    |__ posts.js
    |__ comments.js
  

```

#### Component Breakdown


|  Component    |    Type    | state | props | Description                                                      |
| :----------:  | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header     | functional |   n   |   n   | _The header will contain the logo._                              |
|    Footer     | functional |   n   |   n   | _The Footer will contain links to Post MVP pages._                 |
|     Nav       | functional |   y   |   y   | _The Nav will provide a link to Home, My Posts, and Create Post._ |
|     Login     | functional |   y   |   y   | _The Login will prompt user for username and password._          |
|   Subscribe   | functional |   y   |   y   | _Subscribe will prompt user to fill in username, email and password._ |
|     Main      | functional |   y   |   y   | _Main houses all of the CRUD components  ._ |
|   ShowPosts   | functional |   y   |   y   | _ShowPosts will show a feed of all existing posts._ |
|  ShowComments | functional |   y   |   y   | _ShowComments will show one post and all of its comments._ |
|    EditPost   | functional |   y   |   y   | _User will be able to edit their post._ |
|   CreatePost  | functional |   y   |   y   | _User can create a new post._ |
|   DeletePost  | functional |   y   |   y   | _User can delete their post._ |

#### Time Estimates


| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| -----------------| :------: | :------------: | :-----------: | :---------: |
| Back End Crud    |    H     |     6 hrs      |      hrs     |     TBD     |
| Create Seed Data |    H     |     1 hrs      |      hrs     |     TBD     |
| Authentication   |    H     |     6 hrs      |      hrs     |     TBD     |
| Front End Crud   |    H     |     36 hrs     |      hrs     |     TBD     |
| BASIC CSS        |    H     |     6 hrs      |      hrs     |     TBD     |
| CSS              |    H     |     18 hrs     |      hrs     |     TBD     |
| Deployment       |    H     |     3 hrs      |      hrs     |     TBD     |
| TOTAL            |          |     76 hrs     |      hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

[MindFront.drawio](https://app.diagrams.net/#G15nRzgsPnjZAk7tmzwszHhERUZPKWsI8Q)

<br>

***

## Post-MVP

- Users can comment on comments (sub-comments) and edit their comments
- Users can 'like' a comment
- About us page
- Footer pages (Privacy Policy, etc)
- Add in Algorithm that will hash out vulgar/curse words
- Upload images

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
>>>>>>> 661c00c5e158413387f33105a456e543a73edb89
