import './LandingPage.scss';
import Header from '../../blocks/header/header';
import NumberFinder from '../../blocks/number-finder/number-finder';

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded);

function handlerDocumentDOMLoaded() {
  /* eslint-disable no-unused-vars */
  const headerObject = new Header();
  const numberFinderObject = new NumberFinder();
  numberFinderObject.init();
}
