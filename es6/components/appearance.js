/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import StructureMap from './componentStructures/structureMap';
import StructureWeatherDataNow from './componentStructures/structureWeatherDataNow';
import StructureAddInfo from './componentStructures/structureAddInfo';
import StructureControl from './componentStructures/structureControl';

class Appearance {
  constructor() {
    this.app = document.createElement('div');
    this.content = document.createElement('div');
    this.control = document.createElement('div');
    this.additionalContent = document.createElement('div');

    this.structureControl = new StructureControl();
    this.structureMap = new StructureMap();
    this.structureWeatherDataNow = new StructureWeatherDataNow();
    this.structureAddInfo1 = new StructureAddInfo();
    this.structureAddInfo2 = new StructureAddInfo();
    this.structureAddInfo3 = new StructureAddInfo();
  }

  renderBaseStructure(infoLocation, infoWeatherNow, infoWeatherForTheNextThreeDays, language, units) {
    this.app.classList.add('app');

    this.additionalContent.classList.add('add-content');
    this.control.classList.add('control');
    this.content.classList.add('content');

    document.body.appendChild(this.app);
    this.content.appendChild(this.structureWeatherDataNow.render(infoLocation, infoWeatherNow, language, units));
    this.content.appendChild(this.structureMap.render(infoLocation, language));

    this.additionalContent.appendChild(this.structureAddInfo1.render(infoWeatherForTheNextThreeDays[1], language, units));
    this.additionalContent.appendChild(this.structureAddInfo2.render(infoWeatherForTheNextThreeDays[2], language, units));
    this.additionalContent.appendChild(this.structureAddInfo3.render(infoWeatherForTheNextThreeDays[3], language, units));

    this.app.appendChild(this.structureControl.render(language, units));
    this.app.appendChild(this.content);
    this.app.appendChild(this.additionalContent);
  }
}
export default Appearance;
