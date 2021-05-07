class Textfield {
  #input

  #arrow

  constructor(root) {
    this.#input = root.querySelector('.js-textfield__value');

    const arrow = root.querySelector('.js-textfield__arrow');
    if (arrow) this.#arrow = arrow;
  }

  setValue(value) {
    this.#input.value = value;
  }

  getValue() {
    return this.#input.value;
  }

  getInput() {
    return this.#input;
  }

  getArrow() {
    return this.#arrow;
  }
}

export default Textfield;
