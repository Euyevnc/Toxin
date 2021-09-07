import './landing.scss';
import header from '../../blocks/header';
import roomSearcher from '../../blocks/room-searcher';

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded);

function handlerDocumentDOMLoaded() {
  /* eslint-disable no-unused-vars */
  header({ root: document.querySelector('.js-header') });
  roomSearcher({
    root: document
      .querySelector('.js-room-searcher'),
  });
}
