function buttonsImgsSlider(data) {
  const slider = new ButtonsImgsSlider(data);
  return slider;
}

class ButtonsImgsSlider {
  constructor({
    buttons, imgs, buttonDisactiveClass, imgDisactiveClass,
  }) {
    this.buttons = buttons;
    this.imags = imgs;
    this.disactImgClass = imgDisactiveClass;
    this.disactBtnClass = buttonDisactiveClass;
    
    buttons.forEach((button, bIndex) => {
      button.addEventListener('mouseover', buttonHoverListener);
      function buttonHoverListener() {

        imgs.forEach((image, iIndex) => {
          if (iIndex === bIndex) image.classList.remove(imgDisactiveClass);
          else image.classList.add(imgDisactiveClass);
        });

        buttons.forEach((el) => {
          el.classList.add(buttonDisactiveClass);
        });
        button.classList.remove(buttonDisactiveClass);
      }
    });  }
}

export default buttonsImgsSlider;
