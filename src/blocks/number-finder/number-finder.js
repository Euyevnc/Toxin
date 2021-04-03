import doubleDatePicker from '../double-date-picker/double-date-picker';
import counter from '../input-with-counter/input-with-counter';

function numberFinder() {
  const finders = [];
  document.querySelectorAll('.js-number-finder').forEach((element) => {
    const newFinder = new NumberFinder(element);
    newFinder.init();
    finders.push(newFinder);
  });
  if (finders.length === 1) return finders[0];
  return finders;
}

class NumberFinder {
  constructor(root) {
    this.root = root;
  }

  init() {
    this.datepicker = doubleDatePicker();
    this.counter = counter();
  }
}

export default numberFinder;
