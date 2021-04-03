import handlerButtonHover from '../../plugins/buttons-imgs-slider';
import handlerArrowClick from '../../plugins/arrow-imgs-slider';

function numberDemo() {
  const demos = [];

  document.querySelectorAll('.js-number-demo').forEach((element) => {
    const newDemo = new NumberDemo(element);
    newDemo.init();
    demos.push(newDemo);
  });
  if (demos.length === 1) return demos[0];
  return demos;
}

class NumberDemo {
  constructor(root) {
    this.root = root;
  }

  init() {
    const { root } = this;
    this.buttons = root.querySelectorAll('.js-number-demo__button');
    this.imgs = root.querySelectorAll('.js-number-demo__image');
    this.arrowPrev = root.querySelector('.js-number-demo__arrow_left');
    this.arrowNext = root.querySelector('.js-number-demo__arrow_right');
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

export default numberDemo;
