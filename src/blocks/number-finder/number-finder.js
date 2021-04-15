import DoubleDatePicker from '../double-date-picker/double-date-picker';
import Counter from '../input-with-counter/input-with-counter';

class NumberFinder {
  constructor(area = document) {
    this.root = area.querySelector('.js-number-finder');
    this.counter = new Counter(this.root);
    this.datePicker = new DoubleDatePicker(this.root);
  }

  init() {
    this.counter.displayValue();
    this.datePicker.launch();
  }
}

export default NumberFinder;
