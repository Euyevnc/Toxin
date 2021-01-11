export default function(){
    let inputs = document.querySelectorAll('.Field-with-arrow__value');

    inputs.forEach(item=>{
        let arrow = item.closest('.Field-with-arrow').querySelector('i')
        arrow.addEventListener('click', e=>{
            item.value = "Спасибо...";
            item.setAttribute("disabled", "true")
        })
    })

};
