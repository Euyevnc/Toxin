export default function (){
    document.querySelectorAll(".js-text-field_with_arrow-down").forEach((element)=>{
        let input = element.querySelector(".js-text-field_with_arrow-down__value")

        input.addEventListener("keypress", inputKeyPressHandler)
        input.addEventListener("paste", inputKeyPressHandler)
        input.addEventListener("cut", inputKeyPressHandler)

        function inputKeyPressHandler(e){
            e.preventDefault()
        }

    })

}