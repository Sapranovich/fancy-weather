/* eslint-disable linebreak-style */
import dictionary from '../dictionary';
class StructureMap {
  constructor() {
    this.dictionary = dictionary;
    this.mapContainer = document.createElement('div');
    this.coords = document.createElement('div');
    this.coordLonInner = document.createElement('div');
    this.coordLatInner = document.createElement('div');

    this.map = document.createElement('div');

    this.coordLatTitle = document.createElement('span');
    this.coordLonTitle = document.createElement('span');
    this.coordLat = document.createElement('span');
    this.coordLon = document.createElement('span');
  }

  render(infoLocation, language) {
    this.mapContainer.classList.add('map-container');
    this.coords.classList.add('coords-container');
    this.map.setAttribute('id', 'map');

    this.coordLat.setAttribute('data-i18n', 'latitude');
    this.coordLon.setAttribute('data-i18n', 'longitude');


    this.coordLatTitle.textContent = this.dictionary.long[language];
    this.coordLonTitle.textContent = this.dictionary.lat[language];
    this.coordLat.textContent = infoLocation.coords.latitude;
    this.coordLon.textContent = infoLocation.coords.longitude;


    this.coordLonInner.appendChild(this.coordLonTitle);
    this.coordLatInner.appendChild(this.coordLatTitle);
    this.coordLonInner.appendChild(this.coordLon);
    this.coordLatInner.appendChild(this.coordLat);

    this.coords.appendChild(this.coordLonInner);
    this.coords.appendChild(this.coordLatInner);


    this.mapContainer.appendChild(this.map);
    this.mapContainer.appendChild(this.coords);

    return this.mapContainer;
  }
}
export default StructureMap;
