import 'jquery';
import '../../plugins/datepicker';
import '../../plugins/jquery.datepicker.extension.range.min';
import Textfield from '../textfield/textfield';

const firstElement = document.querySelector('.js-date-picker');
class DatePicker {
  constructor(root = firstElement) {
    this.root = root;
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

    this.textfieldObject = new Textfield(this.root.querySelector('.js-textfield'));
    this.input = this.textfieldObject.input;
    this.arrow = this.textfieldObject.arrow;
    document.addEventListener('calendarshowing', this.#handlerDocShowing);
    this.arrow.addEventListener('click', this.#handlerArrowClick);
  }

  #handlerPickerClick = (ev) => {
    if (!this.calendarIsShowing) return;
    const input = $(this.input);
    if (ev.target.closest('.ui-datepicker-button_clear')) {
      input.datepicker('setDate', '');
      this.arriveDate = '';
      this.departureDate = '';
    }
    if (ev.target.closest('.ui-datepicker-button_conf')) {
      input.datepicker('hide');
    }
  }

  #handlerDocShowing = (e) => {
    if (e.detail.input === this.input) {
      $(this.input).datepicker('setDate', [this.arriveDate, this.departureDate]);
      this.#displayValue();

      this.arrow.removeEventListener('click', this.#handlerArrowClick);
      this.arrow.querySelector('.arrow').textContent = 'expand_less';
      document.addEventListener('calendarhiding', this.#handlerDocHiding);
      this.calendarIsShowing = true;
    }
  }

  #handlerDocHiding = (e) => {
    if (!e.detail.datepickerShowing) return;
    this.arrow.querySelector('.arrow').textContent = 'expand_more';
    if (e.detail.input === this.input) {
      document.addEventListener('click', this.#handlerDocClick);
    } else this.input.addEventListener('click', this.#handlerArrowClick);
    document.removeEventListener('calendarhiding', this.#handlerDocHiding);
    this.calendarIsShowing = false;
  }

  #handlerDocClick = () => {
    document.removeEventListener('click', this.#handlerDocClick);
    this.arrow.addEventListener('click', this.#handlerArrowClick);
  }

  #handlerArrowClick = () => {
    const input = $(this.input);
    input.datepicker('show');
  }

  #displayValue = () => {
    if (this.arriveDate || this.departureDate) {
      const input = $(this.input);
      const extensionRange = input.datepicker('widget').data('datepickerExtensionRange');
      const start = extensionRange.startDateText;
      const end = extensionRange.endDateText;
      input.val(`${start} - ${end}`);
    }
  }

  init() {
    $.datepicker.regional.ru = this.params;

    $.datepicker.setDefaults($.datepicker.regional.ru);

    const object = this;
    const displayValue = this.#displayValue;
    const { arriveDate, departureDate } = this;
    const input = $(this.input);

    input.datepicker({
      dateFormat: 'dd M',
      minDate: 0,
      range: 'period',
      onSelect(dateText, inst, extensionRange) {
        displayValue();
        object.arriveDate = extensionRange.startDate;
        object.departureDate = extensionRange.endDate;
        const select = new CustomEvent('ondateselect', { detail: extensionRange });
        input[0].dispatchEvent(select);
      },
    });

    const picker = document.querySelector('.js-ui-datepicker');
    picker.addEventListener('click', this.#handlerPickerClick);

    input.datepicker('setDate', [arriveDate, departureDate]);
  }
}

export default DatePicker;
