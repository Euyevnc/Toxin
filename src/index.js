import './layout/layout-for-hotel';
import uiKit from './UI-kit/UI-kit';
import './index.scss';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const buttons = document.querySelectorAll('.js-switcher');
  const sections = document.querySelectorAll('section.section');
  let UIbut;
  buttons.forEach((but, butI) => {
    if (butI === 0) UIbut = but;
    but.addEventListener('click', handlerSwitcherClick);
    function handlerSwitcherClick() {
      if (but.classList.contains('actived')) return;
      buttons.forEach((el) => {
        el.classList.remove('actived');
      });
      but.classList.add('actived');

      sections.forEach((sec) => {
        const section = sec;
        section.style.display = 'none';
      });
      sections[butI].style.display = 'flex';
    }
  });
  UIbut.click();
  uiKit();
}
