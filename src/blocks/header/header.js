import Menu from '../menu/menu';
import Burger from '../burger/burger';

class Header {
  constructor(root) {
    this.menuObject = new Menu(root.querySelector('.js-menu'));
    this.burgerObject = new Burger({
      area: root,
      menuSelector: '.js-menu',
      activeClass: 'menu_expanded',
    });
  }
}

export default Header;
