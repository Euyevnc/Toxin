export default function(){
    let inputs = document.querySelectorAll('.field-with-arrow__value');

    inputs.forEach(item=>{
        let arrow = item.closest('.field-with-arrow').querySelector('i')
        arrow.addEventListener('click', e=>{
            item.value = "Спасибо...";
            item.setAttribute("disabled", "true")
        })
    })

};
