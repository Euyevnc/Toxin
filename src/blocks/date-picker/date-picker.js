import Textfield from '../textfield/textfield';
import Picker from '../../libs/date-picker';

class DatePicker {
  constructor(root) {
    this.root = root;
    this.textfield = new Textfield(root.querySelector('.js-textfield'));

    this.input = this.textfield.getInput();
    this.arrow = root.querySelector('.js-date-picker__arrow');

    this.picker = new Picker({
      input: this.input,
      updateHandler: this.displayValue,
      hidingCallback: this.handlerCalendarHiding,
      showingCallback: this.handlerCalendarShowing,
    });

    this.setDates('', '');

    this.arrow.addEventListener('click', this.handlerArrowClick);
  }

  setDates = (arrive, departure) => {
    const { picker } = this;
    picker.setDates(arrive, departure);

    this.displayValue();
  }

  displayValue = () => {
    const valuesIsNotEmpty = this.picker.getData().startDate
    && this.picker.getData().endDate;

    if (valuesIsNotEmpty) {
      const arriveText = this.picker.getData().startDateText;
      const departureText = this.picker.getData().endDateText;

      this.textfield.setValue(`${arriveText} - ${departureText}`);
    }
  }

  handlerCalendarShowing = () => {
    this.arrow.removeEventListener('click', this.handlerArrowClick);
    this.arrow.querySelector('.arrow').textContent = 'expand_less';

    this.displayValue();
  }

  handlerCalendarHiding = (e) => {
    this.arrow.querySelector('.arrow').textContent = 'expand_more';
    if (e.detail.input === this.input) {
      document.addEventListener('click', this.handlerDocClick);
    } else {
      this.input.addEventListener('click', this.handlerArrowClick);
    }
  }

  handlerDocClick = () => {
    document.removeEventListener('click', this.handlerDocClick);
    this.arrow.addEventListener('click', this.handlerArrowClick);
  }

  handlerArrowClick = () => {
    const { picker } = this;
    picker.showCalendar();
  }
}

export default DatePicker;
