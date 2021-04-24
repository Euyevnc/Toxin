/* eslint-disable no-unused-vars */
import './UI-kit.scss';

import DateMaskedTextfield from '../blocks/date-masked-textfield/date-masked-textfield';
import DoubleDatePicker from '../blocks/double-date-picker/double-date-picker';
import DatePicker from '../blocks/date-picker/date-picker';
import RangePicker from '../blocks/range-picker/range-picker';
import Counter from '../blocks/input-with-counter/input-with-counter';
import Checkboxes from '../blocks/checkboxes/checkboxes';
import RoomBooker from '../blocks/room-booker/room-booker';
import RoomFinder from '../blocks/room-finder/room-finder';
import Header from '../blocks/header/header';
import Review from '../blocks/review/review';
import RoomDemo from '../blocks/room-demo/room-demo';
import Registration from '../blocks/registration/registration';

function handlerDOMLoaded() {
  const doublePickerObject = new DoubleDatePicker();
  doublePickerObject.init();

  const datePickerObject = new DatePicker();
  datePickerObject.init();

  document.querySelectorAll('.forms-dropdowns-wrapper .js-input-with-counter').forEach((cont) => {
    const counterObject = new Counter(cont);
    counterObject.displayValue();
  });

  const counter = document.querySelector('.forms .js-input-with-counter');
  const counterObject = new Counter(counter);

  const numberFinderObject = new RoomFinder();
  numberFinderObject.init();

  const numberBookerObject = new RoomBooker();
  numberBookerObject.init();

  document.querySelectorAll('.js-header').forEach((header) => {
    const headerObject = new Header(header);
  });

  document.querySelectorAll('.room-demonstration-container').forEach((cont) => {
    const demoObject = new RoomDemo(cont);
    demoObject.init();
  });

  const rangePickerObject = new RangePicker();
  rangePickerObject.init();

  document.querySelectorAll('.dropping-checkboxes-container .js-checkboxes').forEach((cont) => {
    const checkboxesObject = new Checkboxes(cont);
  });

  const reviewObject = new Review();
  reviewObject.init();

  const dateMaskObject = new DateMaskedTextfield();
  dateMaskObject.init();

  const registrationObject = new Registration();
  registrationObject.init();

  document.querySelector('.textfield-active-container input').value = 'This is pretty awesome';

  setTimeout(() => {
    const calendar = document.querySelector('.js-ui-datepicker').cloneNode(true);
    const contForCalendar = document.querySelector('.expended-calendar-container');
    contForCalendar.appendChild(calendar);
  }, 700);
}
export default handlerDOMLoaded;
