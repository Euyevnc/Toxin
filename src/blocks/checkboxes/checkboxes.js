class Checkboxes {
  constructor({ root }) {
    this.root = root;
    this.expanding = 'expanding' in this.root.dataset;
    this.expanded = 'expandedInitially' in this.root.dataset;

    this._init();
  }

  _handlerHeaderClick = () => {
    this.root.classList.toggle('checkboxes_shrinked');
    this.expanded = !this.expanded;
  }

  _handlerHeaderKeydown = (e) => {
    if (e.code !== 'Enter') return;
    this.root.classList.toggle('checkboxes_shrinked');
    this.expanded = !this.expanded;
  }

  _init = () => {
    this.header = this.root.querySelector('.js-checkboxes__header');
    if (this.expanding) {
      this.header.addEventListener('click', this._handlerHeaderClick);
      this.header.addEventListener('keydown', this._handlerHeaderKeydown);
    }
  }
}

export default Checkboxes;
