import './SearchRoom.scss';

import Header from '../../blocks/header/header';
import DatePicker from '../../blocks/date-picker/date-picker';
import RangePicker from '../../blocks/range-picker/range-picker';
import Dropdown from '../../blocks/dropdown/dropdown';
import Checkboxes from '../../blocks/checkboxes/checkboxes';
import RoomDemo from '../../blocks/room-demo/room-demo';

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded);

function handlerDocumentDomLoaded() {
  /* eslint-disable no-unused-vars */
  const headerObject = new Header(document.querySelector('.js-header'));

  const datePickerObject = new DatePicker(document.querySelector('.date-picker'));

  const rangePickerObject = new RangePicker(document.querySelector('.js-range-picker'));

  document.querySelectorAll('.js-dropdown').forEach((demo) => {
    const counterObject = new Dropdown(demo);
  });

  const expandingCheckboxes = document.querySelector('.search-room__facilities .js-checkboxes');
  const expandingCheckboxesObject = new Checkboxes(expandingCheckboxes);

  document.querySelectorAll('.js-room-demo').forEach((demo) => {
    const demoObject = new RoomDemo(demo);
  });
}
