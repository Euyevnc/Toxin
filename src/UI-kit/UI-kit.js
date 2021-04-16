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
  const doubleDatePicker = new DoubleDatePicker(document.querySelector('.forms'));
  doubleDatePicker.launch();

  const datePicker = new DatePicker(document.querySelector('.forms'));
  datePicker.launch();

  document.querySelectorAll('.input-with-counter-container').forEach((cont) => {
    const counter = new Counter(cont);
    counter.displayValue();
  });

  const numberFinder = new NumberFinder();
  numberFinder.init();

  const numberBooker = new Booker();
  numberBooker.init();

  const headers = [];
  document.querySelectorAll('.headers-and-footers .header-container').forEach((header) => {
    const newHeader = new Header(header);
    headers.push(newHeader);
  });

  document.querySelectorAll('.number-demonstration-container').forEach((cont) => {
    const newDemo = new NumberDemo(cont);
    newDemo.init();
  });

  const rangePicker = new RangePicker();
  rangePicker.init();

  document.querySelectorAll('.dropping-checkboxes-container').forEach((cont) => {
    const newChckboxes = new Checkboxes(cont);
    newChckboxes.init();
  });

  const review = new Review();
  review.init();

  const dateMask = new DateMask();
  dateMask.init();

  const registration = new Registration();
  registration.init();

  document.querySelector('.textfield-active-container input').value = 'This is pretty awesome';
  setTimeout(() => {
    const calendar = document.querySelector('.ui-datepicker').cloneNode(true);
    const contForCalendar = document.querySelector('.expended-calendar-container');
    contForCalendar.appendChild(calendar);
  }, 700);
}
export default handlerDOMLoaded;
