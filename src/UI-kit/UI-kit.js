/* eslint-disable no-unused-vars */
import './UI-kit.scss';

import DateMask from '../blocks/date-mask/date-mask';
import DoubleDatePicker from '../blocks/double-date-picker/double-date-picker';
import DatePicker from '../blocks/date-picker/date-picker';
import RangePicker from '../blocks/range-picker/range-picker';
import Counter from '../blocks/input-with-counter/input-with-counter';
import Checkboxes from '../blocks/checkboxes/checkboxes';
import Booker from '../blocks/number-booker/number-booker';
import NumberFinder from '../blocks/number-finder/number-finder';
import Header from '../blocks/header/header';
import Review from '../blocks/review/review';
import NumberDemo from '../blocks/number-demo/number-demo';
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

  const numberBookerObject = new Booker();
  numberBookerObject.init();

  const numberFinderObject = new NumberFinder();
  numberFinderObject.init();

  document.querySelectorAll('.js-header').forEach((header) => {
    const headerObject = new Header(header);
  });

  document.querySelectorAll('.number-demonstration-container').forEach((cont) => {
    const demoObject = new NumberDemo(cont);
    demoObject.init();
  });

  const rangePickerObject = new RangePicker();
  rangePickerObject.init();

  document.querySelectorAll('.dropping-checkboxes-container .js-checkboxes').forEach((cont) => {
    const checkboxesObject = new Checkboxes(cont);
  });

  const reviewObject = new Review();
  reviewObject.init();

  const dateMaskObject = new DateMask();
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
