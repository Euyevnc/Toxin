import 'jquery'
import "../../../plugins/jquery.maskinput.min.js"

function initMaskDMY(){
    let obj = document.querySelector('.js-mask_DMY__value')
    $('.js-mask_DMY__value').mask('99/99/9999') 
}
export default initMaskDMY

