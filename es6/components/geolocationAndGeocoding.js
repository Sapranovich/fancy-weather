/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
import AsyncRequest from './inquiry';

class GeolocationAndGeocoding extends AsyncRequest {
  constructor() {
    super();
    this.myKey = 'f21a18f95c7a4bf0be0694e322e7aaa9';
    this.API = 'https://api.opencagedata.com/geocode/v1/json?q=';
  }

  getInfoOnCoords(coords, language) {
    const longitude = coords.longitude;
    const latitude = coords.latitude;
    const api = this.API;
    const key = this.myKey;
    const url = `${api}${latitude}+${longitude}&key=${key}&language=${language}`;
    return this.getInfo(url);
  }

  async getInfo(url) {
    const data = await this.getRes(url);
    const { city, town, village, county, state } = data.results[0].components;
    const location = city || town || village || county || state;
    const info = {
      timestamp: data.results[0].annotations.timezone.name,
      date: data.timestamp.created_http,
      timezone: data.results[0].annotations.timezone.offset_sec,
      location: {
        coutry: data.results[0].components.country,
        city: location
      },
      coords: {
        latitude: data.results[0].annotations.DMS.lat,
        longitude: data.results[0].annotations.DMS.lng
      }
    };
    return info;
  }

  getCoordsOnNameCity(value) {
    const nameCity = value;
    const api = this.API;
    const key = this.myKey;
    const url = `${api}${nameCity}&key=${key}&limit=1`;
    return this.getCoords(url);
  }

  async getCoords(url) {
    const data = await this.getRes(url);

    const coords = {
      longitude: data.results[0].geometry.lng,
      latitude: data.results[0].geometry.lat
    };
    return coords;
  }

  getInfoOnNameCity(value, language) {
    const nameCity = value;
    const api = this.API;
    const key = this.myKey;
    const url = `${api}${nameCity}&key=${key}&language=${language}`;
    return this.getInfo(url);
  }

  getCoordsGeolocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }
}

export default GeolocationAndGeocoding;
