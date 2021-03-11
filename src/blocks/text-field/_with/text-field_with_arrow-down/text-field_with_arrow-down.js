export default function (){
    document.querySelectorAll(".js-text-field_with_arrow-down__arrow").forEach((arrow)=>{
        arrow.addEventListener("click", arrowClickHandler)


        function arrowClickHandler(){
            let input = arrow.closest(".js-text-field_with_arrow-down").querySelector(".js-text-field_with_arrow-down__value")
            input.focus()
        }
    })
}