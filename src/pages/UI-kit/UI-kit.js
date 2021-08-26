/* eslint-disable no-unused-vars */
import '../../../assets/favicons/favicons';
import DateMaskedTextfield
  from '../../blocks/date-masked-textfield/date-masked-textfield';
import DoubleDatePicker
  from '../../blocks/double-date-picker/double-date-picker';
import DatePicker from '../../blocks/date-picker/date-picker';
import RangePicker from '../../blocks/range-picker/range-picker';
import Dropdown from '../../blocks/dropdown/dropdown';
import Checkboxes from '../../blocks/checkboxes/checkboxes';
import RoomBooker from '../../blocks/room-preview/room-preview';
import RoomFinder from '../../blocks/room-search/room-search';
import Header from '../../blocks/header/header';
import Review from '../../blocks/review/review';
import RoomDemo from '../../blocks/room-demo/room-demo';
import Registration from '../../blocks/registration-form/registration-form';

import './UI-kit.scss';

document.addEventListener('DOMContentLoaded', uiKitInit);

function uiKitInit() {
  const doublePickerObject = new DoubleDatePicker(document
    .querySelector('.double-date-picker'));

  const datePickerObject = new DatePicker(document
    .querySelector('.date-picker'));

  document.querySelectorAll('.forms-dropdowns-wrapper .js-dropdown')
    .forEach((cont) => {
      const counterObject = new Dropdown(cont);
    });

  const counter = document.querySelector('.forms .js-dropdown');
  const counterObject = new Dropdown(counter);

  const numberFinderObject = new RoomFinder(document
    .querySelector('.room-search'));

  const numberBookerObject = new RoomBooker(document
    .querySelector('.room-preview'));

  document.querySelectorAll('.js-header').forEach((header) => {
    const headerObject = new Header(header);
  });

  document.querySelectorAll('.room-demonstration-container').forEach((cont) => {
    const demoObject = new RoomDemo(cont);
  });

  const rangePickerObject = new RangePicker(document
    .querySelector('.range-picker'));

  document.querySelectorAll('.dropping-checkboxes-container .js-checkboxes')
    .forEach((cont) => {
      const checkboxesObject = new Checkboxes(cont);
    });

  const reviewObject = new Review(document.querySelector('.review '));

  const dateMaskObject = new DateMaskedTextfield(document
    .querySelector('.forms .js-date-masked-textfield'));

  const registrationObject = new Registration(document
    .querySelector('.registration-form-container'));

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
