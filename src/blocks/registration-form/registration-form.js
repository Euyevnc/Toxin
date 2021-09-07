import dateMaskedInput from
  '../date-masked-textfield';

class RegistrationForm {
  constructor({ root }) {
    this.root = root;
    this.birthField = dateMaskedInput({
      root: root
        .querySelector('.js-date-masked-textfield'),
    });
  }
}

export default RegistrationForm;
