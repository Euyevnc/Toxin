import Datemask from '../../libs/datemask';
import textfield from '../textfield';

class DateMaskedTextfield {
  constructor({ root }) {
    this.textfield = textfield({ root: root.querySelector('.js-textfield') });
    this.mask = new Datemask({ input: this.textfield.getInput() });
  }

  setValue = (value) => {
    this.textfield.setValue(value);
  }
}

export default DateMaskedTextfield;
