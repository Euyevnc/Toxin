/* eslint-disable class-methods-use-this */
import createDatepicker from '../date-picker';

class DoubleDatePicker {
  constructor({ root, selectUserCallback }) {
    const arrivePickerRoot = root
      .querySelector('.js-double-date-picker__container:first-child .js-date-picker');
    const departurePickerRoot = root
      .querySelector('.js-double-date-picker__container:last-child .js-date-picker');

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
    this.userCallback = selectUserCallback;
  }

  _handlerArriveCalendarSelection = (formatedDates, dates) => {
    if (!dates) this.departurePicker.clearDates();
    const [arriveStart, arriveEnd] = this.arrivePicker.getDates();
    const [departStart, departEnd] = this.departurePicker.getDates();

    const startIsSync = ((arriveStart && departStart) === false)
      || arriveStart?.valueOf() === departStart?.valueOf();
    const endIsSync = ((arriveEnd && departEnd) === false)
      || arriveEnd?.valueOf() === departEnd?.valueOf();

    const needToSync = !(startIsSync && endIsSync) && dates.length !== 1;
    if (needToSync) this.departurePicker.setDates(dates);

    const separator = this.arrivePicker.getOptions().multipleDatesSeparator;
    this.arrivePicker.textfield
      .setValue(formatedDates.split(separator)[0] || '');

    this.userCallback(this.arrivePicker.getDates());
  }

  _handlerDepartureCalendarSelection = (formatedDates, dates) => {
    if (!dates) this.arrivePicker.clearDates();
    const [arriveStart, arriveEnd] = this.arrivePicker.getDates();
    const [departStart, departEnd] = this.departurePicker.getDates();

    const startIsSync = ((arriveStart && departStart) === false)
      || arriveStart?.valueOf() === departStart?.valueOf();
    const endIsSync = ((arriveEnd && departEnd) === false)
      || arriveEnd?.valueOf() === departEnd?.valueOf();

    const needToSync = !(startIsSync && endIsSync) && dates.length !== 1;

    if (needToSync) this.arrivePicker.setDates(dates);
    const separator = this.departurePicker.getOptions().multipleDatesSeparator;
    this.departurePicker.textfield
      .setValue(formatedDates.split(separator)[1] || '');

    this.userCallback(this.departurePicker.getDates());
  }
}

export default DoubleDatePicker;
