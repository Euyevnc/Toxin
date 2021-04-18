import './RoomDetails.scss';
import Header from '../../blocks/header/header';
import Diagram from '../../blocks/diagram/diagram';
import Booker from '../../blocks/number-booker/number-booker';
import Review from '../../blocks/review/review';

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded);

function handlerDocumentDomLoaded() {
  /* eslint-disable no-unused-vars */
  const headerObject = new Header();
  const diagramObject = new Diagram();
  diagramObject.init();
  const bookerObject = new Booker();
  bookerObject.init();
  document.querySelectorAll('.js-review').forEach((review) => {
    const reviewObject = new Review(review);
    reviewObject.init();
  });
}
