import 'jquery';
import '../../plugins/datepicker';
import '../../plugins/jquery.datepicker.extension.range.min';
import Textfield from '../textfield/textfield';

class DatePicker {
  constructor(area = document) {
    this.root = area.querySelector('.js-date-picker');
    this.params = {
      closeText: 'Закрыть',
      prevText: 'Предыдущий',
      nextText: 'Следующий',
      currentText: 'Сегодня',
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
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
    this.arriveDate = this.root.dataset.initarrive;
    this.departureDate = this.root.dataset.initdeparture;

    this.textfield = new Textfield(this.root);
    this.input = this.textfield.input;
    this.arrow = this.textfield.arrow;
    document.addEventListener('calendarshowing', this.#handlerDocShowing);
    document.addEventListener('calendarhiding', this.#handlerDocHiding);
    this.arrow.addEventListener('click', this.#handlerArrowClick);
  }

  #handlerPickerClick = (ev) => {
    if (!this.calendarIsShowing) return;
    const input = $(this.input);
    if (ev.target.closest('.ui-datepicker-button_clear')) {
      input.datepicker('setDate', '');
    }
    if (ev.target.closest('.ui-datepicker-button_conf')) {
      input.datepicker('hide');
    }
  }

  #handlerDocShowing = (e) => {
    if (e.detail.input === this.input) {
      this.arrow.removeEventListener('click', this.#handlerArrowClick);
      this.arrow.querySelector('.arrow').textContent = 'expand_less';
      this.calendarIsShowing = true;
    }
  }

  #handlerDocHiding = (e) => {
    if (e.detail.input === this.input) {
      document.addEventListener('click', this.#handlerDocClick);
      this.calendarIsShowing = false;
    }
  }

  #handlerArrowClick = () => {
    const input = $(this.input);
    input.datepicker('show');
  }

  #handlerDocClick = () => {
    document.removeEventListener('click', this.#handlerDocClick);
    this.arrow.addEventListener('click', this.#handlerArrowClick);
    this.arrow.querySelector('.arrow').textContent = 'expand_more';
  }

  launch = () => {
    $.datepicker.regional.ru = this.params;

    $.datepicker.setDefaults($.datepicker.regional.ru);

    const object = this;
    const { arriveDate, departureDate } = this;
    const input = $(this.input);

    input.datepicker({
      dateFormat: 'dd M',
      minDate: 0,
      range: 'period',
      onSelect(dateText, inst, extensionRange) {
        const start = extensionRange.startDateText;
        const end = extensionRange.endDateText;
        input.val(`${start} - ${end}`);
        object.arriveDate = extensionRange.startDate;
        object.departureDate = extensionRange.endDate;
        const select = new CustomEvent('ondateselect', { detail: extensionRange });
        input[0].dispatchEvent(select);
      },
    });

    const picker = document.querySelector('.js-ui-datepicker');
    picker.addEventListener('click', this.#handlerPickerClick);
    if (arriveDate && departureDate) {
      input.datepicker('setDate', [`+${arriveDate}d`, `+${departureDate}d`]);
      const extensionRange = $('.js-date-picker input').datepicker('widget').data('datepickerExtensionRange');
      const start = extensionRange.startDateText;
      const end = extensionRange.endDateText;
      input.val(`${start} - ${end}`);
    }
  }
}

export default DatePicker;
