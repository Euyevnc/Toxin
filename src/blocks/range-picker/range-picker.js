import 'jquery';
import 'range-slider-for-ml';
import 'range-slider-for-ml/dist/styles.css';

const firstElement = document.querySelector('.js-range-picker');
class RangePicker {
  constructor(root = firstElement) {
    this.root = root;
    this.container = $(this.root.querySelector('.js-range-picker__container'));
    this.min = this.root.querySelector('.js-range-picker__min');
    this.max = this.root.querySelector('.js-range-picker__max');
    this.sliderData = this.#formConfig();
    this.sliderObject = { };
  }

  init() {
    const {
      container, min, max, sliderData,
    } = this;
    this.sliderObject = container.rangeSlider(sliderData);
    this.sliderObject.model.observer.subscribe(() => {
      min.textContent = this.sliderObject.getValue()[0].toLocaleString();
      max.textContent = this.sliderObject.getValue()[1].toLocaleString();
    });
    this.sliderObject.init(sliderData.initStart, sliderData.initEnd);
  }

  #formConfig = () => {
    const config = { };
    const dataKeys = this.root.dataset.keys.split(', ');
    const dataValues = this.root.dataset.values.split(', ');
    dataKeys.forEach((key, index) => {
      config[key] = Number(dataValues[index]) || dataValues[index];
    });
    return config;
  }
}

export default RangePicker;
