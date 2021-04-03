import './LandingPage.scss';
import header from '../../blocks/header/header';
import finder from '../../blocks/number-finder/number-finder';

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded);

function handlerDocumentDOMLoaded() {
  header();
  finder();
}
