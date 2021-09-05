import './Login.scss';
import header from '../../blocks/header';

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded);

function handlerDocumentDOMLoaded() {
  /* eslint-disable no-unused-vars */
  header({ root: document.querySelector('.js-header') });
}
