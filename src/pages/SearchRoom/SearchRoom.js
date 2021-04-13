import './SearchRoom.scss';

import header from '../../blocks/header/header';
import datePicker from '../../blocks/date-picker/date-picker';
import rangePicker from '../../blocks/range-picker/range-picker';
import counter from '../../blocks/input-with-counter/input-with-counter';
import checkboxes from '../../blocks/checkboxes/checkboxes';
import numberDemo from '../../blocks/number-demo/number-demo';

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded);

function handlerDocumentDomLoaded() {
  header();
  datePicker();
  counter();
  checkboxes();
  numberDemo();
  rangePicker();
}
