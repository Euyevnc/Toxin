import 'jquery';
import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';
import './date-picker.scss';

class DatePicker {
  constructor({
    input, handlerCalendarShown, handlerCalendarHidden,
    handlerDateSelected, options,
  }) {
    this.input = $(input);

    this._handlerCalendarShown = handlerCalendarShown;
    this._handlerCalendarHidden = handlerCalendarHidden;
    this._handlerDateSelected = handlerDateSelected;

    this._userOptions = options;
    this._init();
  }

  showCalendar = () => {
    this._control.show();
  }

  hideCalendar = () => {
    this._control.hide();
  }

  getDates = () => this._control.selectedDates

  setDates = (values) => {
    this._control.selectDate(values);
  };

  clearDates = () => {
    this._control.clear();
  }

  getOptions = () => this._control.opts

  _init = () => {
    const onShow = (_, completed) => {
      if (!completed) return;
      this._handlerCalendarShown();
    };

    const onHide = (_, completed) => {
      if (!completed) return;
      if (this.getDates().length < 2) this._control.clear();
      this._handlerCalendarHidden();
    };

    const handlerConfirmClick = (event) => {
      if (!this._control.visible) return;
      event.preventDefault();
      this.hideCalendar();
    };

    this.input.datepicker({
      range: true,
      multipleDatesSeparator: ' - ',
      dateFormat: 'dd M',
      clearButton: true,
      todayButton: true,
      minDate: new Date(),
      navTitles: {
        days: 'MM yyyy',
      },
      language: {
        today: 'Применить',
      },
      nextHtml: 'arrow_forward',
      prevHtml: 'arrow_back',
      classes: 'air-datepicker js-air-datepicker',
      onShow,
      onHide,
      onSelect: this._handlerDateSelected,
      ...this._userOptions,
    });
    this._control = this.input.data('datepicker');

    const confirmButton = this._control.$datepicker[0]
      .querySelector('.datepicker--button');

    confirmButton.addEventListener('click', handlerConfirmClick);
  }
}

export default DatePicker;
