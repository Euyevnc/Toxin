import DropdownElement from './dropdown__element';
import textfield from '../textfield';

class Dropdown {
  constructor({ root }) {
    this.root = root;
    this.items = [];

    this.textfield = textfield({
      root: this.root
        .querySelector('.js-textfield'),
    });

    this.input = this.textfield.getInput();

    this.arrow = this.root.querySelector('.js-dropdown__arrow');

    this.menu = this.root.querySelector('.js-dropdown__menu');

    this.input.addEventListener('focus', this.handlerInputFocus);
    this.arrow.addEventListener('click', this.handlerArrowClick);

    this.buttonsPanel = this.root.querySelector('.js-dropdown__buttons');

    if (this.buttonsPanel) {
      this.clearingButton = this.root
        .querySelector('.js-dropdown__button_delete');

      this.confirmingButton = this.root
        .querySelector('.js-dropdown__button_confirm');

      this.confirmingButton
        .addEventListener('click', this.handlerConfirmButtonClick);

      this.clearingButton
        .addEventListener('click', this.handlerClearButton);
    }

    this.root.querySelectorAll('.js-dropdown__element').forEach((item) => {
      const newItem = new DropdownElement(item, this.#displayValue);
      this.items.push(newItem);
    });

    this.#init();
  }

  #init = () => {
    this.#displayValue();
  }

  #displayValue = () => {
    const generatedValue = this.#concat();
    this.textfield.setValue(generatedValue);

    if (this.buttonsPanel) {
      generatedValue
        ? this.clearingButton.classList.remove('dropdown__button_invisible')
        : this.clearingButton.classList.add('dropdown__button_invisible');
    }
  }

  #menuRollDown = () => {
    document.addEventListener('click', this.handlerDocClick);
    document.addEventListener('focusin', this.handlerDocFocus);
    this.arrow.addEventListener('click', this.handlerArrowClosingClick);
    this.arrow.removeEventListener('click', this.handlerArrowClick);

    this.input.classList.add('textfield__value_active');
    this.menu.classList.remove('dropdown__menu_hidden');
    this.arrow.querySelector('.arrow').textContent = 'expand_less';
  }

  #menuRollUp = () => {
    document.removeEventListener('click', this.handlerDocClick);
    document.removeEventListener('focusin', this.handlerDocFocus);
    this.arrow.addEventListener('click', this.handlerArrowClick);
    this.arrow.removeEventListener('click', this.handlerArrowClosingClick);

    this.input.classList.remove('textfield__value_active');
    this.menu.classList.add('dropdown__menu_hidden');
    this.arrow.querySelector('.arrow').textContent = 'expand_more';
  }

  #concat = () => {
    let stringForValue = '';
    let amountOfWord = 0;
    let prevNumber = 0;
    this.items.forEach((item) => {
      let number = item.value;

      if (item.concat) {
        prevNumber = number + prevNumber;
        return;
      }

      if (amountOfWord > 2) return;

      if (amountOfWord === 2) {
        stringForValue += number === 0 ? '' : '...';
        return;
      }

      number += prevNumber;
      if (number === 0) return;

      let [, nameForm] = item.nameForms;

      if (number % 10 > 4) [, , nameForm] = item.nameForms;
      if (number > 4) [, , nameForm] = item.nameForms;
      if (number % 10 === 0) [, , nameForm] = item.nameForms;

      if (number === 1) [nameForm] = item.nameForms;
      if (number % 10 === 1) [nameForm] = item.nameForms;

      if (stringForValue) stringForValue += ', ';
      stringForValue += `${number} ${nameForm}`;

      prevNumber = 0;
      amountOfWord += 1;
    });
    return stringForValue;
  };

  #clear = () => {
    this.clearingButton.classList.add('dropdown__button_invisible');
    this.input.value = '';
    this.items = this.items.map((item) => {
      const itemCopy = item;
      itemCopy.value = itemCopy.min;

      return itemCopy;
    });
  }

  handlerArrowClick = () => {
    this.#menuRollDown();
  }

  handlerArrowClosingClick = () => {
    this.#menuRollUp();
  }

  handlerDocClick = (e) => {
    if (!this.root.contains(e.target)) {
      this.#menuRollUp();
    }
  }

  handlerDocFocus = (e) => {
    if (!this.root.contains(e.target)) {
      this.#menuRollUp();
    }
  }

  handlerInputFocus = () => {
    this.#menuRollDown();
  }

  handlerConfirmButtonClick = (e) => {
    if (e.type === 'keydown' && e.code !== 'Enter') return;
    this.#menuRollUp();
  }

  handlerClearButton = (e) => {
    if (e.type === 'keydown' && e.code !== 'Enter') return;
    this.#clear();
  }
}

export default Dropdown;
