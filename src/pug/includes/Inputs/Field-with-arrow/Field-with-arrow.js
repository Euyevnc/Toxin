let fc4 = false

function inputfocus(item){
    item.classList.add("Field-with-arrow-valueactive");

};
function inputnotfocus(item){
    item.classList.remove("Field-with-arrow-valueactive");
    
};


export default function(){
    let inputs = document.querySelectorAll('.Field-with-arrow-value');

    inputs.forEach(item=>{
        item.addEventListener('focus', e=> {fc4 = !fc4; inputfocus(e.target)} );
        item.addEventListener('blur', e=>{fc4 = !fc4; inputnotfocus(e.target)} );
        item.addEventListener('mouseover', e=> {if(!fc4) inputfocus(e.target)} );
        item.addEventListener('mouseout', e=>{if(!fc4) inputnotfocus(e.target)} );

        let arrow = item.closest('.Field-with-arrow').querySelector('i');
        arrow.addEventListener('focus', e=> {fc4 = !fc4; inputfocus(item)} );
        arrow.addEventListener('blur', e=>{fc4 = !fc4; inputnotfocus(item)} );
        arrow.addEventListener('mouseover', e=> {if(!fc4) inputfocus(item)} );
        arrow.addEventListener('mouseout', e=>{if(!fc4) inputnotfocus(item)} );
        arrow.addEventListener('click', e=>{
            item.value = "Спасибо...";
            item.setAttribute("disabled", "disabled")
        })
    })

};
