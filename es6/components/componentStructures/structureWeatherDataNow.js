/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import StructureWeatherDescription from './structureWeatherDescription';

class StructureWeatherDataNow {
  constructor() {
    this.weatherDataNow = document.createElement('div');
    this.descriptionNow = document.createElement('div');
    this.tempetatureNow = document.createElement('div');

    this.description = document.createElement('div');
    this.weatherDescription = new StructureWeatherDescription();

    this.geolocationAndDateContainer = document.createElement('div');
    this.geolocationTitle = document.createElement('div');
    this.geolocationDate = document.createElement('div');
    this.geolocationTime = document.createElement('div');
  }

  render(infoLocation, infoWeatherNow, language, units) {
    let unitOfMeasurement;
    units == 'imperial' ? unitOfMeasurement = '°F' : unitOfMeasurement = '°C';

    this.weatherDataNow.classList.add('weather-data-now');
    this.description.classList.add('description-inner');
    this.tempetatureNow.classList.add('temperature-now');

    this.geolocationAndDateContainer.classList.add('geolacation-container');

    this.geolocationTitle.classList.add('geolocation-title');
    this.geolocationDate.classList.add('geolocation-date');
    this.geolocationTime.classList.add('geolocation-time');

    this.geolocationTitle.textContent = infoLocation.location.city + '  ' + infoLocation.location.coutry;
    this.tempetatureNow.textContent = Math.round(infoWeatherNow.temperature) + unitOfMeasurement;

    this.geolocationAndDateContainer.appendChild(this.geolocationTitle);
    this.geolocationAndDateContainer.appendChild(this.geolocationDate);
    this.geolocationAndDateContainer.appendChild(this.geolocationTime);

    this.description.appendChild(this.tempetatureNow);
    this.description.appendChild(this.weatherDescription.render(infoWeatherNow, language, units));

    this.weatherDataNow.appendChild(this.geolocationAndDateContainer);
    this.weatherDataNow.appendChild(this.description);

    return this.weatherDataNow;
  }
}
export default StructureWeatherDataNow;
