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

_**MindFront** is a safe space for confrontation, for people to share anonymously yet mindfully about people, places and things in a positive light, even if the topic is sensitive. Think missed connections on Craigslist meets Reddit but with a gratitude filter.. and PG. Users can make an account and post on their matters. Other users with verified accounts can comment and "like" as they wish. The app prompts members to confront their matters carefully, using non agressive vocabulary and with others in mind. In fact, if a user tries to post a vulgar word, the app will algorithmically hash or replace the word. The goal of this app is to start a conversation about how to have converations with strangers. Typically anonymity creates a barrier between people and therefore allows for aggression, negativity and bullying. Mindfront will push us to mindfully confront each other and help us learn how to show up in this world with care and compassion._

<br>

## MVP

_**MindFront** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### Goals

- _Use Authentication for User Login_
- _Utilize Full CRUD for Front End and Back End._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

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

[DESKTOP VIEWS](https://wireframe.cc/n6vsxS)

[DESKTOP WORKFLOW](https://whimsical.com/GmUN8HzwvVSPJFLTLS1hNm)

[MOBILE VIEWS](url)


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
| Authentication   |    H     |     6 hrs      |      hrs     |     TBD     |
| Front End Crud   |    H     |     36 hrs     |      hrs     |     TBD     |
| CSS              |    H     |     18 hrs     |      hrs     |     TBD     |
| TOTAL            |          |     66 hrs     |      hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

[MindFront.drawio](https://app.diagrams.net/#G15nRzgsPnjZAk7tmzwszHhERUZPKWsI8Q)

<br>

***

## Post-MVP

- Users can comment on comments (sub-comments)
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
