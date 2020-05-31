/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
class Background {
  constructor() {
    this.myKey = 'CvsD0HwCRxbZDeFTdU2M2B3Wbdak2uTz-gGEvWwMtqg';
    this.api = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=';
  }

  async loadRandomImg() {
    const myKey = this.myKey;
    const api = this.api;
    const url = `${api}${myKey}`;
    fetch(url)
      .then(res => res.json())
      .then(data =>{ document.body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.urls.regular})`; })
      .catch(err=>console.log('Исчерпан лимит фоновых изображений'))
  }
}
export default Background;
