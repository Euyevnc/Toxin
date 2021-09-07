/* eslint-disable no-unused-vars */
import '../../../assets/favicons/favicons';
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
      .querySelector('.double-date-picker'),
  });

  datePicker({
    root: document
      .querySelector('.date-picker'),
  });

  document.querySelectorAll('.forms-dropdowns-wrapper .js-dropdown')
    .forEach((cont) => {
      dropdown({ root: cont });
    });

  const counter = document.querySelector('.forms .js-dropdown');
  dropdown({ root: counter });

  roomSearcher({
    root: document
      .querySelector('.js-room-searcher'),
  });

  roomPreview({
    root: document
      .querySelector('.room-preview'),
  });

  document.querySelectorAll('.js-header').forEach((headerElem) => {
    header({ root: headerElem });
  });

  document.querySelectorAll('.room-demonstration-container').forEach((cont) => {
    roomDemo({ root: cont });
  });

  rangePicker({
    root: document
      .querySelector('.js-range-picker'),
  });

  document.querySelectorAll('.dropping-checkboxes-container .js-checkboxes')
    .forEach((cont) => {
      checkboxes({ root: cont });
    });

  review({ root: document.querySelector('.review ') });

  dateMaskedInput({
    root: document
      .querySelector('.forms .js-date-masked-textfield'),
  });

  registration({
    root: document
      .querySelector('.registration-form-container'),
  });

  document.querySelector('.textfield-active-container input')
    .value = 'This is pretty awesome';

  setTimeout(() => {
    const calendar = document
      .querySelector('.js-ui-datepicker').cloneNode(true);
    const contForCalendar = document

      .querySelector('.expended-calendar-container');
    contForCalendar.appendChild(calendar);
  }, 700);
}
