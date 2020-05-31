/* eslint-disable linebreak-style */
/* eslint-disable no-mixed-operators */
/* eslint-disable new-cap */
/* eslint-disable class-methods-use-this */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-case-declarations */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
class VoiceSearch {
  constructor() {
    this.recognition = new webkitSpeechRecognition();
  }

  launch(infoLocation, infoWeatherNow, language) {
    let final_transcript = '';
    this.recognition.lang = language;
    this.recognition.start();
    this.recognition.onstart = function () {
      document.querySelector('.voice-search-btn').classList.add('active');
    };
    this.recognition.onresult = function (event) {
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        }
      }
    };
    this.recognition.onerror = function (event) {
      console.log('Ошибка', event);
    };
    this.recognition.onend = function () {
      document.querySelector('.voice-search-btn').classList.remove('active');
      switch (final_transcript) {
        case 'погода' || 'weather' || "надвор'е":
          document.body.style.pointerEvents = 'none';
          VoiceSearch.speak(VoiceSearch.message(infoLocation, infoWeatherNow, language), language);
          break;
        default:
          document.forms[0].elements.searchText.value = final_transcript;
          let eventSubmit = new Event('submit');
          document.dispatchEvent(eventSubmit);
      }
    };
  }

  static speak(text, language) {
    const message = new SpeechSynthesisUtterance();
    message.lang = language;
    message.text = text;
    window.speechSynthesis.speak(message);
  }

  static message(infoLocation, infoWeatherNow, language, units) {
    let valueConvertTemperature;
    const kilometersToMilesRatio = 1.6;
    const secondsPerHour = 3600;
    const numberOfMetersInKiloment = 1000;
    units == 'imperial' ? valueConvertTemperature = infoWeatherNow.wind.speed * kilometersToMilesRatio * numberOfMetersInKiloment / secondsPerHour : valueConvertTemperature = infoWeatherNow.wind.speed;
    let messages = {
      ru: `${infoLocation.location.city}${infoLocation.location.coutry}${Math.round(infoWeatherNow.temperature)}° 
        ${infoWeatherNow.weatherDescription}Ветер${infoWeatherNow.wind.description}${Math.round(valueConvertTemperature)} метров в секунду
        влажность ${infoWeatherNow.humidity}%`,
      en: `${infoLocation.location.city}${infoLocation.location.coutry}${Math.round(infoWeatherNow.temperature)}° 
        ${infoWeatherNow.weatherDescription}Wind${infoWeatherNow.wind.description}${Math.round(valueConvertTemperature)} meters per second
        humidity ${infoWeatherNow.humidity}%`,
      be: `${infoLocation.location.city}${infoLocation.location.coutry}${Math.round(infoWeatherNow.temperature)}° 
        ${infoWeatherNow.weatherDescription}Вецер${infoWeatherNow.wind.description}${Math.round(valueConvertTemperature)}метраў у секунду 
        вільготнасць${infoWeatherNow.humidity}%`
    };
    return messages[language];
  }

  voice(infoLocation, infoWeatherNow, language, units) {
    VoiceSearch.speak(VoiceSearch.message(infoLocation, infoWeatherNow, language, units), language);
  }
}
export default VoiceSearch;
