# Weather Bot ⚡️

[![GitHub](https://img.shields.io/github/license/richierich25/weather-bot?color=blue)](https://github.com/saadpasta/developerFolio/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/richierich25/weather-bot)](https://github.com/saadpasta/developerFolio/stargazers)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors)

## A NodeJS application pushing weather notification over Telegram powered by Github Actions

**[To view this LIVE](https://developerfolio.js.org/)**

<!-- <div>
  <img src="https://user-images.githubusercontent.com/49693820/81296489-999abf00-908f-11ea-9442-75e8f0ecf65d.gif"></img>
</div> -->
![image](https://user-images.githubusercontent.com/49693820/81296489-999abf00-908f-11ea-9442-75e8f0ecf65d.gif)

Feel free to use it as-is or customize it as much as you want.

But if you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/richierich25/weather-bot/issues).

If you created something awesome and want to contribute then feel free to open a [Pull Request](https://github.com/richierich25/weather-bot/pulls).

## Table of Contents

- [Sections](#sections)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Linking portfolio to Github](#linking-portfolio-to-github)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [For the Future](#for-the-future)
- [Contributors](#project-maintainers)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer

```bash
    node@v10.16.0 or higher
    npm@6.9.0 or higher
    git@2.17.1 or higher
```

## How To Use

From your command line, clone and run `weather-bot`

## Linking Portfolio to Github

Generate a Github personal access token following these [instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) (make sure you don't select any scope just generate a simple token).

  1. Create a file called `.env` in the root directory of your project, check the base file.
    *Note*: Instead of creating a .env file, you can just run this command "cp env.example .env" inside the root directory

  ```general
    - DeveloperFolio
      - node_modules
      - public
      - src
      - .env         <-- create it here
      - env.example  <-- this is the base file
      - .gitignore
      - package-lock.json
      - package.json
  ```

  2. Inside the .env file, add key `REACT_APP_GITHUB_TOKEN` and assign your github token like this.

  ```javascript
    // .env
    REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
  ```

  Set `showGithubProfile` to true or false to show Contact Profile using Github, defaults to false.

## Deployment

When you are done with the setup, you should host your website online.
We highly recommend to read through the [Deploying on Github Pages](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) docs.

### Configuring GitHub Actions

- Using the Personal Access Token you placed in the `.env` file earlier create a [repository secret](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) called `OPEN_SOURCE_TOKEN` where the value matches the token value from the `.env` file in your local workspace.
- When you are done with the configuration, we highly recommend to read through the [Github Actions Configuring a workflow](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) docs.

### Deploying to Netlify

You could also host directly with Netlify by linking your own repository.

![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)

For more information, read [hosting on Netlify](https://docs.netlify.com/#discover-netlify).

## Technologies Used

- [Nodejs](https://nodejs.org/)
- [Javascript](https://www.w3schools.com/js/DEFAULT.asp)

## For the Future

If you can help us with these. Please don't hesitate to open a [pull request](https://github.com/richierich25/weather-bot/pulls).

- Imporove the UI/UX Design
- Add other push notification
- Add emoji support

## Project Maintainers

<table>
  <tr>
    <td align="center"><a href="htts://www.richierich25.com"><img src="![richard](https://user-images.githubusercontent.com/34006942/95360107-9595f600-08e8-11eb-8467-60ae47976f26.jpg)" width="100px;" alt=""/><br /><sub><b>Richard Abraham</b></sub></a></td>
  </tr>
</table>

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<table>
  <tr>
  </tr>
</table>
<!-- ALL-CONTRIBUTORS-LIST:END -->