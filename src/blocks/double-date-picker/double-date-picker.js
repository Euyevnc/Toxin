import $ from 'jquery';
import '../../plugins/datepicker';
import '../../plugins/jquery.datepicker.extension.range.min';
import Textfield from '../textfield/textfield';

class DoubleDatePicker {
  constructor(area = document) {
    this.root = area.querySelector('.js-double-date-picker');
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
      dateFormat: 'dd.mm.yy',
    };
    const arriveContainer = this.root.querySelector('.js-double-date-picker__container_for_first');
    const departureContainer = this.root.querySelector('.js-double-date-picker__container_for_second');

    this.arriveTextfield = new Textfield(arriveContainer);
    this.departureTextfield = new Textfield(departureContainer);

    this.arriveInput = this.arriveTextfield.input;
    this.departureInput = this.departureTextfield.input;

    this.arriveArrow = this.arriveTextfield.arrow;
    this.departureArrow = this.departureTextfield.arrow;

    this.arriveDate = arriveContainer.dataset.init;
    this.departureDate = departureContainer.dataset.init;

    document.addEventListener('calendarshowing', this.#handlerDocShowing);
    document.addEventListener('calendarhiding', this.#handlerDocHiding);
    this.arriveArrow.addEventListener('click', this.#handlerArrowClick);
    this.departureArrow.addEventListener('click', this.#handlerArrowClick);
  }

  #handlerDocShowing = (e) => {
    if (e.detail.input === this.arriveInput) {
      this.arriveArrow.removeEventListener('click', this.#handlerArrowClick);
      this.arriveArrow.querySelector('.arrow').textContent = 'expand_less';
      this.calendarIsShowing = true;
    } else if (e.detail.input === this.departureInput) {
      this.departureArrow.removeEventListener('click', this.#handlerArrowClick);
      this.departureArrow.querySelector('.arrow').textContent = 'expand_less';
      this.calendarIsShowing = true;
    }
  }

  #handlerDocHiding = (e) => {
    if (e.detail.input === this.arriveInput) {
      const handlerDocClick = this.#makeHandlerDocClick(this.arriveArrow, this.#handlerArrowClick);
      document.addEventListener('click', handlerDocClick);
      this.calendarIsShowing = false;
    }
    if (e.detail.input === this.departureInput) {
      // eslint-disable-next-line max-len
      const handlerDocClick = this.#makeHandlerDocClick(this.departureArrow, this.#handlerArrowClick);
      document.addEventListener('click', handlerDocClick);
      this.calendarIsShowing = false;
    }
  }

  #handlerArrowClick = (e) => {
    const input = e.target.closest('.js-double-date-picker__container').querySelector('input');
    $(input).datepicker('show');
  }

  #handlerPickerClick = (ev) => {
    if (!this.calendarIsShowing) return;
    const arriveInput = $(this.arriveInput);
    const departureInput = $(this.departureInput);
    if (ev.target.closest('.ui-datepicker-button_clear')) {
      arriveInput.datepicker('setDate', '');
      departureInput.datepicker('setDate', '');
    }
    if (ev.target.closest('.ui-datepicker-button_conf')) {
      arriveInput.datepicker('hide');
      departureInput.datepicker('hide');
    }
  }

  #makeHandlerDocClick = (arrow, arrowHandler) => function handlerDocClick() {
    const actualArrow = arrow;
    document.removeEventListener('click', handlerDocClick);
    actualArrow.addEventListener('click', arrowHandler);
    actualArrow.querySelector('.arrow').textContent = 'expand_more';
  }

  launch() {
    const object = this;
    const arriveInput = $(this.arriveInput);
    const departureInput = $(this.departureInput);
    const { arriveDate, departureDate } = this;

    $.datepicker.regional.ru = this.params;
    $.datepicker.setDefaults($.datepicker.regional.ru);

    arriveInput.datepicker({
      minDate: 0,
      range: 'period',
      onSelect(dateText, inst, extensionRange) {
        const start = extensionRange.startDateText;
        const end = extensionRange.endDateText;
        arriveInput.val(start);
        departureInput.val(end);
        object.arriveDate = extensionRange.startDate;
        object.departureDate = extensionRange.endDate;

        const select = new CustomEvent('ondateselect', { detail: extensionRange });
        arriveInput[0].dispatchEvent(select);
      },
    });

    departureInput.datepicker({
      minDate: 0,
      range: 'period',
      onSelect(dateText, inst, extensionRange) {
        const start = extensionRange.startDateText;
        const end = extensionRange.endDateText;
        arriveInput.val(start);
        departureInput.val(end);
        object.arriveDate = extensionRange.startDate;
        object.departureDate = extensionRange.endDate;

        const select = new CustomEvent('ondateselect', { detail: extensionRange });
        departureInput[0].dispatchEvent(select);
      },
    });

    const picker = document.querySelector('.js-ui-datepicker');
    picker.addEventListener('click', this.#handlerPickerClick);

    if (arriveDate && departureDate) {
      arriveInput.datepicker('setDate', `+${arriveDate}d`);
      departureInput.datepicker('setDate', [`+${arriveDate}d`, `+${departureDate}d`]);
    } else if (arriveDate) {
      arriveInput.datepicker('setDate', `+${arriveDate}d`);
    } else if (departureDate) {
      departureInput.datepicker('setDate', [`+${arriveDate}d`, `+${departureDate}d`]);
    }
  }
}

export default DoubleDatePicker;
