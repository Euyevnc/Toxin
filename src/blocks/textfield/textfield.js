function textfield({ area = document } = {}) {
  const textfields = [];
  area.querySelectorAll('.js-textfield').forEach((element) => {
    const newTextfiels = new Textfield(element);
    textfields.push(newTextfiels);
  });
  if (textfields.length === 1) return textfields[0];
  return textfields;
}
class Textfield {
  constructor(root) {
    this.root = root;
    this.input = root.querySelector('.js-textfield__value');
    this.arrow = root.querySelector('.js-textfield__arrow');
  }
}

export default textfield;
