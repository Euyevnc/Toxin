import inputsWithCounter from '../input-with-counter/input-with-counter';
import doubleDatePicker from '../double-date-picker/double-date-picker';

function booker() {
  inputsWithCounter();
  doubleDatePicker();
  const bookers = [];
  document.querySelectorAll('.js-booker').forEach((element) => {
    const newBooker = new Booker(element);
    newBooker.init();
    bookers.push(newBooker);
  });
  if (bookers.length === 1) return bookers[0];
  return bookers;
}

class Booker {
  constructor(root) {
    this.root = root;
    this.arrival = 4;
    this.departure = 8;
  }

  init() {
    doubleDatePicker();
    inputsWithCounter();

    const object = this;
    const { root } = this;
    this.number = root.querySelector('.js-booker__number').dataset.number;
    this.category = root.querySelector('.js-booker__category').dataset.category;
    this.price = +root.querySelector('.js-booker__price').dataset.price;
    this.services = extractServicesObject();

    const {
      number, category, price, services,
    } = object;

    const servicePrice = countService();
    countTotal(this.departure - this.arrival);
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

    root.querySelectorAll('.js-double-date-picker input').forEach((input) => {
      input.addEventListener('ondateselect', handlerInputChange);
    });

    function handlerInputChange(e) {
      const arrival = new Date(e.detail.startDate);
      const departure = new Date(e.detail.endDate);

      const days = (departure - arrival) / (24 * 3600000);
      countTotal(days);
    }

    function countTotal(amount) {
      let word;
      if (amount % 10 === 1) word = 'сутки';
      else if (amount % 10 >= 2 && amount % 10 <= 4) word = 'суток';
      else word = 'суток';

      root.querySelectorAll('.js-booker__amount').forEach((el) => {
        const amountField = el;
        amountField.textContent = `${amount} ${word}`;
      });

      root.querySelectorAll('.js-booker__rent-total').forEach((el) => {
        const totalField = el;
        totalField.textContent = `${(amount * price).toLocaleString()}₽`;
      });

      const total = root.querySelector('.js-booker__total').lastElementChild;
      object.totalPrice = total;
      total.textContent = `${(Math.max(0, amount * price + servicePrice)).toLocaleString()}₽`;
    }

    function countService() {
      let totalServicePrice = 0;
      services.forEach((el) => {
        const serviceItem = el;
        if (el.describe) {
          totalServicePrice += serviceItem.impact;
          if (serviceItem.impact < 0) serviceItem.describe += `: скидка ${(-serviceItem.impact).toLocaleString()}₽`;
          const servBlock = document.createElement('li');
          servBlock.className = 'booker__service';
          servBlock.innerHTML = `<span class='booker__service-desc'>${serviceItem.describe}</span><span class='booker__sign_i'>i</span><span class='booker__service-price'>${Math.max(el.impact, 0).toLocaleString()}₽</span>`;
          root.querySelector('.js-booker__services').appendChild(servBlock);
        }
      });
      return totalServicePrice;
    }

    function extractServicesObject() {
      const serviceItems = [];
      const prices = root.querySelector('.js-booker__services').dataset.price.split(', ');
      root.querySelector('.js-booker__services').dataset.desc.split(', ').forEach((elem, index) => {
        const newService = {
          impact: +prices[index],
          describe: elem,
        };
        serviceItems.push(newService);
      });
      return serviceItems;
    }
  }
}

export default booker;
