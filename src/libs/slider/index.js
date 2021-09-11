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
      this.sliderObject.model.observer.subscribe(() => {
        const start = this.sliderObject.getValue()[0];
        const end = this.sliderObject.getValue()[1];

        callback(start, end);
      });
    }

    this.sliderObject.init(config.initStart, config.initEnd);
  }
}

export default RangeSlider;
