import Chart from 'chart.js';

import DiagramSection from './diagramSection';

class Diagram {
  constructor({ root }) {
    this.root = root;
    this.canvas = root.querySelector('.js-diagram__canvas');
    this.subjectForms = Object
      .values(root.querySelector('.js-diagram__reviews-amount').dataset);

    this.legendItems = root.querySelectorAll('.diagram__legend-item');
    this.sections = [...this.legendItems]
      .map((item) => new DiagramSection(item));

    this._init();
  }

  _init = () => {
    const { canvas } = this;
    const ctxM = canvas.getContext('2d');
    const amounts = this.sections.map((item) => item.amount);
    const names = this.sections.map((item) => item.name);
    const gradients = this.sections
      .map((item) => this._createGradient(ctxM, item.colors));

    const total = this.sections.reduce((prev, cur) => prev + cur.amount, 0);
    this._fillTheLabel(total);

    const myChart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: names.reverse(),
        datasets: [{

          label: '# of Votes',
          data: amounts.reverse(),
          backgroundColor: gradients.reverse(),
          borderColor: Array(gradients.length).fill('white'),
          borderWidth: 1,
        }],
      },
      options: {
        animation: false,
        cutoutPercentage: 90,
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },

      },
    });
    this.diagram = myChart;
  }

  _createGradient = (context, colors) => {
    const newGrad = context.createLinearGradient(155, 0, 155, 120);

    const [startGradient] = colors;
    const [, endGradient] = colors;

    newGrad.addColorStop(0, startGradient);
    newGrad.addColorStop(1, endGradient);
    return newGrad;
  }

  _fillTheLabel = (total) => {
    let title;
    [, title] = this.subjectForms;

    if (total > 4) [, , title] = this.subjectForms;
    if (total % 10 > 4) [, , title] = this.subjectForms;
    if (total % 10 === 0) [, , title] = this.subjectForms;

    if (total === 1) [title] = this.subjectForms;
    if (total % 10 === 1) [title] = this.subjectForms;

    this.root.querySelector('.js-diagram__reviews-amount').textContent = total;
    this.root.querySelector('.js-diagram__subtitle').textContent = title;
  }
}

export default Diagram;
