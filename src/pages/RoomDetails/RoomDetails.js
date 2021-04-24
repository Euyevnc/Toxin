import './RoomDetails.scss';
import Header from '../../blocks/header/header';
import Diagram from '../../blocks/diagram/diagram';
import RoomBooker from '../../blocks/room-booker/room-booker';
import Review from '../../blocks/review/review';

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded);

function handlerDocumentDomLoaded() {
  /* eslint-disable no-unused-vars */
  const headerObject = new Header();
  const diagramObject = new Diagram();
  diagramObject.init();
  const bookerObject = new RoomBooker();
  bookerObject.init();
  document.querySelectorAll('.js-review').forEach((review) => {
    const reviewObject = new Review(review);
    reviewObject.init();
  });
}
