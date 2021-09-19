import doubleDatePicker from '../double-date-picker';
import dropdown from '../dropdown';

class RoomSearcher {
  constructor({ root }) {
    this.root = root;

    this._init();
  }

  _init = () => {
    this.counterObject = dropdown({
      root: this.root.querySelector('.js-dropdown'),
    });

    this.datePickerObject = doubleDatePicker({
      root: this.root
        .querySelector('.js-double-date-picker'),
    });
  }
}

export default RoomSearcher;
