import 'jquery';
import 'jquery.maskedinput/src/jquery.maskedinput';

class Datemask {
  constructor({ input }) {
    this.input = $(input);
    this.input.mask('99.99.9999');
  }
}

export default Datemask;
