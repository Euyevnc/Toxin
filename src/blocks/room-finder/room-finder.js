import DoubleDatePicker from '../double-date-picker/double-date-picker';
import Counter from '../input-with-counter/input-with-counter';

const firstElement = document.querySelector('.js-room-finder');
class RoomFinder {
  constructor(root = firstElement) {
    this.root = root;
    this.counterObject = new Counter(this.root.querySelector('.js-input-with-counter'));
    this.datePickerObject = new DoubleDatePicker(this.root.querySelector('.js-double-date-picker'));
  }

  init() {
    this.counterObject.displayValue();
    this.datePickerObject.init();
  }
}

export default RoomFinder;
