function burger(data) {
  const element = new Burger(document.querySelector('.js-burger'), data.menuSelector, data.activeClass);
  element.init();
  return element;
}

class Burger {
  constructor(root, menuSelector, activeClass) {
    this.root = root;
    this.menuSelector = menuSelector;
    this.activeClass = activeClass;
  }

  init() {
    this.menu = document.querySelector(this.menuSelector);
    const { root, activeClass, menu } = this;

    root.addEventListener('click', handlerBurgerClick);
    function handlerBurgerClick() {
      root.classList.toggle('burger_cond_active');
      menu.classList.toggle(activeClass);
    }
  }
}

export default burger;
