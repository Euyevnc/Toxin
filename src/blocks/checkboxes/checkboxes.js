class Checkboxes {
  constructor({ root }) {
    this.root = root;
    this.header = this.root.querySelector('.js-checkboxes__header');
    this.expanding = 'expanding' in this.root.dataset;
    this.expanded = 'expandedInitially' in this.root.dataset;
    if (this.expanding) {
      this.header.addEventListener('click', this.handlerHeaderClick);
      this.header.addEventListener('keydown', this.handlerHeaderKeydown);
    }
  }

  handlerHeaderClick = () => {
    this.root.classList.toggle('checkboxes_shrinked');
    this.expanded = !this.expanded;
  }

  handlerHeaderKeydown = (e) => {
    if (e.code !== 'Enter') return;
    this.root.classList.toggle('checkboxes_shrinked');
    this.expanded = !this.expanded;
  }
}

export default Checkboxes;
