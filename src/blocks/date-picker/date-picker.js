import Picker from '../../libs/date-picker';
import textfield from '../textfield';

class DatePicker {
  constructor({ root, handlerDateSelected, options }) {
    this.root = root;
    this.options = options;
    this.handlerDateSelected = handlerDateSelected;
    this._init();
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
    this.textfield = textfield({
      root: this.root.querySelector('.js-textfield'),
    });
    this._input = this.textfield.getInput();
    this._arrow = this.root.querySelector('.js-date-picker__arrow');
    this._arrow.addEventListener('click', this._handlerArrowClick);

    this.picker = new Picker({
      input: this._input,
      handlerCalendarShown: this._handlerCalendarShown,
      handlerCalendarHidden: this._handlerCalendarHidden,
      handlerDateSelected: this.handlerDateSelected,
      options: this.options,
    });

    const MILLISECONDS_IN_DAY = 86400000;
    const arriveAfter = this.root.dataset.initarrive;
    const departureAfter = this.root.dataset.initdeparture;

    const initDatesAreInvalid = (typeof +arriveAfter !== 'number'
      || typeof +departureAfter !== 'number');
    if (initDatesAreInvalid) return;

    const initialArrive = new Date(Math.round(Date.now()
      + arriveAfter * MILLISECONDS_IN_DAY));
    const initialDeparture = new Date(Math.round(Date.now()
      + departureAfter * MILLISECONDS_IN_DAY));

    setTimeout(() => {
      this.setDates([initialArrive, initialDeparture]);
    }, 100);
  }
}

export default DatePicker;
