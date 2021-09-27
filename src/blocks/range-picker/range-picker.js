import RangeSlider from '../../libs/slider';

class RangePicker {
  constructor({ root }) {
    this.root = root;
    this.sliderData = this._formConfig();

    this._init();
  }

  _formConfig = () => {
    const config = { };
    const dataKeys = this.root.dataset.keys.split(', ');
    const dataValues = this.root.dataset.values.split(', ');
    dataKeys.forEach((key, index) => {
      config[key] = Number(dataValues[index]) ?? dataValues[index];
    });
    return config;
  }

  _sliderCallback = ({ values }) => {
    this.min.textContent = values.start;
    this.max.textContent = values.end;
  };

  _init = () => {
    this.container = $(this.root.querySelector('.js-range-picker__container'));
    this.min = this.root.querySelector('.js-range-picker__min');
    this.max = this.root.querySelector('.js-range-picker__max');

    this.sliderObject = new RangeSlider(
      this.container,
      this.sliderData,
      this._sliderCallback,
    );
  }
}

export default RangePicker;
