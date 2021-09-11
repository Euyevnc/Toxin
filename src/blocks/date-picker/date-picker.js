import Picker from '../../libs/date-picker';
import textfield from '../textfield';

class DatePicker {
  constructor({ root, selectUserCallback }) {
    this.root = root;
    this.textfield = textfield({ root: root.querySelector('.js-textfield') });

    this.input = this.textfield.getInput();
    this.arrow = root.querySelector('.js-date-picker__arrow');

    this.userCallback = selectUserCallback;

    this.picker = new Picker({
      input: this.input,
      updateHandler: this._updateHandler,
      hidingCallback: this._handlerCalendarHiding,
      showingCallback: this._handlerCalendarShowing,
    });

    this.arrow.addEventListener('click', this._handlerArrowClick);
  }

  setDates = (arrive, departure) => {
    const { picker } = this;
    picker.setDates(arrive, departure);
  }

  _updateHandler = () => {
    this._displayValue();
    if (this.userCallback) this.userCallback(this.picker.getData());
  };

  _displayValue = () => {
    const valuesIsNotEmpty = this.picker.getData().startDate
    && this.picker.getData().endDate;

    if (valuesIsNotEmpty) {
      const arriveText = this.picker.getData().startDateText;
      const departureText = this.picker.getData().endDateText;

      this.textfield.setValue(`${arriveText} - ${departureText}`);
    }
  }

  _handlerCalendarShowing = () => {
    this.arrow.removeEventListener('click', this._handlerArrowClick);
    this.arrow.querySelector('.js-arrow').textContent = 'expand_less';

    this._displayValue();
  }

  _handlerCalendarHiding = (e) => {
    this.arrow.querySelector('.js-arrow').textContent = 'expand_more';
    if (e.detail.input === this.input) {
      document.addEventListener('click', this._handlerDocClick);
    } else {
      this.input.addEventListener('click', this._handlerArrowClick);
    }
  }

  _handlerDocClick = () => {
    document.removeEventListener('click', this._handlerDocClick);
    this.arrow.addEventListener('click', this._handlerArrowClick);
  }

  _handlerArrowClick = () => {
    const { picker } = this;
    picker.showCalendar();
  }
}

export default DatePicker;
