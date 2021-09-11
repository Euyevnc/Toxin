import RangeSlider from '../../libs/slider';

class RangePicker {
  constructor({ root }) {
    this.root = root;
    this.container = $(this.root.querySelector('.js-range-picker__container'));
    this.min = this.root.querySelector('.js-range-picker__min');
    this.max = this.root.querySelector('.js-range-picker__max');
    this.sliderData = this._formConfig();
    this.sliderObject = { };

    this._init();
  }

  _formConfig = () => {
    const config = { };
    const dataKeys = this.root.dataset.keys.split(', ');
    const dataValues = this.root.dataset.values.split(', ');
    dataKeys.forEach((key, index) => {
      config[key] = Number(dataValues[index]) || dataValues[index];
    });
    return config;
  }

  _init = () => {
    const {
      container, min, max, sliderData,
    } = this;

    const sliderCallback = (startValue, endValue) => {
      min.textContent = startValue.toLocaleString();
      max.textContent = endValue.toLocaleString();
    };

    this.sliderObject = new RangeSlider(container, sliderData, sliderCallback);
  }
}

export default RangePicker;
