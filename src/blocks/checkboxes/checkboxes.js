const firstElement = document.querySelector('.js-checkboxes');

class Checkboxes {
  constructor(root = firstElement) {
    this.root = root;
    this.header = this.root.querySelector('.js-checkboxes__header');
    this.arrow = this.root.querySelector('.js-checkboxes__arrow .arrow');
    this.list = this.root.querySelector('.js-checkboxes__container');
    this.expanding = 'expanding' in this.root.dataset;
    this.expanded = 'expanded_from_start' in this.root.dataset;
    if (this.expanding) {
      this.header.addEventListener('click', this.#handlerHeaderClick);
      this.header.addEventListener('keydown', this.#handlerHeaderKeydown);
    }
  }

  #handlerHeaderClick = () => {
    if (this.expanded) {
      this.root.classList.add('checkboxes_shrinked');
    } else {
      this.root.classList.remove('checkboxes_shrinked');
    }
    this.expanded = !this.expanded;
  }

  #handlerHeaderKeydown = (e) => {
    if (e.code === 'Enter') {
      if (this.expanded) {
        this.root.classList.add('checkboxes_shrimped');
      } else {
        this.root.classList.remove('checkboxes_shrimped');
      }
      this.expanded = !this.expanded;
    }
  }
}

export default Checkboxes;
