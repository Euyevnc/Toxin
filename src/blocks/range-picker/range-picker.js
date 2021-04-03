import 'jquery';
import 'range-slider-for-ml';
import 'range-slider-for-ml/dist/styles.css';

function rangePicker() {
  const pickers = [];

  document.querySelectorAll('.js-range-picker').forEach((element) => {
    const newPicker = new RangePicker(element);
    newPicker.init();
    pickers.push(newPicker);
  });
  if (pickers.length === 1) return pickers[0];
  return pickers;
}

class RangePicker {
  constructor(root) {
    this.root = root;
  }

  init() {
    const { root } = this;
    this.container = $(root.querySelector('.js-range-picker__container'));
    this.min = root.querySelector('.js-range-picker__min');
    this.max = root.querySelector('.js-range-picker__max');
    this.sliderData = {};
    const {
      container, min, max, sliderData,
    } = this;
    const dataKeys = root.dataset.keys.split(', ');
    const dataValues = root.dataset.values.split(', ');
    dataKeys.forEach((key, index) => {
      sliderData[key] = +dataValues[index] || dataValues[index];
    });

    this.sliderObject = container.rangeSlider(sliderData);
    const { sliderObject } = this;

    sliderObject.model.observer.subscribe(() => {
      min.textContent = sliderObject.getValue()[0].toLocaleString();
      max.textContent = sliderObject.getValue()[1].toLocaleString();
    });
    sliderObject.init(sliderData.initStart, sliderData.initEnd);
  }
}

export default rangePicker;
