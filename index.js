require('dotenv').config();
const fetch = require('node-fetch');
const Telegram = require('node-telegram-bot-api');

const bot = new Telegram(process.env.TELEGRAM_TOKEN);
const bot_id = process.env.TELEGRAM_CHAT_ID;
const weatherToken = process.env.WEATHER_API_TOKEN;

const weatherURL = new URL('https://api.openweathermap.org/data/2.5/weather');
weatherURL.searchParams.set('id', '1273294'); //setting city id of delhi, which is 1273294
weatherURL.searchParams.set('APPID', weatherToken);  //set apikey
weatherURL.searchParams.set('units', 'metric'); // units converted

const getWeatherData = async () => {
  console.log(weatherURL.toString());
  const resp = await fetch(weatherURL.toString());
  const data = await resp.json();
  return data;
}

const generateWeatherMessage = weatherData =>
  `The weather in ${weatherData.name}: ${weatherData.weather[0].description}. Current temperature is ${weatherData.main.temp}, with a low temp of ${weatherData.main.temp_min} and high of ${weatherData.main.temp_max}.`;


const main = async () => {
  const weatherData = await getWeatherData();
  const weatherString = generateWeatherMessage(weatherData);
  console.log(weatherString);
  bot.sendMessage(process.env.TELEGRAM_CHAT_ID, weatherString);
}

main();