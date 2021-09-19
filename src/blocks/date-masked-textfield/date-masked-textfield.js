import Datemask from '../../libs/datemask';
import textfield from '../textfield';

class DateMaskedTextfield {
  constructor({ root }) {
    this.root = root;

    this._init();
  }

  setValue = (value) => {
    this.textfield.setValue(value);
  }

  _init = () => {
    this.textfield = textfield({
      root: this.root.querySelector('.js-textfield'),
    });
    this.mask = new Datemask({ input: this.textfield.getInput() });
  }
}

export default DateMaskedTextfield;
