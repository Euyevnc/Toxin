import "./landingPage_GuestDropdown.scss"
import header from  "../../blocks/header/header.js";
import numberFinder from  "../../blocks/number-finder/number-finder.js";

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded)

function handlerDocumentDOMLoaded(e){
    header()
    let finder = numberFinder(); 
    finder.counter.input.focus()
}