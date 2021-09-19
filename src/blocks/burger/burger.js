class Burger {
  constructor({ root, menu, activeClass = '' }) {
    this.root = root;
    this.menu = menu;
    this.activeClass = activeClass;

    this._init();
  }

  _handlerBurgerClick = () => {
    this.root.classList.toggle('burger_active');
    this.menu.classList.toggle(this.activeClass);
  }

  _init = () => {
    this.root.addEventListener('click', this._handlerBurgerClick);
  }
}

export default Burger;
