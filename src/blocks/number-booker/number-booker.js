import InputsWithCounter from '../input-with-counter/input-with-counter';
import DoubleDatePicker from '../double-date-picker/double-date-picker';

class Booker {
  constructor(area = document) {
    this.root = area.querySelector('.js-booker');
    this.counter = new InputsWithCounter(this.root);
    this.datePicker = new DoubleDatePicker(this.root);

    this.arrival = 4;
    this.departure = 8;

    this.number = this.root.querySelector('.js-booker__number').dataset.number;
    this.category = this.root.querySelector('.js-booker__category').dataset.category;
    this.price = Number(this.root.querySelector('.js-booker__price-info').dataset.price);

    this.day_local = this.root.querySelector('.js-booker__amount').dataset.local;
    this.discount_local = this.root.querySelector('.js-booker__services').dataset.local;

    this.services = this.#extractServicesObject();
    this.servicePrice = this.#countService();

    this.root.querySelectorAll('.js-double-date-picker input').forEach((input) => {
      input.addEventListener('ondateselect', this.#handlerInputChange);
    });
  }

  #handlerInputChange = (e) => {
    const arrival = new Date(e.detail.startDate);
    const departure = new Date(e.detail.endDate);

    const days = (departure - arrival) / (24 * 3600000);
    this.#displayPrice(days);
  }

  #extractServicesObject = () => {
    const serviceItems = [];
    const prices = this.root.querySelector('.js-booker__services').dataset.prices.split(', ');
    this.root.querySelector('.js-booker__services').dataset.desces.split(', ').forEach((elem, index) => {
      const newService = {
        impact: +prices[index],
        describe: elem,
      };
      serviceItems.push(newService);
    });
    return serviceItems;
  }

  #countService = () => {
    let totalServicePrice = 0;
    this.services.forEach((el) => {
      const serviceItem = el;
      totalServicePrice += serviceItem.impact;
      if (serviceItem.impact < 0) serviceItem.describe += `: ${this.discount_local} ${(-serviceItem.impact).toLocaleString()}₽`;
    });
    return totalServicePrice;
  }

  #displayPrice = (amount) => {
    this.root.querySelectorAll('.js-booker__amount').forEach((el) => {
      const amountField = el;
      amountField.textContent = `${amount} ${this.day_local}`;
    });

    this.root.querySelectorAll('.js-booker__rent-total').forEach((el) => {
      const totalRent = el;
      totalRent.textContent = `${(amount * this.price).toLocaleString()}₽`;
    });

    const total = this.root.querySelector('.js-booker__total').lastElementChild;
    this.totalPrice = total;
    total.textContent = `${(Math.max(0, amount * this.price + this.servicePrice)).toLocaleString()}₽`;
  }

  #displayInfo = () => {
    const {
      number, category, price, root,
    } = this;

    root.querySelectorAll('.js-booker__number').forEach((el) => {
      const numberField = el;
      numberField.textContent = number;
    });

    root.querySelectorAll('.js-booker__category').forEach((el) => {
      const categoryField = el;
      categoryField.textContent = `   ${category}`;
    });

    root.querySelectorAll('.js-booker__price').forEach((el) => {
      const priceField = el;
      priceField.textContent = `${price.toLocaleString()}₽`;
    });

    this.services.forEach((el) => {
      const serviceItem = el;
      if (el.describe) {
        const servBlock = document.createElement('li');
        servBlock.className = 'booker__service';
        servBlock.innerHTML = `<span class='booker__service-desc'>${serviceItem.describe}</span><span class='booker__sign_i'>i</span><span class='booker__service-price'>${Math.max(el.impact, 0).toLocaleString()}₽</span>`;
        this.root.querySelector('.js-booker__services').appendChild(servBlock);
      }
    });
  }

  init() {
    this.counter.displayValue();
    this.datePicker.launch();

    this.#displayPrice(this.departure - this.arrival);
    this.#displayInfo();
  }
}

export default Booker;
