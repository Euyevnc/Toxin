function textfielForDropping() {
  const inputs = [];
  document.querySelectorAll('.js-textfield-for-dropping').forEach((element) => {
    const newInput = new TextfielForDropping(element);
    newInput.init();
    inputs.push(newInput);
  });
  if (inputs.length === 1) return inputs[0];
  return inputs;
}
class TextfielForDropping {
  constructor(root) {
    this.root = root;
  }

  init() {
    this.input = this.root.querySelector('.js-textfield-for-dropping__value');
    this.arrow = this.root.querySelector('.js-textfield-for-dropping__arrow');
  }
}

export default textfielForDropping;