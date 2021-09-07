class Burger {
  constructor({ area = document, menuSelector = '', activeClass = '' }) {
    this.root = area.querySelector('.js-burger');
    this.menu = area.querySelector(menuSelector);
    this.root.addEventListener('click', this.handlerBurgerClick);

    this.activeClass = activeClass;
  }

  handlerBurgerClick = () => {
    this.root.classList.toggle('burger_active');
    this.menu.classList.toggle(this.activeClass);
  }
}

export default Burger;
