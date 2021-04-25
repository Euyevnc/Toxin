import Textfield from '../textfield/textfield';

import 'jquery';
import '../../plugins/jquery.maskinput.min';

class DateMaskedTextfield {
  constructor(root) {
    this.root = root;
    this.textfield = new Textfield(this.root.querySelector('.js-textfield'));
    this.input = this.textfield.input;
    this.init();
  }

  init() {
    $(this.input).mask('99.99.9999');
  }
}

export default DateMaskedTextfield;
