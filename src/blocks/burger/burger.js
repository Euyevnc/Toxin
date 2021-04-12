function burger({ area = document, data = {} } = {}) {
  const newBurger = new Burger(area, data.menuSelector, data.activeClass);
  return newBurger;
}

class Burger {
  constructor(area, menuSelector, activeClass) {
    this.area = area;
    this.menuSelector = menuSelector;
    this.activeClass = activeClass;
    this.#init();
  }

  #init = () => {
    const { area, menuSelector, activeClass } = this;
    this.menu = area.querySelector(menuSelector);
    this.root = area.querySelector('.js-burger');
    this.root.addEventListener('click', handlerBurgerClick);

    const { root, menu } = this;
    function handlerBurgerClick() {
      root.classList.toggle('burger_cond_active');
      menu.classList.toggle(activeClass);
    }
  }
}

export default burger;
