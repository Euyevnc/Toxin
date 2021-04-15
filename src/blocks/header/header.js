import Menu from '../menu/menu';
import Burger from '../burger/burger';

class Header {
  constructor(area = document) {
    this.root = area.querySelector('.js-header');
    this.menu = new Menu(this.root);
    this.burger = new Burger({ area: this.root, menuSelector: '.js-menu', activeClass: 'menu_expanded' });
  }
}

export default Header;
