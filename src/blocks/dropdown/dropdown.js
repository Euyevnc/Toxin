import DropdownItem from './dropdownItem';
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

    this.buttonsPanel = this.root.querySelector('.js-dropdown__buttons');
  }

  _displayValue = () => {
    const generatedValue = this._concat();
    this.textfield.setValue(generatedValue);

    if (this.buttonsPanel) {
      generatedValue
        ? this.clearingButton.classList.remove('dropdown__button_invisible')
        : this.clearingButton.classList.add('dropdown__button_invisible');
    }
  }

  _menuRollDown = () => {
    document.addEventListener('click', this._handlerDocClick);
    document.addEventListener('focusin', this.handlerDocFocus);
    this.arrow.addEventListener('click', this._handlerArrowClosingClick);
    this.arrow.removeEventListener('click', this._handlerArrowClick);

    this.input.classList.add('textfield__value_active');
    this.menu.classList.remove('dropdown__menu_hidden');
    this.arrow.querySelector('.arrow').textContent = 'expand_less';
  }

  _menuRollUp = () => {
    document.removeEventListener('click', this._handlerDocClick);
    document.removeEventListener('focusin', this.handlerDocFocus);
    this.arrow.addEventListener('click', this._handlerArrowClick);
    this.arrow.removeEventListener('click', this._handlerArrowClosingClick);

    this.input.classList.remove('textfield__value_active');
    this.menu.classList.add('dropdown__menu_hidden');
    this.arrow.querySelector('.arrow').textContent = 'expand_more';
  }

  _concat = () => {
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

  _clear = () => {
    this.clearingButton.classList.add('dropdown__button_invisible');
    this.input.value = '';
    this.items = this.items.map((item) => {
      const itemCopy = item;
      itemCopy.value = itemCopy.min;

      return itemCopy;
    });
  }

  _handlerArrowClick = () => {
    this._menuRollDown();
  }

  _handlerArrowClosingClick = () => {
    this._menuRollUp();
  }

  _handlerDocClick = (e) => {
    if (!this.root.contains(e.target)) {
      this._menuRollUp();
    }
  }

  handlerDocFocus = (e) => {
    if (!this.root.contains(e.target)) {
      this._menuRollUp();
    }
  }

  _handlerInputFocus = () => {
    this._menuRollDown();
  }

  _handlerConfirmButtonClick = (e) => {
    const keyIsNotEnter = e.type === 'keydown' && e.code !== 'Enter';
    if (keyIsNotEnter) return;
    this._menuRollUp();
  }

  _handlerClearButton = (e) => {
    const keyIsNotEnter = e.type === 'keydown' && e.code !== 'Enter';
    if (keyIsNotEnter) return;
    this._clear();
  }

  _init = () => {
    this.input.addEventListener('focus', this._handlerInputFocus);
    this.arrow.addEventListener('click', this._handlerArrowClick);

    if (this.buttonsPanel) {
      this.clearingButton = this.root
        .querySelector('.js-dropdown__button_delete');

      this.confirmingButton = this.root
        .querySelector('.js-dropdown__button_confirm');

      this.confirmingButton
        .addEventListener('click', this._handlerConfirmButtonClick);

      this.clearingButton
        .addEventListener('click', this._handlerClearButton);
    }

    this.root.querySelectorAll('.js-dropdown__item').forEach((item) => {
      const newItem = new DropdownItem(item, this._displayValue);
      this.items.push(newItem);
    });
  }
}

export default Dropdown;
