/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
require('babel-polyfill');

class AsyncRequest {
  async getRes(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
}

export default AsyncRequest;
