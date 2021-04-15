class Textfield {
  constructor(area = document) {
    this.root = area.querySelector('.js-textfield');
    this.input = this.root.querySelector('.js-textfield__value');
    this.arrow = this.root.querySelector('.js-textfield__arrow');
  }

  setValue(value) {
    this.input.value = value;
  }

  getValue() {
    return this.input.value;
  }
}

export default Textfield;
