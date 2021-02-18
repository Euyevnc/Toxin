import "./landingPage_DateDropdown.scss"
import header from  "../../blocks/header/header.js";
import finder from  "../../blocks/number-finder/number-finder.js";

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded)

function handlerDocumentDOMLoaded(e){
    header()
    finder(false, 4, 8)
    setTimeout(()=>{document.querySelector(".js-text-field_with_arrow-down__value").focus()}, 100)
}