class Checkboxes {
  constructor(area = document) {
    this.root = area.querySelector('.js-checkboxes');
    this.header = this.root.querySelector('.js-checkboxes__header');
    this.arrow = this.root.querySelector('.js-checkboxes__arrow .arrow');
    this.list = this.root.querySelector('.js-checkboxes__container');
    this.expanded = false;
    if (this.header && this.header.classList.contains('js-checkboxes__header_expanding')) {
      this.header.addEventListener('click', this.#handlerHeaderClick);
      this.header.addEventListener('keydown', this.#handlerHeaderKeydown);
    }
  }

  init() {
    const { arrow, list } = this;
    const expandedFromStart = Boolean('expanded' in this.header.dataset);

    if (expandedFromStart) {
      list.classList.add('checkboxes__container_visible');
      arrow.innerHTML = 'expand_less';
      this.expanded = !this.expanded;
    }
  }

  #handlerHeaderClick = () => {
    if (this.expanded) {
      this.list.classList.remove('checkboxes__container_visible');
      this.arrow.innerHTML = 'expand_more';
    } else {
      this.list.classList.add('checkboxes__container_visible');
      this.arrow.innerHTML = 'expand_less';
    }
    this.expanded = !this.expanded;
  }

  #handlerHeaderKeydown = (e) => {
    if (e.code === 'Enter') {
      if (this.expanded) {
        this.list.classList.remove('checkboxes__container_visible');
        this.arrow.innerHTML = 'expand_more';
      } else {
        this.list.classList.add('checkboxes__container_visible');
        this.arrow.innerHTML = 'expand_less';
      }
      this.expanded = !this.expanded;
    }
  }
}

export default Checkboxes;
