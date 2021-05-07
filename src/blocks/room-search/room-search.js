import DoubleDatePicker from '../double-date-picker/double-date-picker';
import Dropdown from '../dropdown/dropdown';

class RoomFinder {
  constructor(root) {
    this.counterObject = new Dropdown(root.querySelector('.js-dropdown'));
    this.datePickerObject = new DoubleDatePicker(root.querySelector('.js-double-date-picker'));
  }
}

export default RoomFinder;
