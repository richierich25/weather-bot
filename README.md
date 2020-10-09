<!-- markdownlint-disable -->
<a href="https://www.richierich25.com" target="_blank">
    <img alt="Richard Abraham | Website" src="https://user-images.githubusercontent.com/34006942/95367062-e827e000-08f1-11eb-8e6a-b28b6d0e9690.png" title="Richard Abraham | Website" align="right" width="200px" />
</a>

⚡️ Weather Bot ⚡️
======================

<h4 align="center">A NodeJS application that pushes weather notification over Telegram Bot</h4>

<div align="center"> 

  <p align="center">
    <a href="https://github.com/richierich25/weather-bot/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/richierich25/weather-bot?color=blue" alt="GitHub License">
    </a>
      <img src="https://github.com/richierich25/weather-bot/workflows/Run%20Weather%20Bot%20Job/badge.svg" alt="Run Weather Bot">
    <img src="https://img.shields.io/github/languages/code-size/richierich25/weather-bot" alt="GitHub code size in bytes">
    <img src="https://img.shields.io/github/commit-activity/w/richierich25/weather-bot" alt="GitHub commit activity">
    <a href="https://github.com/richierich25/weather-bot/issues">
      <img src="https://img.shields.io/github/issues/richierich25/weather-bot" alt="GitHub issues">
    </a>
    <a href="https://github.com/richierich25/weather-bot/releases">
      <img src="https://img.shields.io/github/v/release/richierich25/weather-bot.svg?style=flat" alt="GitHub Release">
    </a>
      <a href="https://github.com/richierich25/weather-bot/stargazers">
      <img src="https://img.shields.io/github/stars/richierich25/weather-bot" alt="GitHub Stars">
    </a>
  </p>

  <p align="center">
    <a href="#usage">Usage</a> •
    <a href="#configuration">Configuration</a> •
    <a href="#deployment">Deployment</a> •
    <a href="#technologies-used">Technologies Used</a> •
    <a href="#contributing">Contributing</a> •
    <a href="#contributors">Contributors</a> •
    <a href="#credits">Credits</a>
  </p>
  <br>

  <p>
    The application is powered by Github Actions to automatically push weather notification to a personal telegram bot at specific intervals. It is built on Javascript making use of NodeJS libraries. 
  </p>
  <br>

</div>

<img src="https://user-images.githubusercontent.com/34006942/95599220-6ad5aa00-0a6e-11eb-8d81-e6524bf2f960.png">
<p align="center">
  <a href="http://t.me/Richierich25_bot">To view this LIVE</a>
</p>


## 📖 Usage

<img align="right" src="https://i.ibb.co/CJfW18H/ship.gif" width="200"/>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need the below installed on your computer
- [Git](https://git-scm.com) _git@2.17.1 or higher_
- [NodeJS](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) _node@v12 or higher_, _npm@6.9.0 or higher_
- [Telegram Desktop](https://desktop.telegram.org/) or [Telegram App](https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en_IN&gl=US)

### Cloning the repository

```sh
$ git clone https://github.com/richierich25/weather-bot.git
$ cd weather-bot
$ npm i 
```

## 💨 Configuration

  1. Create a file called `.env` in the root directory of your project. OR
    *Note*: Instead of creating a `.env` file, create a replica of the `env.example` file provided

      ```shell
      $ cp env.example .env
      ```

  2. Inside the `.env` file, add key `WEATHER_API_TOKEN` obtained from [OpenWeather App](https://home.openweathermap.org/). One must create an account and copy the API Key from [My API Key Section](https://home.openweathermap.org/api_keys).

      ```javascript
        WEATHER_API_TOKEN = "YOUR OPEN WEATHER API TOKEN HERE"
      ```

  3. Inside the `.env` file, add key `TELEGRAM_TOKEN` and `TELEGRAM_CHAT_ID` obtained from [Telegram Bots App](https://core.telegram.org/bots). Follow the below steps:

      - Click [BotFather](https://t.me/botfather) and open in either Telegram Desktop or Mobile App(search for `@BotFather`)
      - After opening it, press `start` and type `/newbot`
      - Provide a name and a username for the bot. **ensure it ends with `bot` at its end**, for instance `Richierich25_bot`
      - It will provide a link to the newly created bot and provide the `HTTP API Key` or `TELEGRAM_TOKEN`. Open the link provided. **important as the bot has to be started for it to receive messages later**
      - Press `start` or to start chatting with the newly created bot 
      - To obtain the `TELEGRAM_CHAT_ID`, search for the `@get_id_bot` account and press`start`
      - it will provide you your chat id

      ```javascript
        TELEGRAM_TOKEN = "YOUR TELEGRAM TOKEN HERE"
        TELEGRAM_CHAT_ID = "YOUR TELEGRAM CHAT ID HERE"
      ```

  4. Inside the `index.js`, set the `id` corresponding to your city obtained from [here](https://openweathermap.org/find).

      - Enter your desired city name and press `search`, for instance, `Delhi`
      - Open the first link that pops below
      - Now from the URL, obtain the id of the format `https://openweathermap.org/city/1273294` where 1273294 will be the ID corresponding to the city

      ```javascript
        weatherURL.searchParams.set('id', '1273294');  // use the desired id here
      ```

## 🖥️ Deployment

When you are done with the setup, and have tested locally, we recommend you to deploy it using Github Actions.
We highly recommend to read through the [Using Github Actions](https://docs.github.com/en/free-pro-team@latest/actions/quickstart) docs.

  1. Inside the `.github/workflows/run-weather-bot.yml` file, set the desired time interval in [CRON FORMAT](https://www.freeformatter.com/cron-expression-generator-quartz.html) after which you wish the Application to run and push the notification

      ```yaml
        schedule:
          - cron: '0 */3 * * *' #after every 3 hours
      ```

  2. Adding API Tokens and Secrets into the repository

      - Open your repository with the application code
      - Click on `Settings` from the Github Menu options
      - Press `Secrets` from the left section
      - Press `New Secret` and add your tokens one by one by giving it a suitable `Name` and `Value`
      - Add `WEATHER_API_TOKEN`, `TELEGRAM_TOKEN` and `TELEGRAM_CHAT_ID`

## 🛠️ Technologies Used

- NodeJS
- Javascript

## 🤝 Contributing

If you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/richierich25/weather-bot/issues).

If you can help us with these. Please don't hesitate to open a [pull request](https://github.com/richierich25/weather-bot/pulls).

- Imporove the UI/UX Design
- Add other push notification
- Add emoji support

We encourage you to contribute. Please check out the [Contributing guide](CONTRIBUTING.md) for guidelines on how to proceed.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<table>
  <tr>
    <td align="center"><a href="htts://www.richierich25.com">
    <img src="https://user-images.githubusercontent.com/34006942/95364922-0e984c00-08ef-11eb-9e3b-48cfd6f844e7.jpg" width="100px;" alt=""/><br /><sub><b>Richard Abraham</b></sub></a></td>
  </tr>
</table>
<!-- ALL-CONTRIBUTORS-LIST:END -->


## 👏🏻 Credits

- Original Idea from [Kristian Freeman](https://github.com/signalnerve)