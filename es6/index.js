/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-bitwise */
/* eslint-disable no-restricted-globals */
/* eslint-disable default-case */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable quotes */
require("babel-polyfill");

import GeolocationAndGeocoding from './components/geolocationAndGeocoding';
import Weather from './components/weather';
import Map from './components/map';
import Time from './components/date';
import Background from './components/background';
import Appearance from './components/appearance';
import VoiceSearch from './components/voiceSearch';

class Application {
  constructor() {
    this.geo = new GeolocationAndGeocoding();
    this.weather = new Weather();
    this.map = new Map();
    this.time = new Time();
    this.appearance = new Appearance();
    this.background = new Background();
    this.voiceSearch = new VoiceSearch();

    this.language;
    this.units;
    this.coordsFromTheRequest;
    this.coords;
    this.infoLocation = {};
    this.infoWeatherNow = {};
    this.infoWeatherForTheNextThreeDays = {};
  }

  async render() {
    const ObjCoords = await this.geo.getCoordsGeolocation();
    const myCoords = this.coordsFromTheRequest || ObjCoords.coords;

    this.language = localStorage.getItem('language') || 'en';
    this.units = localStorage.getItem('units') || 'metric';
    this.coords = myCoords;

    this.infoLocation = await this.geo.getInfoOnCoords(this.coords, this.language);
    this.infoWeatherNow = await this.weather.getWeatherByCoordsNow(this.coords, this.language, this.units);
    this.infoWeatherForTheNextThreeDays = await this.weather.getWeatherByCoordsForTheNextThreeDays(this.coords, this.language, this.units);
    this.appearance.renderBaseStructure(this.infoLocation, this.infoWeatherNow, this.infoWeatherForTheNextThreeDays, this.language, this.units);
    this.map.renderMap(this.coords);

    setInterval(()=>this.time.getDateAndTimeNow(this.infoLocation.timestamp, this.language), 1000);
    this.background.loadRandomImg();
  }

  async controlEvent() {
    document.body.addEventListener('click', (event)=>{
      if (event.target.dataset.control != undefined) {
        if (event.target.dataset.control != 'background') {
          switch (event.target.dataset.control) {
            case 'language-ru':
              localStorage.setItem('language', 'ru');
              this.render();
              break;
            case 'language-be':
              localStorage.setItem('language', 'be');
              this.render();
              break;
            case 'language-en':
              localStorage.setItem('language', 'en');
              this.render();
              break;
            case 'temperature-c':
              localStorage.setItem('units', 'metric');
              this.render();
              break;
            case 'temperature-f':
              localStorage.setItem('units', 'imperial');
              this.render();
              break;
            case 'voiceSearch':
              this.voiceSearch.launch(this.infoLocation, this.infoWeatherNow, this.language, this.units);
              break;
            case 'voiceMessage':
              this.voiceSearch.voice(this.infoLocation, this.infoWeatherNow, this.language, this.units);
          }
        } else { this.background.loadRandomImg(); }
      }
    });
    document.addEventListener('submit', async ()=>{
      event.preventDefault();
      const valueRequest = document.forms[0].elements.searchText.value;
      if (valueRequest != '' & valueRequest.length > 1) {
        if (isNaN(valueRequest)) {
          app.search(valueRequest).then(ok=>app.render()).catch(err=>alert('Введен не корректный запрос'));
        } else { alert('Строка запроса пуста, или введен не корректный запрос'); }
      } else { alert('Строка запроса пуста, или введен не корректный запрос'); }
      document.forms[0].elements.searchText.value = '';
    });
  }

  async search(value) {
    this.coordsFromTheRequest = await this.geo.getCoordsOnNameCity(value);
  }
}

const app = new Application();
app.render();
app.controlEvent();
