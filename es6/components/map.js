/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
class Map {
  constructor() {
    this.accessToken = 'pk.eyJ1Ijoic2FwcmFub3ZpY2giLCJhIjoiY2thNTR2YTVtMGptczNnb2FsdW16eXp4biJ9.kbJPRbUBKKdko9JBx1y8mg';
  }

  renderMap(coordinates) {
    const longitude = coordinates.longitude;
    const latitude = coordinates.latitude;

    mapboxgl.accessToken = this.accessToken;

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 10.5
    });
  }
}

export default Map;
