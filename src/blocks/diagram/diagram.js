import Chart from 'chart.js';

const firstElement = document.querySelector('.js-diagram');
class Diagram {
  constructor(root = firstElement) {
    this.root = root;
    this.canvas = root.querySelector('.js-diagram__canvas');
    this.subjectForms = Object.values(root.querySelector('.js-diagram__reviews-amount').dataset);

    this.legendItems = root.querySelectorAll('.diagram__legend-item');
    this.sections = [...this.legendItems].map((item) => new DiagramSection(item));

    this.#init();
  }

  #init = () => {
    const { canvas } = this;
    const ctxM = canvas.getContext('2d');
    const amounts = this.sections.map((item) => item.amount);
    const names = this.sections.map((item) => item.name);
    const gradients = this.sections.map((item) => this.#createGradient(ctxM, item.colors));

    const total = this.sections.reduce((prev, cur) => prev + cur.amount, 0);
    this.#fillTheLabel(total);

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
        cutoutPercentage: 90,
        legend: {
          display: false,
        },
      },
    });
    this.diagram = myChart;
  }

  #createGradient = (context, colors) => {
    const newGrad = context.createLinearGradient(155, 0, 155, 120);
    newGrad.addColorStop(0, colors[0]);
    newGrad.addColorStop(1, colors[1]);
    return newGrad;
  }

  #fillTheLabel = (total) => {
    let title;
    if (total === 1 || total % 10 === 1) [title] = this.subjectForms;
    else if (total > 4 || total % 10 > 4) [, , title] = this.subjectForms;
    else [, title] = this.subjectForms;
    this.root.querySelector('.js-diagram__reviews-amount').textContent = total;
    this.root.querySelector('.js-diagram__subtitle').textContent = title;
  }
}

class DiagramSection {
  constructor(root) {
    this.root = root;
    this.circle = root.querySelector('.diagram__legend-circle');
    this.plate = root.querySelector('.diagram__legend-lettering');
    this.amount = Number(root.dataset.amount);
    this.name = this.plate.dataset.name;
    this.colors = this.circle.dataset.colors.split(', ');

    this.plate.textContent = this.name;
    this.circle.style.background = `linear-gradient(180deg, ${this.colors[0]} 0%, ${this.colors[1]} 100%)`;
  }
}

export default Diagram;
