import $ from 'jquery';
import "../../../plugins/jquery.maskinput.min.js"

export default function(){
    let inputs = document.querySelectorAll('.mask_d-m-y_cont_value');
        $('.date').mask('99/99/9999');
};
