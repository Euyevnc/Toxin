function checkboxes() {
  const fieldsets = [];

  document.querySelectorAll('.js-checkboxes').forEach((element) => {
    const newFieldset = new Checkboxes(element);
    newFieldset.init();
    fieldsets.push(newFieldset);
  });

  if (fieldsets.length === 1) return fieldsets[0];
  return fieldsets;
}

class Checkboxes {
  constructor(root) {
    this.root = root;
    this.header = root.querySelector('.js-checkboxes__header');
    this.arrow = root.querySelector('.js-checkboxes__arrow .arrow');
    this.list = root.querySelector('.js-checkboxes__container');
    this.expanded = false;
  }

  init() {
    const {
      arrow, list, header,
    } = this;
    const object = this;
    if (header && header.classList.contains('js-checkboxes__header_expanding')) {
      const expandedFromStart = Boolean('expanded' in this.header.dataset);
      if (expandedFromStart) {
        list.classList.add('checkboxes__container_visible');
        arrow.innerHTML = 'expand_less';
        object.expanded = !object.expanded;
      }
      header.addEventListener('click', handlerHeaderClick);
      header.addEventListener('keydown', handlerHeaderKeydown);
    }
    function handlerHeaderClick() {
      if (object.expanded) {
        list.classList.remove('checkboxes__container_visible');
        arrow.innerHTML = 'expand_more';
      } else {
        list.classList.add('checkboxes__container_visible');
        arrow.innerHTML = 'expand_less';
      }
      object.expanded = !object.expanded;
    }
    function handlerHeaderKeydown(e) {
      if (e.code === 'Enter') {
        if (object.expanded) {
          object.list.classList.remove('checkboxes__container_visible');
          object.arrow.innerHTML = 'expand_more';
        } else {
          object.list.classList.add('checkboxes__container_visible');
          object.arrow.innerHTML = 'expand_less';
        }
        object.expanded = !object.expanded;
      }
    }
  }
}

export default checkboxes;
