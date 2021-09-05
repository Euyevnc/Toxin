import menu from '../menu';
import burger from '../burger';

class Header {
  constructor({ root }) {
    this.menuObject = menu({ root: root.querySelector('.js-menu') });
    this.burgerObject = burger({
      area: root,
      menuSelector: '.js-menu',
      activeClass: 'menu_expanded',
    });
  }
}

export default Header;
