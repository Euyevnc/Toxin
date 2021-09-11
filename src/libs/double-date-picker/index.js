import $ from 'jquery';
import '../../plugins/datepicker';
import '../../plugins/jquery.datepicker.extension.range.min';
import {
  HIDE_CALENDAR_EVENT_NAME,
  SHOW_CALENDAR_EVENT_NAME,
} from '../../../assets/consts';

import './double-date-picker.scss';

class DoubleDatePicker {
  constructor({
    inputs, updateHandler, hidingCallback, showingCallback,
  }) {
    this.params = {
      closeText: 'Закрыть',
      prevText: 'Предыдущий',
      nextText: 'Следующий',
      currentText: 'Сегодня',
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],

      monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
        'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],

      dayNames: ['воскресенье', 'понедельник', 'вторник',
        'среда', 'четверг', 'пятница', 'суббота'],

      dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      weekHeader: 'Не',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: '',
      showOtherMonths: true,
      selectOtherMonths: true,
      dateFormat: 'dd.mm.yy',
    };

    $.datepicker.regional.ru = this.params;
    $.datepicker.setDefaults($.datepicker.regional.ru);

    this.arriveInput = $(inputs[0]);
    this.departureInput = $(inputs[1]);

    this.arriveDate = null;
    this.departureDate = null;

    this.updateHandler = updateHandler;

    this.hidingCallback = hidingCallback;
    this.showingCallback = showingCallback;

    this._init();
  }

  showCalendar = (input) => {
    if (input === this.arriveInput[0]) this.arriveInput.datepicker('show');
    else this.departureInput.datepicker('show');
  }

  hideCalendar = () => {
    this.arriveInput.datepicker('hide');
    this.departureInput.datepicker('hide');
  }

  setDates = (arriveDate, departureDate) => {
    this.arriveDate = arriveDate || '';
    this.departureDate = departureDate || '';

    this.arriveInput.datepicker('setDate', this.arriveDate);
    this.departureInput
      .datepicker('setDate', [this.arriveDate, this.departureDate]);
    this.updateHandler();
  }

  getData = () => {
    const extensionRange = this.arriveInput
      .datepicker('widget').data('datepickerExtensionRange');
    return extensionRange;
  }

  _handlerDocShowing = (e) => {
    const currentInput = e.detail.input;

    const isNotOwnEvent = (currentInput !== this.arriveInput[0]
      && currentInput !== this.departureInput[0]);
    if (isNotOwnEvent) return;

    this.setDates(this.arriveDate, this.departureDate);

    this.showingCallback(e);

    document.addEventListener(HIDE_CALENDAR_EVENT_NAME, this._handlerDocHiding);
    this.calendarIsShowing = true;
  }

  _handlerDocHiding = (e) => {
    if (!e.detail.datepickerShowing) return;

    this.hidingCallback(e);

    document.removeEventListener(HIDE_CALENDAR_EVENT_NAME,
      this._handlerDocHiding);
    this.calendarIsShowing = false;
  }

  _handlerPickerClick = (ev) => {
    if (!this.calendarIsShowing) return;
    const { arriveInput, departureInput } = this;
    if (ev.target.closest('.ui-datepicker-button_clear')) {
      this.arriveDate = '';
      this.departureDate = '';
      arriveInput.datepicker('setDate', '');
      departureInput.datepicker('setDate', '');
    } else if (ev.target.closest('.ui-datepicker-button_conf')) {
      this.hideCalendar();
    }
  }

  _init = () => {
    const { arriveInput, departureInput } = this;

    const rewriteDates = (arrive, departure) => {
      this.arriveDate = arrive;
      this.departureDate = departure;
    };

    const { updateHandler } = this;
    arriveInput.datepicker({
      minDate: 0,
      range: 'period',
      onSelect(...args) {
        const [,, extensionRange] = args;
        rewriteDates(extensionRange.startDate, extensionRange.endDate);
        updateHandler();
      },
    });

    departureInput.datepicker({
      minDate: 0,
      range: 'period',
      onSelect(...args) {
        const [,, extensionRange] = args;

        rewriteDates(extensionRange.startDate, extensionRange.endDate);
        updateHandler();
      },
    });

    document.addEventListener(SHOW_CALENDAR_EVENT_NAME,
      this._handlerDocShowing);

    const picker = document.querySelector('.js-ui-datepicker');
    picker.addEventListener('click', this._handlerPickerClick);
  }
}

export default DoubleDatePicker;
