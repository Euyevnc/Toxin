import './SearchRoom.scss';

import Header from '../../blocks/header/header';
import DatePicker from '../../blocks/date-picker/date-picker';
import RangePicker from '../../blocks/range-picker/range-picker';
import Counter from '../../blocks/input-with-counter/input-with-counter';
import Checkboxes from '../../blocks/checkboxes/checkboxes';
import RoomDemo from '../../blocks/room-demo/room-demo';

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded);

function handlerDocumentDomLoaded() {
  /* eslint-disable no-unused-vars */
  const headerObject = new Header();

  const datePickerObject = new DatePicker();
  datePickerObject.init();

  const rangePickerObject = new RangePicker();
  rangePickerObject.init();

  document.querySelectorAll('.js-input-with-counter').forEach((demo) => {
    const counterObject = new Counter(demo);
    counterObject.displayValue();
  });

  const expandingCheckboxes = document.querySelector('.content__facilities .js-checkboxes');
  const expandingCheckboxesObject = new Checkboxes(expandingCheckboxes);

  document.querySelectorAll('.js-room-demo').forEach((demo) => {
    const demoObject = new RoomDemo(demo);
    demoObject.init();
  });
}
