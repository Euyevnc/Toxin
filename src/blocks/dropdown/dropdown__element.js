class DropdownElement {
  #value

  constructor(item, callback) {
    this.root = item;
    this.callback = callback;
    this.name = this.root.querySelector('.js-dropdown__item-name');
    this.minus = this.root.querySelector('.js-dropdown__tumbler_minus');
    this.plus = this.root.querySelector('.js-dropdown__tumbler_plus');
    this.number = this.root.querySelector('.js-dropdown__number');

    if (this.name.dataset.concat) this.concat = true;
    else {
      this.nameForms = this.name.dataset.nameForms.split(', ');
    }

    this.min = Number(this.minus.dataset.min);
    this.max = Number(this.plus.dataset.max);

    this.minus.addEventListener('click', this.handlerMinusClick);
    this.minus.addEventListener('keydown', this.handlerMinusKeydown);
    this.plus.addEventListener('click', this.handlerPlusClick);
    this.plus.addEventListener('keydown', this.handlerPlusKeydown);
    this.value = Number(this.number.dataset.init) || this.min;
  }

  get value() {
    return this.#value;
  }

  set value(number) {
    if (number > this.max || number < this.min) return;
    this.#value = number;
    this.value === this.min
      ? this.minus.classList.add('dropdown__tumbler_depricated')
      : this.minus.classList.remove('dropdown__tumbler_depricated');
    this.value === this.max
      ? this.plus.classList.add('dropdown__tumbler_depricated')
      : this.plus.classList.remove('dropdown__tumbler_depricated');
    this.number.textContent = number;
    this.callback();
  }

  handlerPlusClick = () => {
    const newValue = this.value + 1;
    this.value = newValue;
  }

  handlerMinusClick = () => {
    const newValue = this.value - 1;
    this.value = newValue;
  }

  handlerPlusKeydown = (e) => {
    if (e.code !== 'Enter') return;
    const newValue = this.value + 1;
    this.value = newValue;
  }

  handlerMinusKeydown = (e) => {
    if (e.code !== 'Enter') return;
    const newValue = this.value - 1;
    this.value = newValue;
  }
}

export default DropdownElement;
