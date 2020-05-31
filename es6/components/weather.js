/* eslint-disable linebreak-style */
import AsyncRequest from './inquiry';

class Weather extends AsyncRequest {
  constructor() {
    super();
    this.myKey = 'e33398e668a14d53bfa5498d70f4707a';
    // 1 key `e33398e668a14d53bfa5498d70f4707a`
    // 2 key`5ee907b57c794069b5cdc8acbab13a58`
    this.api = 'https://api.weatherbit.io/v2.0/';
  }

  getWeatherByCoordsNow(coordinates, language, units) {
    const longitude = coordinates.longitude;
    const latitude = coordinates.latitude;
    let url = `${this.api}current?lat=${latitude}&lon=${longitude}&units=${units}&lang=${language}&key=${this.myKey}`;
    return this.getInfoWeatherNow(url);
  }

  getWeatherByCoordsForTheNextThreeDays(coordinates, language, units) {
    const longitude = coordinates.longitude;
    const latitude = coordinates.latitude;
    let url = `${this.api}forecast/daily?lat=${latitude}&lon=${longitude}&days=4&units=${units}&lang=${language}&key=${this.myKey}`;
    return this.getInfoWeatherForTheNextThreeDays(url);
  }

  async getInfoWeatherForTheNextThreeDays(url) {
    const data = await this.getRes(url);
    const InfoWeather = {
      1: {
        date: data.data[1].valid_date,
        description: data.data[1].weather.description,
        temperature: data.data[1].temp,
        iconCode: data.data[1].weather.icon
      },
      2: {
        date: data.data[2].valid_date,
        description: data.data[2].weather.description,
        temperature: data.data[2].temp,
        iconCode: data.data[2].weather.icon
      },
      3: {
        date: data.data[3].valid_date,
        description: data.data[3].weather.description,
        temperature: data.data[3].temp,
        iconCode: data.data[3].weather.icon
      }
    };
    return InfoWeather;
  }

  async getInfoWeatherNow(url) {
    const data = await this.getRes(url);
    const InfoWeatherNow = {
      temperature: data.data[0].temp,
      weatherDescription: data.data[0].weather.description,
      weatherIcon: data.data[0].weather.icon,
      appTemperature: data.data[0].app_temp,
      wind: {
        description: data.data[0].wind_cdir_full,
        speed: data.data[0].wind_spd
      },
      humidity: data.data[0].rh,
      press: data.data[0].pres
    };
    return InfoWeatherNow;
  }
}

export default Weather;
