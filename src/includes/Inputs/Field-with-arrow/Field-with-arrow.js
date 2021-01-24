export default function(container){
    let area = container || document
    let inputs = area.querySelectorAll('.field-with-arrow__value');

    inputs.forEach(item=>{
        let arrow = item.closest('.field-with-arrow').querySelector('i')
        item.addEventListener("change", handlerValueSubmit)
    })

};

function handlerValueSubmit(e){
    e.preventDefault()
    let input = e.target
    input.value = "Спасибо...";
    input.setAttribute("disabled", "true")
}