import './Registration.scss';
import header from '../../blocks/header/header';
import registration from '../../blocks/registration/registration';

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded);

function handlerDocumentDomLoaded() {
  header();
  registration();
}
