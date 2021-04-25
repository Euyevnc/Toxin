import './LandingPage.scss';
import Header from '../../blocks/header/header';
import RoomFinder from '../../blocks/room-finder/room-finder';

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded);

function handlerDocumentDOMLoaded() {
  /* eslint-disable no-unused-vars */
  const headerObject = new Header(document.querySelector('.js-header'));
  const numberFinderObject = new RoomFinder(document.querySelector('.room-finder'));
}
