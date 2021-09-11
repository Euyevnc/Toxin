function arrowImgsSlider(data) {
  const slider = new ArrowImgsSlider(data);
  return slider;
}

class ArrowImgsSlider {
  constructor({
    arrowPrev, arrowNext, imgs, buttons, imgDisactiveClass, buttonDisactiveClass,
  }) {
    this.arrowPrev = arrowPrev;
    this.arrowNext = arrowNext;
    this.buttons = buttons;
    this.images = imgs;
    this.disactImgClass = imgDisactiveClass;
    this.disactBtnClass = buttonDisactiveClass;
    this.currentIndex = 0;

    arrowPrev.addEventListener('click', this._handlerArrowPrevClick);
    arrowNext.addEventListener('click', this._handlerArrowNextClick);
  }

  _handlerArrowPrevClick = () => {
    const {images, currentIndex, buttons, disactImgClass,  disactBtnClass} = this
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = images.length - 1;

    images.forEach((image, iIndex) => {
      if (iIndex === newIndex) {
        image.classList.remove(disactImgClass);
        buttons[iIndex].classList.remove(disactBtnClass);
      } else {
        image.classList.add(disactImgClass);
        buttons[iIndex].classList.add(disactBtnClass);
      }
    });

    this.currentIndex = newIndex;
  }

  _handlerArrowNextClick = () => {
    const {images, currentIndex, buttons, disactImgClass,  disactBtnClass} = this

    let newIndex = currentIndex + 1;
    if (newIndex >= images.length) newIndex = 0;

    images.forEach((image, iIndex) => {
      if (iIndex === newIndex) {
        image.classList.remove(disactImgClass);
        buttons[iIndex].classList.remove(disactBtnClass);
      } else {
        image.classList.add(disactImgClass);
        buttons[iIndex].classList.add(disactBtnClass);
      }
    });

    this.currentIndex = newIndex;
  }
}

export default arrowImgsSlider;
