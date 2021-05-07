class Navigation {
  constructor(root, elements) {
    this.buttons = root.querySelectorAll('.js-navigation__button');
    this.elements = elements;
    this.#init();
  }

  #init = () => {
    const { elements, buttons } = this;

    this.buttons.forEach((button, buttonIndex) => {
      button.addEventListener('click', handlerButtonClick);

      function handlerButtonClick() {
        elements.forEach((element, elementIndex) => {
          const node = element;
          elementIndex === buttonIndex
            ? node.style.display = 'flex'
            : node.style.display = 'none';
        });
        buttons.forEach((btn, btnIndex) => {
          btnIndex === buttonIndex
            ? btn.classList.add('navigation__button_active')
            : btn.classList.remove('navigation__button_active');
        });
      }
    });

    buttons[0].click();
  }
}

export default Navigation;
