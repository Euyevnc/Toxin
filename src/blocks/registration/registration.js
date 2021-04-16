import Textfield from '../textfield/textfield';
import DateMask from '../date-mask/date-mask';

class Registration {
  constructor(area = document) {
    this.root = area.querySelector('.js-registration');
    this.form = this.root.querySelector('.js-registration__form');
    this.nameField = new Textfield(this.root.querySelector('.js-registration__data-name'));
    this.surnameField = new Textfield(this.root.querySelector('.js-registration__data-surname'));
    this.birthField = new DateMask(this.root.querySelector('.js-registration__data-birthday'));
    this.emailField = new Textfield(this.root.querySelector('.js-registration__data-email'));
    this.passwordField = new Textfield(this.root.querySelector('.js-registration__data-password'));
  }

  init() {
    this.birthField.init();
  }
}

export default Registration;
