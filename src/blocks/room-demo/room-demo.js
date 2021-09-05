import handlerButtonHover from '../../plugins/buttons-imgs-slider';
import handlerArrowClick from '../../plugins/arrow-imgs-slider';

class RoomDemo {
  constructor({ root }) {
    this.buttons = root.querySelectorAll('.js-room-demo__button');
    this.imgs = root.querySelectorAll('.js-room-demo__image');
    this.arrowPrev = root.querySelector('.js-room-demo__arrow_left');
    this.arrowNext = root.querySelector('.js-room-demo__arrow_right');

    this.#init();
  }

  #init = () => {
    const {
      buttons, imgs, arrowPrev, arrowNext,
    } = this;

    handlerButtonHover({
      buttons,
      imgs,
      buttonDisactiveClass: 'room-demo__button_disactive',
      imgDisactiveClass: 'room-demo__image_disactive',
    });
    handlerArrowClick({
      arrowPrev,
      arrowNext,
      imgs,
      buttons,
      imgDisactiveClass: 'room-demo__image_disactive',
      buttonDisactiveClass: 'room-demo__button_disactive',
    });
  }
}

export default RoomDemo;
