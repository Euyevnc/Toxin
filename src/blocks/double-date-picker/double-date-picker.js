import createDatepicker from '../date-picker';

class DoubleDatePicker {
  constructor({ root, selectUserCallback }) {
    this.userCallback = selectUserCallback;

    const arrivePickerRoot = root
      .querySelector('.js-double-date-picker__container:first-child'
      + ' .js-date-picker');
    const departurePickerRoot = root
      .querySelector('.js-double-date-picker__container:last-child'
      + ' .js-date-picker');

    this.arrivePicker = createDatepicker({
      root: arrivePickerRoot,
      handlerDateSelected:
        this._handlerArriveCalendarSelection,
      options: { dateFormat: 'dd.mm.yyyy' },

    });

    this.departurePicker = createDatepicker({
      root: departurePickerRoot,
      handlerDateSelected:
        this._handlerDepartureCalendarSelection,
      options: { dateFormat: 'dd.mm.yyyy' },

    });
  }

  _handlerArriveCalendarSelection = (formatedDates, dates) => {
    const separator = this.arrivePicker.getOptions().multipleDatesSeparator;
    this.arrivePicker.textfield
      .setValue(formatedDates.split(separator)[0] || '');

    const [arriveStart, arriveEnd] = this.arrivePicker.getDates();
    const [departStart, departEnd] = this.departurePicker.getDates();

    const startIsSync = ((arriveStart && departStart) === false)
      || arriveStart?.valueOf() === departStart?.valueOf();
    const endIsSync = ((arriveEnd && departEnd) === false)
      || arriveEnd?.valueOf() === departEnd?.valueOf();

    const needToSync = !(startIsSync && endIsSync) && dates.length !== 1;

    if (!needToSync) return;

    !dates ? this.departurePicker.clearDates()
      : this.departurePicker.setDates(dates);
    if (this.userCallback) this.userCallback(this.arrivePicker.getDates());
  }

  _handlerDepartureCalendarSelection = (formatedDates, dates) => {
    const separator = this.departurePicker.getOptions().multipleDatesSeparator;
    this.departurePicker.textfield
      .setValue(formatedDates.split(separator)[1] || '');

    const [arriveStart, arriveEnd] = this.arrivePicker.getDates();
    const [departStart, departEnd] = this.departurePicker.getDates();

    const startIsSync = ((arriveStart && departStart) === false)
      || arriveStart?.valueOf() === departStart?.valueOf();
    const endIsSync = ((arriveEnd && departEnd) === false)
      || arriveEnd?.valueOf() === departEnd?.valueOf();

    const needToSync = !(startIsSync && endIsSync) && dates.length !== 1;

    if (!needToSync) return;

    !dates ? this.arrivePicker.clearDates() : this.arrivePicker.setDates(dates);

    if (this.userCallback) this.userCallback(this.arrivePicker.getDates());
  }
}

export default DoubleDatePicker;
