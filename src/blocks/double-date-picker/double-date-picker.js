import DoublePicker from '../../libs/double-date-picker';

import textfield from '../textfield';

class DoubleDatePicker {
  constructor({ root, selectUserCallback }) {
    const arriveContainer = root
      .querySelector('.js-double-date-picker__container_for_first');
    const departureContainer = root
      .querySelector('.js-double-date-picker__container_for_second');

    this.arriveTextfield = textfield({
      root: arriveContainer
        .querySelector('.js-textfield'),
    });
    this.departureTextfield = textfield({
      root: departureContainer
        .querySelector('.js-textfield'),
    });

    this.arriveInput = this.arriveTextfield.getInput();
    this.departureInput = this.departureTextfield.getInput();

    this.arriveArrow = arriveContainer
      .querySelector('.js-double-date-picker__arrow');
    this.departureArrow = departureContainer
      .querySelector('.js-double-date-picker__arrow');

    this.picker = new DoublePicker({
      inputs: [this.arriveInput, this.departureInput],
      updateHandler: this._updateHandler,
      hidingCallback: this._handlerCalendarHiding,
      showingCallback: this._handlerCalendarShowing,

    });

    this.userCallback = selectUserCallback;

    this._init();
  }

  setDates = (arrive, departure) => {
    this.picker.setDates(arrive, departure);
  }

  _updateHandler =() => {
    this._displayValues();
    if (this.userCallback) this.userCallback(this.picker.getData());
  };

  _displayValues = () => {
    const valuesIsNotEmpty = this.picker.getData().startDate
    && this.picker.getData().endDate;

    if (valuesIsNotEmpty) {
      const { picker } = this;

      const arriveText = picker.getData().startDateText;
      const departureText = picker.getData().endDateText;

      this.arriveTextfield.setValue(arriveText);
      this.departureTextfield.setValue(departureText);
    }
  }

  _handlerCalendarShowing = (e) => {
    const currentInput = e.detail.input;

    if (currentInput === this.arriveInput) {
      this.arriveArrow.removeEventListener('click', this._handlerArrowClick);
      this.arriveArrow.querySelector('.js-arrow').textContent = 'expand_less';
    } else if (e.detail.input === this.departureInput) {
      this.departureArrow.removeEventListener('click', this._handlerArrowClick);
      this.departureArrow.querySelector('.js-arrow')
        .textContent = 'expand_less';
    }
  }

  _handlerCalendarHiding = (e) => {
    if (!e.detail.datepickerShowing) return;

    const currentInput = e.detail.input;
    if (currentInput === this.arriveInput) {
      this.processingArrow = this.arriveArrow;
      this.arriveArrow.querySelector('.js-arrow').textContent = 'expand_more';
      document.addEventListener('click', this._handlerDocClick);
    } else if (currentInput === this.departureInput) {
      this.processingArrow = this.departureArrow;
      this.departureArrow.querySelector('.js-arrow')
        .textContent = 'expand_more';
      document.addEventListener('click', this._handlerDocClick);
    } else {
      this.arriveArrow.addEventListener('click', this._handlerArrowClick);
      this.departureArrow.addEventListener('click', this._handlerArrowClick);

      this.arriveArrow.querySelector('.js-arrow').textContent = 'expand_more';
      this.departureArrow.querySelector('.js-arrow')
        .textContent = 'expand_more';
    }
  }

  _handlerDocClick = () => {
    document.removeEventListener('click', this._handlerDocClick);
    this.processingArrow.addEventListener('click', this._handlerArrowClick);
  }

  _handlerArrowClick = (e) => {
    const input = e.target
      .closest('.js-double-date-picker__container').querySelector('input');

    this.picker.showCalendar(input);
  }

  _init = () => {
    this.arriveArrow.addEventListener('click', this._handlerArrowClick);
    this.departureArrow.addEventListener('click', this._handlerArrowClick);

    const initialArrive = this.arriveInput
      .closest('.js-double-date-picker__container').dataset.init;
    const initialDeparture = this.departureInput
      .closest('.js-double-date-picker__container').dataset.init;

    this.setDates(initialArrive, initialDeparture);
  }
}

export default DoubleDatePicker;
