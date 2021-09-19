class Menu {
  constructor({ root }) {
    this.root = root;

    this._init();
  }

  _handlerElementClick = (e) => {
    const element = e.target.closest('.js-menu__element');
    const submenu = element.querySelector('.js-menu__submenu');
    element.classList.toggle('menu__element_active');
    submenu.classList.toggle('menu__submenu_active');
    element.querySelector('.js-arrow').textContent = element
      .classList.contains('menu__element_active')
      ? 'expand_less'
      : 'expand_more';
  }

  _init = () => {
    this.submenus = this.root.querySelectorAll('.js-menu__submenu');
    this.submenus.forEach((it) => {
      const element = it.closest('.js-menu__element');
      element.addEventListener('click', this._handlerElementClick);
    });
  }
}

export default Menu;
