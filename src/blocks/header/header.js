import menu from '../menu';
import burger from '../burger';

class Header {
  constructor({ root }) {
    this.root = root;

    this._init();
  }

  _init = () => {
    this.menu = this.root.querySelector('.js-menu');
    this.menuObject = menu({ root: this.menu });
    this.burger = this.root.querySelector('.js-burger');
    this.burgerObject = burger({
      root: this.burger,
      menu: this.menu,
      activeClass: 'menu_expanded',
    });
  }
}

export default Header;
