import './UI-kit.scss';

import inputMask from '../blocks/date-mask/date-mask';
import doubleDatePicker from '../blocks/double-date-picker/double-date-picker';
import datePicker from '../blocks/date-picker/date-picker';
import rangeSlider from '../blocks/range-picker/range-picker';
import counter from '../blocks/input-with-counter/input-with-counter';
import expandableCheckboxes from '../blocks/dropping-checkboxes/dropping-checkboxes';
import booker from '../blocks/number-booker/number-booker';
import finderForm from '../blocks/number-finder/number-finder';
import header from '../blocks/header/header';
import review from '../blocks/review/review';
import demo from '../blocks/number-demo/number-demo';

///
function handlerDOMLoaded() {
  header();
  demo();
  inputMask();
  finderForm();
  rangeSlider();
  datePicker();
  expandableCheckboxes();
  expandableCheckboxes();
  doubleDatePicker();
  counter();
  booker();
  review();

  document.querySelector('.textfield-active-container input').value = 'This is pretty awesome';
  setTimeout(() => {
    const calendar = document.querySelector('.ui-datepicker').cloneNode(true);
    const contForCalendar = document.querySelector('.expended-calendar-container');
    contForCalendar.appendChild(calendar);
  }, 700);
  // Таймаут пришлось поставить. Плагин для календаря, к сожалению, асиинхронный
}
export default handlerDOMLoaded;
