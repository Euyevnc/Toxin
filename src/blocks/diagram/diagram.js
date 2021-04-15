import Chart from 'chart.js';

function diagram() {
  const diagrams = [];

  document.querySelectorAll('.js-diagram').forEach((element) => {
    const newDiagram = new Diagram(element);
    newDiagram.init();
    diagrams.push(newDiagram);
  });

  if (diagrams.length === 1) return diagrams[0];
  return diagrams;
}

class Diagram {
  constructor(root) {
    this.root = root;
    this.canvas = this.root.querySelector('.js-diagram__canvas');
    this.subjectForm = Object.values(this.root.querySelector('.js-diagram__reviews-amount').dataset);
  }

  init() {
    const { root, canvas, subjectForm } = this;

    const ctxM = canvas.getContext('2d');

    const yellowGrad = ctxM.createLinearGradient(155, 0, 155, 120);
    yellowGrad.addColorStop(0, '#FFE39C');
    yellowGrad.addColorStop(1, '#FFBA9C');

    const greenGrad = ctxM.createLinearGradient(155, 0, 155, 120);
    greenGrad.addColorStop(0, '#6FCF97');
    greenGrad.addColorStop(1, '#66D2EA');

    const purpleGrad = ctxM.createLinearGradient(155, 0, 155, 120);
    purpleGrad.addColorStop(0, '#BC9CFF');
    purpleGrad.addColorStop(1, '#8BA4F9');

    const blackGrad = ctxM.createLinearGradient(155, 0, 155, 120);
    blackGrad.addColorStop(0, '#919191');
    blackGrad.addColorStop(1, '#3D4975');

    const amountArray = [];
    const nameArray = [];
    let total = 0;

    root.querySelectorAll('.diagram__legend-item').forEach((item) => {
      const amount = +item.dataset.amount;
      const name = item.querySelector('.diagram__legend-lettering').textContent;
      amountArray.unshift(amount);
      nameArray.unshift(name);
      total += amount;
    });

    let title;

    if (total === 1 || total % 10 === 1) [title] = subjectForm;
    else if (total > 4 || total % 10 > 4) [, , title] = subjectForm;
    else [, title] = subjectForm;
    root.querySelector('.js-diagram__subtitle').textContent = title;

    root.querySelector('.js-diagram__reviews-amount').textContent = total;
    const myChart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: nameArray,
        datasets: [{

          label: '# of Votes',
          data: amountArray,
          backgroundColor: [
            blackGrad,
            purpleGrad,
            greenGrad,
            yellowGrad,
          ],
          borderColor: [
            'white',
            'white',
            'white',
            'white',
          ],
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
    this.diogram = myChart;
  }
}

export default diagram;
