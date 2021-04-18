const firstElement = document.querySelector('.js-textfield');

class Textfield {
  constructor(root = firstElement) {
    this.root = root;
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
