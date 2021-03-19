import 'jquery'
import "../../plugins/jquery.maskinput.min.js"

function initMaskDMY(){
    let obj = document.querySelector('.js-dmy-mask input')
    $('.js-dmy-mask input').mask('99.99.9999') 
}
export default initMaskDMY

