import 'jquery';
import '../../plugins/datepicker';
import '../../plugins/jquery.datepicker.extension.range.min';
import textfield from '../textfield/textfield';

function datePicker({ area = document } = {}) {
  const pickers = [];

  area.querySelectorAll('.js-date-picker').forEach((element) => {
    const newPicker = new DatePicker(element);
    pickers.push(newPicker);
  });
  if (pickers.length === 1) return pickers[0];
  return pickers;
}

class DatePicker {
  constructor(root) {
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
    this.arriveDate = root.dataset.initarrive;
    this.departureDate = root.dataset.initdeparture;

    this.textfield = textfield({ area: root });
    this.input = this.textfield.input;
    this.arrow = this.textfield.arrow;

    this.#init();
  }

  #init = () => {
    $.datepicker.regional.ru = this.params;

    $.datepicker.setDefaults($.datepicker.regional.ru);

    const object = this;
    const {
      arrow, arriveDate, departureDate,
    } = this;
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

    if (arriveDate && departureDate) {
      input.datepicker('setDate', [`+${arriveDate}d`, `+${departureDate}d`]);
      const extensionRange = $('.js-date-picker input').datepicker('widget').data('datepickerExtensionRange');
      const start = extensionRange.startDateText;
      const end = extensionRange.endDateText;
      input.val(`${start} - ${end}`);
    }

    const picker = document.querySelector('.js-ui-datepicker');
    document.addEventListener('calendarshowing', handlerDocShowing);
    document.addEventListener('calendarhiding', handlerDocHiding);
    arrow.addEventListener('click', handlerArrowClick);
    picker.addEventListener('click', handlerPickerClick);

    function handlerPickerClick(ev) {
      if (ev.target.closest('.ui-datepicker-button_clear')) {
        picker.querySelectorAll('.ui-state-active').forEach((item) => {
          item.classList.remove('ui-state-active');
        });
        if (picker.querySelector('.selected-start')) picker.querySelector('.selected-start').classList.remove('selected-start');
        if (picker.querySelector('.selected-end')) picker.querySelector('.selected-end').classList.remove('selected-end');

        input.val('');
      }
      if (ev.target.closest('.ui-datepicker-button_conf')) {
        $.datepicker._hideDatepicker();
      }
    }

    function handlerArrowClick() {
      $.datepicker._showDatepicker(input[0]);
    }

    function handlerDocClick() {
      document.removeEventListener('click', handlerDocClick);
      arrow.addEventListener('click', handlerArrowClick);
      arrow.querySelector('.arrow').textContent = 'expand_more';
    }

    function handlerDocShowing(e) {
      if (e.detail.input === input[0]) {
        arrow.removeEventListener('click', handlerArrowClick);
        arrow.querySelector('.arrow').textContent = 'expand_less';
      }
    }

    function handlerDocHiding(e) {
      if (e.detail.datepickerShowing && e.detail.input === input[0]) {
        document.addEventListener('click', handlerDocClick);
      }
    }
  }
}

export default datePicker;
