import dropdown from '../dropdown';
import doubleDatePicker from '../double-date-picker';

class RoomPreview {
  constructor({ root }) {
    this.root = root;

    this._init();
  }

  _handlerInputChange = (data) => {
    const arrival = data[0];
    const departure = data[1];
    const days = (departure - arrival) / (24 * 3600000);
    this._displayPrice(days || 0);
  }

  _extractServicesObject = () => {
    const serviceItems = [];
    const prices = this.root
      .querySelector('.js-room-preview__services').dataset.prices.split(', ');

    this.root.querySelector('.js-room-preview__services')
      .dataset.desces.split(', ').forEach((elem, index) => {
        const newService = {
          impact: +prices[index],
          describe: elem,
        };
        serviceItems.push(newService);
      });
    return serviceItems;
  }

  _countService = () => {
    let totalServicePrice = 0;
    this.services.forEach((el) => {
      const serviceItem = el;
      totalServicePrice += serviceItem.impact;
      if (serviceItem.impact < 0) {
        serviceItem.describe += `: ${this.discount_local} 
        ${(-serviceItem.impact).toLocaleString()}₽`;
      }
    });
    return totalServicePrice;
  }

  _displayPrice = (amount) => {
    this.root.querySelectorAll('.js-room-preview__amount').forEach((el) => {
      const amountField = el;
      amountField.textContent = `${amount} ${this.day_local}`;
    });

    this.root.querySelector('.js-room-preview__rent-total')
      .textContent = `${(amount * this.price).toLocaleString()}₽`;

    const totalElement = this.root
      .querySelector('.js-room-preview__total');
    const totalPriceElement = this.root
      .querySelector('.js-room-preview__total').lastElementChild;

    this.totalPrice = Math.max(0, amount * this.price + this.servicePrice);
    totalPriceElement.textContent = `${this.totalPrice.toLocaleString()}₽`;
    if (amount > 1) totalElement.classList.add('room-preview__total_shown');
    else totalElement.classList.remove('room-preview__total_shown');
  }

  _displayInfo = () => {
    const {
      number, category, price, root,
    } = this;

    root.querySelectorAll('.js-room-preview__number').forEach((el) => {
      const numberField = el;
      numberField.textContent = number;
    });

    root.querySelectorAll('.js-room-preview__category').forEach((el) => {
      const categoryField = el;
      categoryField.textContent = `   ${category}`;
    });

    root.querySelectorAll('.js-room-preview__price').forEach((el) => {
      const priceField = el;
      priceField.textContent = `${price.toLocaleString()}₽`;
    });

    this.services.forEach((el) => {
      const serviceItem = el;
      if (el.describe) {
        const servBlock = document.createElement('li');
        servBlock.className = 'room-preview__service';
        servBlock.innerHTML = `<span class='room-preview__service-desc'>
        ${serviceItem.describe}</span>
        <span class='room-preview__sign_i'>i</span>
        <span class='room-preview__service-price'>
        ${Math.max(el.impact, 0).toLocaleString()}₽</span>`;

        this.root.querySelector('.js-room-preview__services')
          .appendChild(servBlock);
      }
    });
  }

  _init = () => {
    this.counterObject = dropdown({
      root: this.root
        .querySelector('.js-dropdown'),
    });

    this.number = this.root
      .querySelector('.js-room-preview__number').dataset.number;

    this.category = this.root
      .querySelector('.js-room-preview__category').dataset.category;

    this.price = Number(this.root
      .querySelector('.js-room-preview__price-info').dataset.price);

    this.day_local = this.root
      .querySelector('.js-room-preview__amount').dataset.local;

    this.discount_local = this.root
      .querySelector('.js-room-preview__services').dataset.local;

    this.services = this._extractServicesObject();
    this.servicePrice = this._countService();

    this._displayInfo();
    this._displayPrice(0);

    this.datePickerObject = doubleDatePicker({
      root: this.root
        .querySelector('.js-double-date-picker'),
      selectUserCallback: this._handlerInputChange,
    });
  }
}

export default RoomPreview;
