import DateMaskedTextfield from '../date-masked-textfield/date-masked-textfield';

class RegistrationForm {
  constructor(root) {
    this.element = root.querySelector('.js-registration-form');
    this.birthField = new DateMaskedTextfield(this.element.querySelector('.js-date-masked-textfield'));
  }
}

export default RegistrationForm;
