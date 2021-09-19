import 'jquery';
import 'range-slider-for-ml';
import 'range-slider-for-ml/dist/styles.css';
import './slider.scss';

class RangeSlider {
  constructor(parent, config, callback) {
    this.parent = parent;
    this.config = config;
    this.callback = callback;
    this._init();
  }

  _init() {
    const { parent, config, callback } = this;

    this.sliderObject = parent.rangeSlider(config);

    if (callback) {
      this.sliderObject.addValuesUpdateListener((args) => {
        callback(args);
      });
      this.sliderObject.setValues();
    }
  }
}

export default RangeSlider;
