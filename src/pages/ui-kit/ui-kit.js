/* eslint-disable no-unused-vars */
import dateMaskedInput
  from '../../blocks/date-masked-textfield';
import doubleDatePicker
  from '../../blocks/double-date-picker';
import datePicker from '../../blocks/date-picker';
import rangePicker from '../../blocks/range-picker';
import dropdown from '../../blocks/dropdown';
import checkboxes from '../../blocks/checkboxes';
import roomPreview from '../../blocks/room-preview';
import roomSearcher from '../../blocks/room-searcher';
import header from '../../blocks/header';
import review from '../../blocks/review';
import roomDemo from '../../blocks/room-demo';
import registration from '../../blocks/registration-form';

import './ui-kit.scss';

document.addEventListener('DOMContentLoaded', uiKitInit);

function uiKitInit() {
  doubleDatePicker({
    root: document
      .querySelector('.js-double-date-picker'),
  });

  datePicker({
    root: document
      .querySelector('.js-date-picker'),
  });

  document.querySelectorAll('.ui-kit__inputs .js-dropdown')
    .forEach((cont) => {
      dropdown({ root: cont });
    });

  dateMaskedInput({
    root: document
      .querySelector('.ui-kit__inputs .js-date-masked-textfield'),
  });

  roomSearcher({
    root: document
      .querySelector('.js-room-searcher'),
  });

  roomPreview({
    root: document
      .querySelector('.js-room-preview'),
  });

  document.querySelectorAll('.js-header').forEach((headerElem) => {
    header({ root: headerElem });
  });

  document.querySelectorAll('.js-room-demo').forEach((cont) => {
    roomDemo({ root: cont });
  });

  rangePicker({
    root: document
      .querySelector('.js-range-picker'),
  });

  document.querySelectorAll('.ui-kit__checkboxes .js-checkboxes')
    .forEach((cont) => {
      checkboxes({ root: cont });
    });

  review({ root: document.querySelector('.js-review') });

  registration({
    root: document
      .querySelector('.js-registration-form'),
  });

  setTimeout(() => {
    const calendar = document
      .querySelector('.js-ui-datepicker').cloneNode(true);
    const contForCalendar = document
      .querySelector('.ui-kit__calendar');
    contForCalendar.appendChild(calendar);
    calendar.style.display = 'block';
    calendar.style.pointerEvents = 'none';
    calendar.style.userSelect = 'none';
  }, 700);
}
