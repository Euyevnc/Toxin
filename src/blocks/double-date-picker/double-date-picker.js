import DoublePicker from '../../libs/double-date-picker';
import Textfield from '../textfield/textfield';

class DoubleDatePicker {
  constructor(root) {
    const arriveContainer = root
      .querySelector('.js-double-date-picker__container_for_first');
    const departureContainer = root
      .querySelector('.js-double-date-picker__container_for_second');

    this.arriveTextfield = new Textfield(arriveContainer
      .querySelector('.js-textfield'));
    this.departureTextfield = new Textfield(departureContainer
      .querySelector('.js-textfield'));

    this.arriveInput = this.arriveTextfield.getInput();
    this.departureInput = this.departureTextfield.getInput();

    this.arriveArrow = arriveContainer
      .querySelector('.js-double-date-picker__arrow');
    this.departureArrow = departureContainer
      .querySelector('.js-double-date-picker__arrow');

    this.picker = new DoublePicker({
      inputs: [this.arriveInput, this.departureInput],
      updateHandler: this.displayValues,
      hidingCallback: this.handlerDocHiding,
      showingCallback: this.handlerDocShowing,

    });

    const initialArrive = arriveContainer.dataset.init;
    const initialDeparture = departureContainer.dataset.init;
    this.setDates(initialArrive, initialDeparture);

    this.arriveArrow.addEventListener('click', this.handlerArrowClick);
    this.departureArrow.addEventListener('click', this.handlerArrowClick);
  }

  setDates = (arrive, departure) => {
    this.picker.setDates(arrive, departure);
  }

  displayValues = () => {
    const valuesIsNotEmpty = this.picker.getData().startDate
    && this.picker.getData().endDate;

    if (valuesIsNotEmpty) {
      const { picker } = this;

      const arriveText = picker.getData().startDateText;
      const departureText = picker.getData().endDateText;

      this.arriveTextfield.setValue(arriveText);
      this.departureTextfield.setValue(departureText);
    }
  }

  handlerDocShowing = (e) => {
    const currentInput = e.detail.input;

    if (currentInput === this.arriveInput) {
      this.arriveArrow.removeEventListener('click', this.handlerArrowClick);
      this.arriveArrow.querySelector('.arrow').textContent = 'expand_less';
    } else if (e.detail.input === this.departureInput) {
      this.departureArrow.removeEventListener('click', this.handlerArrowClick);
      this.departureArrow.querySelector('.arrow').textContent = 'expand_less';
    }
  }

  handlerDocHiding = (e) => {
    if (!e.detail.datepickerShowing) return;

    const currentInput = e.detail.input;
    if (currentInput === this.arriveInput) {
      this.processingArrow = this.arriveArrow;
      this.arriveArrow.querySelector('.arrow').textContent = 'expand_more';
      document.addEventListener('click', this.handlerDocClick);
    } else if (currentInput === this.departureInput) {
      this.processingArrow = this.departureArrow;
      this.departureArrow.querySelector('.arrow').textContent = 'expand_more';
      document.addEventListener('click', this.handlerDocClick);
    } else {
      this.arriveArrow.addEventListener('click', this.handlerArrowClick);
      this.departureArrow.addEventListener('click', this.handlerArrowClick);

      this.arriveArrow.querySelector('.arrow').textContent = 'expand_more';
      this.departureArrow.querySelector('.arrow').textContent = 'expand_more';
    }
  }

  handlerDocClick = () => {
    document.removeEventListener('click', this.handlerDocClick);
    this.processingArrow.addEventListener('click', this.handlerArrowClick);
  }

  handlerArrowClick = (e) => {
    const input = e.target
      .closest('.js-double-date-picker__container').querySelector('input');

    this.picker.showCalendar(input);
  }
}

export default DoubleDatePicker;
