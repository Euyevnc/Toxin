class DropdownItem {
  constructor(item, callback) {
    this.root = item;
    this.callback = callback;

    this._init();
  }

  get value() {
    return this._value;
  }

  set value(number) {
    const outOfBounds = number > this.max || number < this.min;
    if (outOfBounds) return;
    this._value = number;
    this.value === this.min
      ? this.minus.classList.add('dropdown__tumbler_depricated')
      : this.minus.classList.remove('dropdown__tumbler_depricated');
    this.value === this.max
      ? this.plus.classList.add('dropdown__tumbler_depricated')
      : this.plus.classList.remove('dropdown__tumbler_depricated');
    this.number.textContent = number;
    this.callback();
  }

  _handlerPlusClick = () => {
    const newValue = this.value + 1;
    this.value = newValue;
  }

  _handlerMinusClick = () => {
    const newValue = this.value - 1;
    this.value = newValue;
  }

  _handlerPlusKeydown = (e) => {
    if (e.code !== 'Enter') return;
    const newValue = this.value + 1;
    this.value = newValue;
  }

  _handlerMinusKeydown = (e) => {
    if (e.code !== 'Enter') return;
    const newValue = this.value - 1;
    this.value = newValue;
  }

  _init = () => {
    this.name = this.root.querySelector('.js-dropdown__item-name');
    this.minus = this.root.querySelector('.js-dropdown__tumbler_minus');
    this.plus = this.root.querySelector('.js-dropdown__tumbler_plus');
    this.number = this.root.querySelector('.js-dropdown__number');

    this.min = Number(this.minus.dataset.min);
    this.max = Number(this.plus.dataset.max);
    this.value = Number(this.number.dataset.init) || this.min;

    if (this.name.dataset.concat) this.concat = true;
    else {
      this.nameForms = this.name.dataset.nameForms.split(', ');
    }

    this.minus.addEventListener('click', this._handlerMinusClick);
    this.minus.addEventListener('keydown', this._handlerMinusKeydown);
    this.plus.addEventListener('click', this._handlerPlusClick);
    this.plus.addEventListener('keydown', this._handlerPlusKeydown);
  }
}

export default DropdownItem;
