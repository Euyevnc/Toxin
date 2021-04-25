import Textfield from '../textfield/textfield';
import DateMaskedTextfield from '../date-masked-textfield/date-masked-textfield';

class Registration {
  constructor(root) {
    this.root = root;
    this.formObject = this.root.querySelector('.js-registration__form .js-textfield');
    this.nameFieldObject = new Textfield(this.root.querySelector('.js-registration__data-name .js-textfield'));
    this.surnameFieldObject = new Textfield(this.root.querySelector('.js-registration__data-surname .js-textfield'));
    this.birthFieldObject = new DateMaskedTextfield(this.root.querySelector('.js-date-masked-textfield'));
    this.emailFieldObject = new Textfield(this.root.querySelector('.js-registration__data-email .js-textfield'));
    this.passwordFieldObject = new Textfield(this.root.querySelector('.js-registration__data-password .js-textfield'));
  }
}

export default Registration;
