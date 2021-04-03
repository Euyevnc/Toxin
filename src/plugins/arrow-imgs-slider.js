function arrowImgsSlider(data) {
  const slider = new ArrowImgsSlider(data);
  slider.init();
  return slider;
}

class ArrowImgsSlider {
  constructor({
    arrowPrev, arrowNext, imgs, buttons, imgDisactiveClass, buttonDisactiveClass,
  }) {
    this.arrowPrev = arrowPrev;
    this.arrowNext = arrowNext;
    this.imags = imgs;
    this.buttons = buttons;
    this.disactImgClass = imgDisactiveClass;
    this.disactBtnClass = buttonDisactiveClass;
  }

  init() {
    const { arrowPrev } = this;
    const { arrowNext } = this;

    const imgs = this.imags;
    const { buttons } = this;
    const disactImg = this.disactImgClass;
    const disactBtn = this.disactBtnClass;

    let currentIndex = 0;
    const { length } = imgs;

    arrowPrev.addEventListener('click', handlerArrowPrevClick);
    arrowNext.addEventListener('click', handlerArrowNextClick);
    /// ////
    function handlerArrowPrevClick() {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = length - 1;

      imgs.forEach((image, iIndex) => {
        if (iIndex === newIndex) {
          image.classList.remove(disactImg);
          buttons[iIndex].classList.remove(disactBtn);
        } else {
          image.classList.add(disactImg);
          buttons[iIndex].classList.add(disactBtn);
        }
      });

      currentIndex = newIndex;
    }

    function handlerArrowNextClick() {
      let newIndex = currentIndex + 1;
      if (newIndex >= length) newIndex = 0;

      imgs.forEach((image, iIndex) => {
        if (iIndex === newIndex) {
          image.classList.remove(disactImg);
          buttons[iIndex].classList.remove(disactBtn);
        } else {
          image.classList.add(disactImg);
          buttons[iIndex].classList.add(disactBtn);
        }
      });

      currentIndex = newIndex;
    }
  }
}

export default arrowImgsSlider;
