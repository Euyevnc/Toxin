import Textfield from '../textfield/textfield';

class InputWithCounter {
  constructor(area = document) {
    this.root = area.querySelector('.js-input-with-counter');
    this.items = [];
    this.textfield = new Textfield(this.root);
    this.input = this.textfield.input;
    this.arrow = this.textfield.arrow;

    this.menu = this.root.querySelector('.js-input-with-counter__menu');
    this.clearingButton = this.root.querySelector('.js-input-with-counter__button_delete');
    this.confirmingButton = this.root.querySelector('.js-input-with-counter__button_confirm');

    this.input.addEventListener('focus', this.#handlerInputFocus);
    this.arrow.addEventListener('click', this.#handlerArrowClick);
    this.confirmingButton.addEventListener('click', this.#handlerConfirmButtonClick);
    this.clearingButton.addEventListener('click', this.#handlerClearButton);

    this.root.querySelectorAll('.js-input-with-counter__element').forEach((item) => {
      const newItem = new InputWithCounterElement(item, this.displayValue);
      this.items.push(newItem);
    });
  }

  displayValue = () => {
    const generatedValue = this.#concat();
    this.textfield.setValue(generatedValue);

    if (generatedValue) this.clearingButton.classList.add('input-with-counter__button_visible-delete');
    else this.clearingButton.classList.remove('input-with-counter__button_visible-delete');
  }

  #menuRollDown = () => {
    document.addEventListener('click', this.#handlerDocClick);
    document.addEventListener('focusin', this.#handlerDocFocus);
    this.arrow.addEventListener('click', this.#handlerArrowClosingClick);
    this.arrow.removeEventListener('click', this.#handlerArrowClick);

    this.input.classList.add('textfield__value_active');
    this.menu.classList.remove('input-with-counter__menu_hidden');
    this.arrow.querySelector('.arrow').textContent = 'expand_less';
  }

  #menuRollUp = () => {
    document.removeEventListener('click', this.#handlerDocClick);
    document.removeEventListener('focusin', this.#handlerDocFocus);
    this.arrow.addEventListener('click', this.#handlerArrowClick);
    this.arrow.removeEventListener('click', this.#handlerArrowClosingClick);

    this.input.classList.remove('textfield__value_active');
    this.menu.classList.add('input-with-counter__menu_hidden');
    this.arrow.querySelector('.arrow').textContent = 'expand_more';
  }

  #concat = () => {
    let stringForValue = '';
    let amountOfWord = 0;
    let prevNumber;
    this.items.forEach((item) => {
      let number = item.value;

      if (amountOfWord < 2) {
        if (prevNumber) number += prevNumber;
        if (!item.concat) {
          if (number === 0) return;
          if (stringForValue) stringForValue += ', ';

          stringForValue += number;

          if (number === 1 || number % 10 === 1) {
            stringForValue = `${stringForValue} ${item.nameForms[0]}`;
          } else if (number < 5 || (number % 10) < 5) {
            stringForValue = `${stringForValue} ${item.nameForms[1]}`;
          } else stringForValue = `${stringForValue} ${item.nameForms[2]}`;
          prevNumber = null;
          amountOfWord += 1;
        } else prevNumber = number;
      } else if (amountOfWord === 2) {
        if (number !== 0) stringForValue += '...';
      }
    });
    return stringForValue;
  };

  #clear = () => {
    this.clearingButton.classList.remove('input-with-counter__button_visible-delete');
    this.input.value = '';
    this.items = this.items.map((item) => {
      const itemCopy = item;
      itemCopy.value = itemCopy.min;
      itemCopy.minus.classList.add('input-with-counter__tumbler_depricated');
      if (itemCopy.min !== itemCopy.max) {
        itemCopy.plus.classList.remove('input-with-counter__tumbler_depricated');
      }
      return itemCopy;
    });
  }

  #handlerArrowClick = () => {
    this.#menuRollDown();
  }

  #handlerArrowClosingClick = () => {
    this.#menuRollUp();
  }

  #handlerDocClick = (e) => {
    if (!this.root.contains(e.target)) {
      this.#menuRollUp();
    }
  }

  #handlerDocFocus = (e) => {
    if (!this.root.contains(e.target)) {
      this.#menuRollUp();
    }
  }

  #handlerInputFocus = () => {
    this.#menuRollDown();
  }

  #handlerConfirmButtonClick = (e) => {
    if (e.type === 'keydown' && e.code !== 'Enter') return;
    this.#menuRollUp();
  }

  #handlerClearButton = (e) => {
    if (e.type === 'keydown' && e.code !== 'Enter') return;
    this.#clear();
  }
}

class InputWithCounterElement {
  constructor(item, callback) {
    this.root = item;
    this.callback = callback;
    this.name = this.root.querySelector('.js-input-with-counter__item-name');
    this.minus = this.root.querySelector('.js-input-with-counter__tumbler:first-child');
    this.plus = this.root.querySelector('.js-input-with-counter__tumbler:last-child');
    this.number = this.root.querySelector('.js-input-with-counter__number');

    if (this.name.dataset.concat) this.concat = true;
    else {
      this.nameForms = [
        this.name.dataset.form1,
        this.name.dataset.form2,
        this.name.dataset.form3];
    }

    this.min = Number(this.minus.dataset.min);
    this.max = Number(this.plus.dataset.max);

    this.value = Number(this.number.dataset.init) || this.min;

    this.minus.addEventListener('click', this.#handlerMinusClick);
    this.minus.addEventListener('keydown', this.#handlerMinusClick);
    this.plus.addEventListener('click', this.#handlerPlusClick);
    this.plus.addEventListener('keydown', this.#handlerPlusClick);
  }

  get value() {
    return this._value;
  }

  set value(number) {
    this._value = number;
    if (this.value === this.min) {
      this.minus.classList.add('input-with-counter__tumbler_depricated');
    }
    if (this.value === this.max) {
      this.plus.classList.add('input-with-counter__tumbler_depricated');
    }
    this.number.textContent = number;
  }

  #handlerPlusClick = (e) => {
    if (e.type === 'keydown' && e.code !== 'Enter') return;
    const newValue = this.value + 1;
    if (newValue <= this.max) {
      this.value = newValue;

      if (this.value !== this.min) {
        this.minus.classList.remove('input-with-counter__tumbler_depricated');
      }
    }
    this.callback();
  }

  #handlerMinusClick = (e) => {
    if (e.type === 'keydown' && e.code !== 'Enter') return;
    const newValue = this.value - 1;
    if (newValue >= this.min) {
      this.value = newValue;

      if (this.value !== this.max) {
        this.plus.classList.remove('input-with-counter__tumbler_depricated');
      }
    }
    this.callback();
  }
}

export default InputWithCounter;
