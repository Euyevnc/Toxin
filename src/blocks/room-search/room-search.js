import DoubleDatePicker from '../double-date-picker/double-date-picker';
import Dropdown from '../dropdown/dropdown';

class RoomFinder {
  constructor(root) {
    this.root = root;
    this.counterObject = new Dropdown(this.root.querySelector('.js-dropdown'));
    this.datePickerObject = new DoubleDatePicker(this.root.querySelector('.js-double-date-picker'));
  }
}

export default RoomFinder;
