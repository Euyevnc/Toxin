function menu() {
  const menus = [];

  document.querySelectorAll('.js-menu').forEach((element) => {
    const newMenu = new Menu(element);
    newMenu.init();
    menus.push(newMenu);
  });
  if (menus.length === 1) return menus[0];
  return menus;
}

class Menu {
  constructor(root) {
    this.root = root;
  }

  init() {
    this.submenus = this.root.querySelectorAll('.js-menu__submenu');
    this.submenus.forEach((it) => {
      const element = it.closest('.js-menu__element');
      element.addEventListener('click', handlerElementTypeDroppingClick);

      function handlerElementTypeDroppingClick() {
        element.classList.toggle('menu__element_active');
        it.classList.toggle('menu__submenu_active');
        element.querySelector('.arrow-down').textContent = element.classList.contains('menu__element_active')
          ? 'expand_less'
          : 'expand_more';
      }
    });
  }
}

export default menu;
