import $ from 'jquery';
import '../../plugins/datepicker';
import '../../plugins/jquery.datepicker.extension.range.min';

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

    this.#init();
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

  showCalendar = (input) => {
    if (input === this.arriveInput[0]) this.arriveInput.datepicker('show');
    else this.departureInput.datepicker('show');
  }

  hideCalendar = () => {
    this.arriveInput.datepicker('hide');
    this.departureInput.datepicker('hide');
  }

  handlerDocShowing = (e) => {
    const currentInput = e.detail.input;

    if (currentInput !== this.arriveInput[0]
      && currentInput !== this.departureInput[0]) return;

    this.setDates(this.arriveDate, this.departureDate);

    this.showingCallback(e);

    document.addEventListener('calendarhiding', this.handlerDocHiding);
    this.calendarIsShowing = true;
  }

  handlerDocHiding = (e) => {
    if (!e.detail.datepickerShowing) return;

    this.hidingCallback(e);

    document.removeEventListener('calendarhiding', this.handlerDocHiding);
    this.calendarIsShowing = false;
  }

  handlerPickerClick = (ev) => {
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

  #init = () => {
    const { arriveInput, departureInput } = this;

    const rewriteDates = (arrive, departure) => {
      this.arriveDate = arrive;
      this.departureDate = departure;
    };

    const { updateHandler } = this;
    arriveInput.datepicker({
      minDate: 0,
      range: 'period',
      onSelect(dateText, inst, extensionRange) {
        rewriteDates(extensionRange.startDate, extensionRange.endDate);
        updateHandler({ dateText, inst, extensionRange });
      },
    });

    departureInput.datepicker({
      minDate: 0,
      range: 'period',
      onSelect(dateText, inst, extensionRange) {
        rewriteDates(extensionRange.startDate, extensionRange.endDate);
        updateHandler({ dateText, inst, extensionRange });
      },
    });

    document.addEventListener('calendarshowing', this.handlerDocShowing);

    const picker = document.querySelector('.js-ui-datepicker');
    picker.addEventListener('click', this.handlerPickerClick);
  }
}

export default DoubleDatePicker;
