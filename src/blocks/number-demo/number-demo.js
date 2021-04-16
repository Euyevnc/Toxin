import handlerButtonHover from '../../plugins/buttons-imgs-slider';
import handlerArrowClick from '../../plugins/arrow-imgs-slider';

class NumberDemo {
  constructor(area = document) {
    this.root = area.querySelector('.js-number-demo');
    this.buttons = this.root.querySelectorAll('.js-number-demo__button');
    this.imgs = this.root.querySelectorAll('.js-number-demo__image');
    this.arrowPrev = this.root.querySelector('.js-number-demo__arrow_left');
    this.arrowNext = this.root.querySelector('.js-number-demo__arrow_right');
  }

  init() {
    const {
      buttons, imgs, arrowPrev, arrowNext,
    } = this;

    handlerButtonHover({
      buttons, imgs, buttonDisactiveClass: 'number-demo__button_disactive', imgDisactiveClass: 'number-demo__image_disactive',
    });
    handlerArrowClick({
      arrowPrev, arrowNext, imgs, buttons, imgDisactiveClass: 'number-demo__image_disactive', buttonDisactiveClass: 'number-demo__button_disactive',
    });
  }
}

export default NumberDemo;
