function droppingCheckboxes() {
  const fieldsets = [];

  document.querySelectorAll('.js-dropping-checkboxes').forEach((element) => {
    const newFieldset = new DroppingCheckboxes(element);
    newFieldset.init();
    fieldsets.push(newFieldset);
  });

  if (fieldsets.length === 1) return fieldsets[0];
  return fieldsets;
}

class DroppingCheckboxes {
  constructor(root) {
    this.root = root;
    this.expanded = Boolean(root.dataset.expanded);
  }

  init() {
    const { root } = this;
    const arrow = this.root.querySelector('.arrow-down');
    const list = this.root.querySelector('.js-dropping-checkboxes__container');
    const object = this;

    if (this.expanded) {
      list.classList.add('dropping-checkboxes__container_visible');
      arrow.innerHTML = 'expand_less';
    }

    root.querySelector('.js-dropping-checkboxes__header').addEventListener('click', handlerHeaderClick);
    root.querySelector('.js-dropping-checkboxes__header').addEventListener('keydown', handlerHeaderKeydown);

    /// ////
    function handlerHeaderClick() {
      if (object.expanded) {
        list.classList.remove('dropping-checkboxes__container_visible');
        arrow.innerHTML = 'expand_more';
      } else {
        list.classList.add('dropping-checkboxes__container_visible');
        arrow.innerHTML = 'expand_less';
      }
      object.expanded = !object.expanded;
    }
    function handlerHeaderKeydown(e) {
      if (e.code === 'Enter') {
        if (object.expanded) {
          object.list.classList.remove('dropping-checkboxes__container_visible');
          object.arrow.innerHTML = 'expand_more';
        } else {
          object.list.classList.add('dropping-checkboxes__container_visible');
          object.arrow.innerHTML = 'expand_less';
        }
        object.expanded = !object.expanded;
      }
    }
  }
}

export default droppingCheckboxes;
