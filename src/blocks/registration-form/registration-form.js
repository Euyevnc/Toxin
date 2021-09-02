import DateMaskedTextfield from
  '../date-masked-textfield/date-masked-textfield';

class RegistrationForm {
  constructor(root) {
    this.birthField = new DateMaskedTextfield(root
      .querySelector('.js-date-masked-textfield'));
  }
}

export default RegistrationForm;
