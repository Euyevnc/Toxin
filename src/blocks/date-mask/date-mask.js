import Textfield from '../textfield/textfield';

import 'jquery';
import '../../plugins/jquery.maskinput.min';

class DateMask {
  constructor(area = document) {
    this.root = area.querySelector('.js-date-mask');
    this.textfield = new Textfield(this.root);
    this.input = this.textfield.input;
  }

  init() {
    $(this.input).mask('99.99.9999');
  }
}

export default DateMask;
