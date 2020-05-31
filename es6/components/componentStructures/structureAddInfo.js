/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import Time from '../date';
class StructureAddInfo {
  constructor() {
    this.date = new Time();
    this.addInfoInner = document.createElement('div');
    this.addInfoIcon = document.createElement('div');
    this.addInfoDescription = document.createElement('div');
    this.dayOfTheWeek = document.createElement('div');
    this.averageЕemperature = document.createElement('div');
    this.descriptionWeather = document.createElement('div');
  }

  render(infoWeatherForTheNextThreeDays, language, units) {
    let unitOfMeasurement;
    units == 'imperial' ? unitOfMeasurement = '°F' : unitOfMeasurement = '°C';

    this.addInfoInner.classList.add('add-info-item');
    this.addInfoIcon.classList.add('add-info-icon');
    this.addInfoDescription.classList.add('add-info-description');
    this.dayOfTheWeek.classList.add('add-info-day-week');
    this.averageЕemperature.classList.add('add-info-tempetature');
    this.descriptionWeather.classList.add('description-weather-inner');

    this.descriptionWeather.textContent = infoWeatherForTheNextThreeDays.description;
    this.averageЕemperature.textContent = Math.round(infoWeatherForTheNextThreeDays.temperature) + unitOfMeasurement;
    this.dayOfTheWeek.textContent = this.date.getDateForTheFuture(infoWeatherForTheNextThreeDays.date, language);
    this.addInfoIcon.style.backgroundImage = `url(../js/animatedIconWeather/${infoWeatherForTheNextThreeDays.iconCode}.svg)`;

    this.addInfoDescription.appendChild(this.dayOfTheWeek);
    this.addInfoDescription.appendChild(this.descriptionWeather);
    this.addInfoDescription.appendChild(this.averageЕemperature);

    this.addInfoInner.appendChild(this.addInfoDescription);
    this.addInfoInner.appendChild(this.addInfoIcon);

    return this.addInfoInner;
  }
}

export default StructureAddInfo;
