import 'jquery';
import 'jquery.maskedinput/src/jquery.maskedinput';

import textfield from '../textfield';

class DateMaskedTextfield {
  constructor({ root }) {
    this.textfield = textfield({ root: root.querySelector('.js-textfield') });
    this.input = this.textfield.getInput();
    $(this.input).mask('99.99.9999');
  }

  setValue = (value) => {
    this.textfield.setValue(value);
  }
}

export default DateMaskedTextfield;
