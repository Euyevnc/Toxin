import dateMaskedInput from
  '../date-masked-textfield';

class RegistrationForm {
  constructor({ root }) {
    this.root = root;

    this._init();
  }

  _init = () => {
    this.birthField = dateMaskedInput({
      root: this.root
        .querySelector('.js-date-masked-textfield'),
    });
  }
}

export default RegistrationForm;
