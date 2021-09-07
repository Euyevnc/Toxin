import './room-details.scss';
import header from '../../blocks/header';
import diagram from '../../blocks/diagram';
import roomPreview from '../../blocks/room-preview';
import review from '../../blocks/review';

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded);

function handlerDocumentDomLoaded() {
  /* eslint-disable no-unused-vars */
  header({ root: document.querySelector('.js-header') });
  diagram({ root: document.querySelector('.js-diagram') });
  roomPreview({ root: document.querySelector('.room-preview') });
  document.querySelectorAll('.js-review').forEach((reviewElem) => {
    review({ root: reviewElem });
  });
}
