let fc1 = false

function inputfocus(item){
    item.classList.add("TextFieldValueactive");

};
function inputnotfocus(item){
    item.classList.remove("TextFieldValueactive");
    
};


export default function(){
    let inputs = document.querySelectorAll('.TextFieldValue');

    inputs.forEach(item=>{
        item.addEventListener('focus', e=> {fc1 = !fc1; inputfocus(e.target)} );
        item.addEventListener('blur', e=>{fc1 = !fc1; inputnotfocus(e.target)} );
        item.addEventListener('mouseover', e=> {if(!fc1) inputfocus(e.target)} );
        item.addEventListener('mouseout', e=>{if(!fc1) inputnotfocus(e.target)} );
    })
};
