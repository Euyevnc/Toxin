import DateMaskedTextfield from '../date-masked-textfield/date-masked-textfield';

class Registration {
  constructor(root) {
    this.birthField = new DateMaskedTextfield(root.querySelector('.js-date-masked-textfield'));
  }
}

export default Registration;
