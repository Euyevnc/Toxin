import 'jquery';
import '../../plugins/datepicker';
import '../../plugins/jquery.datepicker.extension.range.min';

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

    this.#init();
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

  showCalendar = () => {
    this.input.datepicker('show');
  }

  hideCalendar = () => {
    this.input.datepicker('hide');
  }

  handlerDocShowing = (e) => {
    if (e.detail.input === this.input[0] && !this.calendarIsShowing) {
      const { arriveDate, departureDate } = this;
      this.setDates(arriveDate, departureDate);

      this.showingCallback(e);

      document.addEventListener('calendarhiding', this.handlerDocHiding);
      this.calendarIsShowing = true;
    }
  }

  handlerDocHiding = (e) => {
    if (!e.detail.datepickerShowing) return;

    this.hidingCallback(e);

    document.removeEventListener('calendarhiding', this.handlerDocHiding);
    this.calendarIsShowing = false;
  }

  handlerCalendarClick = (ev) => {
    if (!this.calendarIsShowing) return;

    if (ev.target.closest('.ui-datepicker-button_clear')) {
      this.setDates('', '');
    } else if (ev.target.closest('.ui-datepicker-button_conf')) {
      this.hideCalendar();
    }
  }

  #init = () => {
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
      onSelect(dateText, inst, extensionRange) {
        rewriteDates(extensionRange.startDate, extensionRange.endDate);

        updateHandler({ dateText, inst, extensionRange });
      },
    });

    const calendar = document.querySelector('.js-ui-datepicker');
    calendar.addEventListener('click', this.handlerCalendarClick);
    document.addEventListener('calendarshowing', this.handlerDocShowing);
  }
}

export default DatePicker;
