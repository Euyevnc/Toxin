import './RoomDetails.scss';
import header from '../../blocks/header/header';
import diagram from '../../blocks/diagram/diagram';
import booker from '../../blocks/number-booker/number-booker';
import review from '../../blocks/review/review';

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded);

function handlerDocumentDomLoaded() {
  header();
  diagram();
  booker();
  review();
}
