let fc = false

function inputfocus(item){
    item.classList.add("TextFieldValueactive");

};
function inputnotfocus(item){
    item.classList.remove("TextFieldValueactive");
    
};


export default function(){
    let inputs = document.querySelectorAll('.TextFieldValue');

    inputs.forEach(item=>{
        item.addEventListener('focus', e=> {fc = !fc; inputfocus(e.target)} );
        item.addEventListener('blur', e=>{fc = !fc; inputnotfocus(e.target)} );
        item.addEventListener('mouseover', e=> {if(!fc) inputfocus(e.target)} );
        item.addEventListener('mouseout', e=>{if(!fc) inputnotfocus(e.target)} );
    })
};
