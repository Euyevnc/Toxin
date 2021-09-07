import './search-room.scss';

import header from '../../blocks/header';
import datePicker from '../../blocks/date-picker';
import rangePicker from '../../blocks/range-picker';
import dropdown from '../../blocks/dropdown';
import checkboxes from '../../blocks/checkboxes';
import roomDemo from '../../blocks/room-demo';

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded);

function handlerDocumentDomLoaded() {
  /* eslint-disable no-unused-vars */
  header({ root: document.querySelector('.js-header') });

  datePicker({
    root: document
      .querySelector('.date-picker'),
  });

  rangePicker({
    root: document
      .querySelector('.js-range-picker'),
  });

  document.querySelectorAll('.js-dropdown').forEach((demo) => {
    dropdown({ root: demo });
  });

  const expandingCheckboxes = document
    .querySelector('.search-room__facilities .js-checkboxes');
  checkboxes({ root: expandingCheckboxes });

  document.querySelectorAll('.js-room-demo').forEach((demo) => {
    roomDemo({ root: demo });
  });
}
