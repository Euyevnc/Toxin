class DiagramSection {
  constructor(root) {
    this.root = root;
    this.circle = root.querySelector('.js-diagram__legend-circle');
    this.plate = root.querySelector('.js-diagram__legend-lettering');
    this.amount = Number(root.dataset.amount);
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
