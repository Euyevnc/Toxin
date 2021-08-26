import $ from 'jquery';
import '../../plugins/datepicker';
import '../../plugins/jquery.datepicker.extension.range.min';
import Textfield from '../textfield/textfield';

class DoubleDatePicker {
  constructor(root) {
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
    const arriveContainer = root
      .querySelector('.js-double-date-picker__container_for_first');

    this.arriveDate = arriveContainer.dataset.init;

    this.arriveArrow = arriveContainer
      .querySelector('.js-double-date-picker__arrow');

    const arriveTextfield = new Textfield(arriveContainer
      .querySelector('.js-textfield'));
    this.arriveInput = arriveTextfield.getInput();

    const departureContainer = root
      .querySelector('.js-double-date-picker__container_for_second');
    this.departureDate = departureContainer.dataset.init;

    this.departureArrow = departureContainer
      .querySelector('.js-double-date-picker__arrow');

    const departureTextfield = new Textfield(departureContainer
      .querySelector('.js-textfield'));
    this.departureInput = departureTextfield.getInput();

    document.addEventListener('calendarshowing', this.handlerDocShowing);
    this.arriveArrow.addEventListener('click', this.handlerArrowClick);
    this.departureArrow.addEventListener('click', this.handlerArrowClick);

    this.#init();
  }

  handlerDocShowing = (e) => {
    const currentInput = e.detail.input;
    if (currentInput === this.arriveInput
      || currentInput === this.departureInput) {
      $(this.arriveInput).datepicker('setDate', `${this.arriveDate}`);
      $(this.departureInput)
        .datepicker('setDate', [this.arriveDate, this.departureDate]);

      this.#displayValue();
    }

    if (currentInput === this.arriveInput) {
      this.arriveArrow.removeEventListener('click', this.handlerArrowClick);
      this.arriveArrow.querySelector('.arrow').textContent = 'expand_less';
      document.addEventListener('calendarhiding', this.handlerDocHiding);
      this.calendarIsShowing = true;
    } else if (e.detail.input === this.departureInput) {
      this.departureArrow.removeEventListener('click', this.handlerArrowClick);
      this.departureArrow.querySelector('.arrow').textContent = 'expand_less';
      document.addEventListener('calendarhiding', this.handlerDocHiding);
      this.calendarIsShowing = true;
    }
  }

  handlerDocHiding = (e) => {
    if (!e.detail.datepickerShowing) return;

    if (e.detail.input === this.arriveInput) {
      this.processingArrow = this.arriveArrow;
      this.arriveArrow.querySelector('.arrow').textContent = 'expand_more';
      document.addEventListener('click', this.handlerDocClick);
    } else if (e.detail.input === this.departureInput) {
      this.processingArrow = this.departureArrow;
      this.departureArrow.querySelector('.arrow').textContent = 'expand_more';
      document.addEventListener('click', this.handlerDocClick);
    } else {
      this.arriveArrow.addEventListener('click', this.handlerArrowClick);
      this.departureArrow.addEventListener('click', this.handlerArrowClick);

      this.arriveArrow.querySelector('.arrow').textContent = 'expand_more';
      this.departureArrow.querySelector('.arrow').textContent = 'expand_more';
    }
    document.removeEventListener('calendarhiding', this.handlerDocHiding);
    this.calendarIsShowing = false;
  }

  handlerDocClick = () => {
    document.removeEventListener('click', this.handlerDocClick);
    this.processingArrow.addEventListener('click', this.handlerArrowClick);
  }

  handlerArrowClick = (e) => {
    const input = e.target
      .closest('.js-double-date-picker__container').querySelector('input');

    $(input).datepicker('show');
  }

  handlerPickerClick = (ev) => {
    if (!this.calendarIsShowing) return;
    const arriveInput = $(this.arriveInput);
    const departureInput = $(this.departureInput);
    if (ev.target.closest('.ui-datepicker-button_clear')) {
      this.arriveDate = '';
      this.departureDate = '';
      arriveInput.datepicker('setDate', '');
      departureInput.datepicker('setDate', '');
    } else if (ev.target.closest('.ui-datepicker-button_conf')) {
      arriveInput.datepicker('hide');
      departureInput.datepicker('hide');
    }
  }

  #displayValue = () => {
    const arriveInput = $(this.arriveInput);
    const departureInput = $(this.departureInput);
    const extensionRange = arriveInput
      .datepicker('widget').data('datepickerExtensionRange');

    const start = extensionRange.startDateText;
    const end = extensionRange.endDateText;
    if (this.arriveDate) arriveInput.val(start);
    if (this.departureDate) departureInput.val(end);
  }

  #init = () => {
    const object = this;
    const arriveInput = $(this.arriveInput);
    const departureInput = $(this.departureInput);
    const { arriveDate, departureDate } = this;
    const displayValue = this.#displayValue;

    $.datepicker.regional.ru = this.params;
    $.datepicker.setDefaults($.datepicker.regional.ru);

    arriveInput.datepicker({
      minDate: 0,
      range: 'period',
      onSelect(...args) {
        const [, , extensionRange] = args;
        displayValue();
        object.arriveDate = extensionRange.startDate;
        object.departureDate = extensionRange.endDate;

        const select = new CustomEvent('ondateselect',
          { detail: extensionRange });

        arriveInput[0].dispatchEvent(select);
      },
    });

    departureInput.datepicker({
      minDate: 0,
      range: 'period',
      onSelect(...args) {
        const [, , extensionRange] = args;
        displayValue();
        object.arriveDate = extensionRange.startDate;
        object.departureDate = extensionRange.endDate;

        const select = new CustomEvent('ondateselect',
          { detail: extensionRange });

        departureInput[0].dispatchEvent(select);
      },
    });

    const picker = document.querySelector('.js-ui-datepicker');
    picker.addEventListener('click', this.handlerPickerClick);
    arriveInput.datepicker('setDate', arriveDate);
    departureInput.datepicker('setDate', [arriveDate, departureDate]);
  }
}

export default DoubleDatePicker;
