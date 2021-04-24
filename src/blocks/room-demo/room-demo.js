import handlerButtonHover from '../../plugins/buttons-imgs-slider';
import handlerArrowClick from '../../plugins/arrow-imgs-slider';

const firstElement = document.querySelector('.js-room-demo');
class RoomDemo {
  constructor(root = firstElement) {
    this.root = root;
    this.buttons = this.root.querySelectorAll('.js-room-demo__button');
    this.imgs = this.root.querySelectorAll('.js-room-demo__image');
    this.arrowPrev = this.root.querySelector('.js-room-demo__arrow_left');
    this.arrowNext = this.root.querySelector('.js-room-demo__arrow_right');
  }

  init() {
    const {
      buttons, imgs, arrowPrev, arrowNext,
    } = this;

    handlerButtonHover({
      buttons, imgs, buttonDisactiveClass: 'room-demo__button_disactive', imgDisactiveClass: 'room-demo__image_disactive',
    });
    handlerArrowClick({
      arrowPrev, arrowNext, imgs, buttons, imgDisactiveClass: 'room-demo__image_disactive', buttonDisactiveClass: 'room-demo__button_disactive',
    });
  }
}

export default RoomDemo;
