import 'jquery';
import '../../plugins/datepicker';
import '../../plugins/jquery.datepicker.extension.range.min';
import textfieldForDropping from '../textfield-for-dropping/textfield-for-dropping';

function datePicker() {
  textfieldForDropping();
  const pickers = [];

  document.querySelectorAll('.js-date-picker').forEach((element) => {
    const newPicker = new DatePicker(element);
    newPicker.init();
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
  }

  init() {
    $.datepicker.regional.ru = this.params;

    $.datepicker.setDefaults($.datepicker.regional.ru);

    const object = this;

    this.input = $(this.root).find('.js-textfield-for-dropping__value');
    this.arrow = this.root.querySelector('.js-textfield-for-dropping__arrow');
    const {
      input, arrow, arriveDate, departureDate,
    } = this;

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
        const jsDate = input.datepicker('widget').data('datepickerExtensionRange');
        const startDT = jsDate.startDateText;
        const endDT = jsDate.endDateText;
        const startD = jsDate.startDate;
        const endD = jsDate.endDate;

        console.log(`Данные: ${startDT}- ${endDT}, (${startD};  ${endD})`);

        $.datepicker._hideDatepicker();
      }
    }

    function handlerArrowClick() {
      $.datepicker._showDatepicker(input);
    }

    function handlerDocShowing() {
      function disactivateArrow() {
        arrow.removeEventListener('click', handlerArrowClick);
        arrow.querySelector('.arrow-down').textContent = 'expand_less';
      }

      setTimeout(disactivateArrow, 100);
      // Таймаут использую потому как плагин запускает (не знаю почему) функцию _hide...
      // на этапе погружения, эту его часть я трогать не решился,
      // вдруг всё сломается, пришлось обходиться таймаутом
    }

    function handlerDocHiding(e) {
      function activateArrow() {
        arrow.addEventListener('click', handlerArrowClick);
        arrow.querySelector('.arrow-down').textContent = 'expand_more';
      }

      if (e.detail.datepickerShowing) setTimeout(activateArrow, 100);
    }
  }
}

export default datePicker;
