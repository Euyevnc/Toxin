import doubleDatePicker from '../double-date-picker';
import dropdown from '../dropdown';

class RoomSearcher {
  constructor({ root }) {
    this.counterObject = dropdown({ root: root.querySelector('.js-dropdown') });
    this.datePickerObject = doubleDatePicker({
      root: root
        .querySelector('.js-double-date-picker'),
    });
  }
}

export default RoomSearcher;
