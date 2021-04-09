function textfieldForDropping() {
  const inputs = [];
  document.querySelectorAll('.js-textfield-for-dropping').forEach((element) => {
    const newInput = new TextfieldForDropping(element);
    newInput.init();
    inputs.push(newInput);
  });
  if (inputs.length === 1) return inputs[0];
  return inputs;
}
class TextfieldForDropping {
  constructor(root) {
    this.root = root;
  }

  init() {
    this.input = this.root.querySelector('.js-textfield-for-dropping__value');
    this.arrow = this.root.querySelector('.js-textfield-for-dropping__arrow');
  }
}

export default textfieldForDropping;
