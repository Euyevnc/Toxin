import Textfield from '../textfield/textfield';

import 'jquery';
import '../../plugins/jquery.maskinput.min';

const firstElement = document.querySelector('.js-date-masked-textfield');
class DateMaskedTextfield {
  constructor(root = firstElement) {
    this.root = root;
    this.textfield = new Textfield(this.root.querySelector('.js-textfield'));
    this.input = this.textfield.input;
  }

  init() {
    $(this.input).mask('99.99.9999');
  }
}

export default DateMaskedTextfield;
