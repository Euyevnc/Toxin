import './registration.scss';
import header from '../../blocks/header';
import registration from '../../blocks/registration-form';

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded);

function handlerDocumentDomLoaded() {
  /* eslint-disable no-unused-vars */
  header({ root: document.querySelector('.js-header') });
  registration({
    root: document
      .querySelector('.js-registration-form'),
  });
}
