import "./landingPage_GuestDropdown.scss"
import header from  "../../blocks/header/header.js";
import finder from  "../../blocks/number-finder/number-finder.js";

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded)

function handlerDocumentDOMLoaded(e){
    header()
    finder(false, 4, 8)
    finder([ [2, 1, 0] ], 4, 8);
    document.querySelector(".js-input-with-counter input").focus()
}