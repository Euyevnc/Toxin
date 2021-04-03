import initMenu from '../menu/menu';
import initBurger from '../burger/burger';

function initHeader() {
  initMenu();
  initBurger({ menuSelector: '.js-menu', activeClass: 'menu_expanded' });
}

export default initHeader;
