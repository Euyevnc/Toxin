import './LandingPage.scss';
import Header from '../../blocks/header/header';
import RoomFinder from '../../blocks/room-search/room-search';

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded);

function handlerDocumentDOMLoaded() {
  /* eslint-disable no-unused-vars */
  const headerObject = new Header(document.querySelector('.js-header'));
  const numberFinderObject = new RoomFinder(document.querySelector('.room-search'));
}
