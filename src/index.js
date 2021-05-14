import './index.scss';
import './layout/layout-for-hotel';
import uiKit from './UI-kit/UI-kit';
import Navigation from './UI-kit/UI-blocks/navigation/navigation';

document.addEventListener('DOMContentLoaded', handlerDOMLoaded);

function handlerDOMLoaded() {
  const sections = document.querySelectorAll('.js-section');
  // eslint-disable-next-line no-new
  new Navigation(document.querySelector('.js-navigation'), sections);
  uiKit();
}
