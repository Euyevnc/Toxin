class DiagramSection {
  constructor(root) {
    this.root = root;

    this.amount = Number(this.root.dataset.amount);
    this._init();
  }

  _init = () => {
    this.circle = this.root.querySelector('.js-diagram__legend-circle');
    this.plate = this.root.querySelector('.js-diagram__legend-lettering');
    this.name = this.plate.dataset.name;
    this.plate.textContent = this.name;

    this.colors = this.circle.dataset.colors.split(', ');
    [this.startGradient] = this.colors;
    [, this.endGradient] = this.colors;

    this.circle.style.background = `linear-gradient(180deg, 
      ${this.startGradient} 0%, ${this.endGradient} 100%)`;
  }
}

export default DiagramSection;
