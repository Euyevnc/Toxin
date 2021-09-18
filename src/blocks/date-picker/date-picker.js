import Picker from '../../libs/date-picker';
import textfield from '../textfield';

class DatePicker {
  constructor({ root, handlerDateSelected, options }) {
    this.root = root;
    this.textfield = textfield({ root: root.querySelector('.js-textfield') });

    this._input = this.textfield.getInput();
    this._arrow = root.querySelector('.js-date-picker__arrow');

    this.picker = new Picker({
      input: this._input,
      handlerCalendarShown: this._handlerCalendarShown,
      handlerCalendarHidden: this._handlerCalendarHidden,
      handlerDateSelected,
      options,
    });

    setTimeout(this._init, 100);
  }

  setDates = (values) => {
    const { picker } = this;
    picker.setDates(values);
  }

  getDates = () => {
    const { picker } = this;
    return picker.getDates();
  }

  getOptions = () => {
    const { picker } = this;
    return picker.getOptions();
  }

  clearDates = () => {
    const { picker } = this;
    picker.clearDates();
  }

  _handlerCalendarShown = () => {
    const { _arrow: arrow } = this;
    arrow.removeEventListener('click', this._handlerArrowClick);
    arrow.querySelector('.js-arrow').textContent = 'expand_less';
  }

  _handlerCalendarHidden = () => {
    const { _arrow: arrow } = this;
    arrow.querySelector('.js-arrow').textContent = 'expand_more';
    arrow.addEventListener('click', this._handlerArrowClick);
  }

  _handlerArrowClick = () => {
    this._input.focus();
  }

  _init = () => {
    const { _arrow: arrow } = this;
    arrow.addEventListener('click', this._handlerArrowClick);

    const MILLISECONDS_IN_DAY = 86400000;
    const initialArrive = new Date(Math.round(Date.now()
      + this.root.dataset.initarrive * MILLISECONDS_IN_DAY));
    const initialDeparture = new Date(Math.round(Date.now()
      + this.root.dataset.initdeparture * MILLISECONDS_IN_DAY));

    if (initialArrive || initialDeparture) return;
    this.setDates([initialArrive, initialDeparture]);
  }
}

export default DatePicker;
