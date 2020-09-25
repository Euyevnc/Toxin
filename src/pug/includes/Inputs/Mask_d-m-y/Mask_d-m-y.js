

let fc3 = false

function inputfocus(item){
    item.classList.add("mask_d-m-y_cont_valueactive");

};
function inputnotfocus(item){
    item.classList.remove("mask_d-m-y_cont_valueactive");
    
};


export default function(){
    let inputs = document.querySelectorAll('.mask_d-m-y_cont_value');
    inputs.forEach(item=>{
        item.addEventListener('focus', e=> {fc3 = !fc3; inputfocus(e.target)} );
        item.addEventListener('blur', e=>{fc3 = !fc3; inputnotfocus(e.target)} );
        item.addEventListener('mouseover', e=> {if(!fc3) inputfocus(e.target)} );
        item.addEventListener('mouseout', e=>{if(!fc3) inputnotfocus(e.target)} );
    });


    jQuery(function($){
        $('.date').mask('99/99/9999');
    });

};
