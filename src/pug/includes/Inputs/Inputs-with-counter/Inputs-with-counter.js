let fc = false
function inputfocus(item){
    item.classList.add("WithDropdownactive");

};
function inputnotfocus(item){
    item.classList.remove("WithDropdownactive");
    
};


function jsUcfirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function(){
    let inputs = document.querySelectorAll('.WithDropdown');

    inputs.forEach(item=>{
        item.addEventListener('focus', e=> {fc = !fc; inputfocus(e.target)} );
        item.addEventListener('blur', e=>{fc = !fc; inputnotfocus(e.target)} );
        item.addEventListener('mouseover', e=> {if(!fc) inputfocus(e.target)} );
        item.addEventListener('mouseout', e=>{if(!fc) inputnotfocus(e.target)} );
    });


    document.querySelectorAll('.WithDropdown').forEach(inp =>{
        inp.addEventListener('focus', e =>{
            let drop = e.target.parentElement.nextElementSibling;
            let dropch = drop.querySelectorAll('div')

            dropch.forEach(ch=>{
                ch.style.display = 'block';
                ch.addEventListener('click', ev=>{
                    e.target.value = ev.target.closest('div').textContent;
                    dropch.forEach(dropch =>{
                        dropch.style.display = 'none'
                    })
                })
            })
        })
        inp.addEventListener('blur', e =>{
            let drop = e.target.parentElement.nextElementSibling;
            let dropch = drop.querySelectorAll('div');
            setTimeout(()=>{
                dropch.forEach(dropch =>{
                dropch.style.display = 'none'
                })
            }, 100);
        })
        inp.addEventListener('input', e=>{
            let drop = e.target.parentElement.nextElementSibling;
            let dropch = drop.querySelectorAll('div');
            inp.value = jsUcfirst(inp.value)
            dropch.forEach(e=>{
                if(e.innerHTML.includes(inp.value) ){e.style.display = "block"}
                else{e.style.display = "none"}
            })
        })
    })
};


