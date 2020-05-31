/* eslint-disable linebreak-style */
/* eslint-disable default-case */
import dictionary from '../dictionary';
class StructureControl {
  constructor() {
    this.dictionary = dictionary;
    this.control = document.createElement('div');

    this.backgroundBtn = document.createElement('button');
    this.languagesBtns = document.createElement('div');
    this.valuesTempBtns = document.createElement('div');

    this.languageBtnEn = document.createElement('button');
    this.languageBtnRu = document.createElement('button');
    this.languageBtnBe = document.createElement('button');

    this.valueTempF = document.createElement('button');
    this.valueTempC = document.createElement('button');

    this.searchForm = document.createElement('form');
    this.voiceMessage = document.createElement('button');
    this.voiceSearchBtn = document.createElement('button');
    this.searchInput = document.createElement('input');
    this.searchFormBtn = document.createElement('button');
  }

  render(language, units) {
    this.control.classList.add('control');

    this.backgroundBtn.classList.add('background-repeat');

    this.valuesTempBtns.classList.add('temperature-btns');
    this.valueTempF.classList.add('temperature-btn-far');
    this.valueTempC.classList.add('temperature-btns-cel');
    this.valueTempF.innerText = '°F';
    this.valueTempC.innerText = '°C';
    this.valuesTempBtns.appendChild(this.valueTempF);
    this.valuesTempBtns.appendChild(this.valueTempC);

    this.languagesBtns.classList.add('language-btns');
    this.languageBtnEn.classList.add('language-btn-en');
    this.languageBtnRu.classList.add('language-btn-ru');
    this.languageBtnBe.classList.add('language-btn-be');
    this.languageBtnEn.innerText = 'En';
    this.languageBtnRu.innerText = 'Ru';
    this.languageBtnBe.innerText = 'Be';
    this.languagesBtns.appendChild(this.languageBtnEn);
    this.languagesBtns.appendChild(this.languageBtnRu);
    this.languagesBtns.appendChild(this.languageBtnBe);

    this.searchForm.setAttribute('id', 'searchForm');
    this.voiceMessage.classList.add('voice-message');
    this.voiceSearchBtn.classList.add('voice-search-btn');
    this.voiceSearchBtn.style.backgroundImage = 'url(../js/iconBtns1/microphone.svg)';
    this.backgroundBtn.style.backgroundImage = 'url(../js/iconBtns1/reload.svg)';
    this.searchFormBtn.style.backgroundImage = 'url(../js/iconBtns1/loupe.svg)';
    this.voiceMessage.style.backgroundImage = 'url(../js/iconBtns1/sound.svg)';
    this.searchInput.setAttribute('id', 'searchText');
    this.searchInput.setAttribute('type', 'text');

    this.voiceSearchBtn.setAttribute('data-control', 'voiceSearch');
    this.voiceSearchBtn.setAttribute('type', 'button');
    this.voiceMessage.setAttribute('type', 'button');
    this.voiceMessage.setAttribute('data-control', 'voiceMessage');
    this.backgroundBtn.setAttribute('data-control', 'background');
    this.languageBtnEn.setAttribute('data-control', 'language-en');
    this.languageBtnRu.setAttribute('data-control', 'language-ru');
    this.languageBtnBe.setAttribute('data-control', 'language-be');
    this.valueTempC.setAttribute('data-control', 'temperature-c');
    this.valueTempF.setAttribute('data-control', 'temperature-f');

    this.searchInput.setAttribute('placeholder', this.dictionary.search[language]);
    this.searchInput.setAttribute('autocomplete', 'off');
    this.searchInput.setAttribute('autofocus', '');
    this.searchFormBtn.classList.add('search-btn');
    this.searchFormBtn.setAttribute('type', 'submit');

    this.languageBtnEn.classList.remove('active');
    this.languageBtnRu.classList.remove('active');
    this.languageBtnBe.classList.remove('active');
    this.valueTempC.classList.remove('active');
    this.valueTempF.classList.remove('active');

    switch (language) {
      case 'be':
        this.languageBtnBe.classList.add('active');
        break;
      case 'ru':
        this.languageBtnRu.classList.add('active');
        break;
      case 'en':
        this.languageBtnEn.classList.add('active');
    }
    switch (units) {
      case 'metric':
        this.valueTempC.classList.add('active');
        break;
      case 'imperial':
        this.valueTempF.classList.add('active');
    }
    this.searchForm.appendChild(this.voiceSearchBtn);
    this.searchForm.appendChild(this.voiceMessage);
    this.searchForm.appendChild(this.searchInput);
    this.searchForm.appendChild(this.searchFormBtn);
    this.control.appendChild(this.backgroundBtn);
    this.control.appendChild(this.languagesBtns);
    this.control.appendChild(this.valuesTempBtns);
    this.control.appendChild(this.searchForm);

    return this.control;
  }
}
export default StructureControl;
