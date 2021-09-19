class Textfield {
  constructor({ root }) {
    this.root = root;

    this._init();
  }

  setValue(value) {
    this._input.value = value;
  }

  getValue() {
    return this._input.value;
  }

  getInput() {
    return this._input;
  }

  getArrow() {
    return this._arrow;
  }

  _init = () => {
    this._input = this.root.querySelector('.js-textfield__value');

    const arrow = this.root.querySelector('.js-textfield__arrow');
    if (arrow) this._arrow = arrow;
  }
}

export default Textfield;
