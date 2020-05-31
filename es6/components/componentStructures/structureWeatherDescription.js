/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import dictionary from '../dictionary';
class StructureWeatherDescription {
  constructor() {
    this.dictionary = dictionary;
    this.weatherDescription = document.createElement('div');
    this.weatherIcon = document.createElement('div');
    this.weatherInfo = document.createElement('div');

    this.weatherApparentTemperature = document.createElement('div');
    this.weatherSpeedWind = document.createElement('div');
    this.weatherHumidity = document.createElement('div');

    this.weatherHumidityTitle = document.createElement('span');
    this.weatherApparentTemperatureTitle = document.createElement('span');
    this.weatherSpeedWindTitle = document.createElement('span');

    this.weatherHumidityValue = document.createElement('span');
    this.weatherApparentTemperatureValue = document.createElement('span');
    this.weatherSpeedWindValue = document.createElement('span');
  }

  render(infoWeatherNow, language, units) {
    let unitOfMeasurement;
    let valueConvertTemperature;
    const kilometersToMilesRatio = 1.6;
    const secondsPerHour = 3600;
    const numberOfMetersInKiloment = 1000;
    units == 'imperial' ? unitOfMeasurement = '°F' : unitOfMeasurement = '°C';
    units == 'imperial' ? valueConvertTemperature = infoWeatherNow.wind.speed * kilometersToMilesRatio * numberOfMetersInKiloment / secondsPerHour : valueConvertTemperature = infoWeatherNow.wind.speed;

    this.weatherDescription.classList.add('weather-description');
    this.weatherIcon.classList.add('weather-icon');
    this.weatherInfo.classList.add('weather-info');

    this.weatherApparentTemperature.classList.add('weather-temperature');
    this.weatherSpeedWind.classList.add('weather-speed-wind');
    this.weatherHumidity.classList.add('weather-humidity');

    this.weatherHumidityTitle.setAttribute('data-i18n', 'humidity');
    this.weatherApparentTemperatureTitle.setAttribute('data-i18n', 'apparent-temperature');
    this.weatherSpeedWindTitle.setAttribute('data-i18n', 'speed-wind');

    this.weatherApparentTemperatureTitle.textContent = this.dictionary.feel[language];
    this.weatherSpeedWindTitle.textContent = this.dictionary.wind[language];
    this.weatherHumidityTitle.textContent = this.dictionary.humidity[language];

    this.weatherHumidityValue.classList.add('humidity-value');
    this.weatherApparentTemperatureValue.classList.add('apparent-temperature-value');
    this.weatherSpeedWindValue.classList.add('speed-wind-value');

    this.weatherIcon.style.backgroundImage = `url(../js/animatedIconWeather/${infoWeatherNow.weatherIcon}.svg)`;
    this.weatherInfo.textContent = infoWeatherNow.weatherDescription;
    this.weatherApparentTemperatureValue.textContent = Math.round(infoWeatherNow.appTemperature) + unitOfMeasurement;
    this.weatherSpeedWindValue.textContent = Math.round(valueConvertTemperature) + this.dictionary.windSpeedUnits[language];
    this.weatherHumidityValue.textContent = infoWeatherNow.humidity + '%';


    this.weatherApparentTemperature.appendChild(this.weatherApparentTemperatureTitle);
    this.weatherApparentTemperature.appendChild(this.weatherApparentTemperatureValue);
    this.weatherSpeedWind.appendChild(this.weatherSpeedWindTitle);
    this.weatherSpeedWind.appendChild(this.weatherSpeedWindValue);
    this.weatherHumidity.appendChild(this.weatherHumidityTitle);
    this.weatherHumidity.appendChild(this.weatherHumidityValue);

    this.weatherDescription.appendChild(this.weatherIcon);
    this.weatherDescription.appendChild(this.weatherInfo);
    this.weatherDescription.appendChild(this.weatherApparentTemperature);
    this.weatherDescription.appendChild(this.weatherSpeedWind);
    this.weatherDescription.appendChild(this.weatherHumidity);

    return this.weatherDescription;
  }
}

export default StructureWeatherDescription;
