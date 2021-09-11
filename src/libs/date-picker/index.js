import 'jquery';
import '../../plugins/datepicker';
import '../../plugins/jquery.datepicker.extension.range.min';
import {
  HIDE_CALENDAR_EVENT_NAME,
  SHOW_CALENDAR_EVENT_NAME,
} from '../../../assets/consts';

import './date-picker.scss';

class DatePicker {
  constructor({
    input, updateHandler, hidingCallback, showingCallback,
  }) {
    this.input = $(input);
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
    };

    this.arriveDate = null;
    this.departureDate = null;

    this.updateHandler = updateHandler;
    this.hidingCallback = hidingCallback || null;
    this.showingCallback = showingCallback || null;

    this.calendarIsShowing = false;

    this._init();
  }

  showCalendar = () => {
    this.input.datepicker('show');
  }

  hideCalendar = () => {
    this.input.datepicker('hide');
  }

  getData = () => {
    const extensionRange = this.input
      .datepicker('widget').data('datepickerExtensionRange');
    return extensionRange;
  }

  setDates = (arriveDate, departureDate) => {
    this.arriveDate = arriveDate || '';
    this.departureDate = departureDate || '';
    this.input
      .datepicker('setDate', [this.arriveDate, this.departureDate]);
    this.updateHandler();
  };

  _handlerDocShowing =
    (e) => {
      if (e.detail.input === this.input[0]) {
        const { arriveDate, departureDate } = this;
        this.setDates(arriveDate, departureDate);
        this.showingCallback(e);

        document.addEventListener(HIDE_CALENDAR_EVENT_NAME,
          this._handlerDocHiding);
        this.calendarIsShowing = true;
      }
    }

  _handlerDocHiding = (e) => {
    if (!e.detail.datepickerShowing) return;
    this.hidingCallback(e);

    document.removeEventListener(HIDE_CALENDAR_EVENT_NAME,
      this._handlerDocHiding);
    this.calendarIsShowing = false;
  }

  _handlerCalendarClick = (ev) => {
    if (!this.calendarIsShowing) return;

    if (ev.target.closest('.ui-datepicker-button_clear')) {
      this.setDates('', '');
    } else if (ev.target.closest('.ui-datepicker-button_conf')) {
      this.hideCalendar();
    }
  }

  _init = () => {
    const { input, params, updateHandler } = this;
    $.datepicker.regional.ru = params;

    $.datepicker.setDefaults($.datepicker.regional.ru);

    const rewriteDates = (arrive, departure) => {
      this.arriveDate = arrive;
      this.departureDate = departure;
    };

    input.datepicker({
      dateFormat: 'dd M',
      minDate: 0,
      range: 'period',
      onSelect(...args) {
        const [,, extensionRange] = args;
        rewriteDates(extensionRange.startDate, extensionRange.endDate);

        updateHandler();
      },
    });

    const calendar = document.querySelector('.js-ui-datepicker');
    calendar.addEventListener('click', this._handlerCalendarClick);
    document.addEventListener(SHOW_CALENDAR_EVENT_NAME,
      this._handlerDocShowing);
  }
}

export default DatePicker;
