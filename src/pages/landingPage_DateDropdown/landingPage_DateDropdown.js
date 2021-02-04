import "./landingPage_DateDropdown.scss"
import Header from "../../includes/Articles/Header/Header.js"
import Footer from"../../includes/Articles/Footer/Footer.js"
import finder from "../../includes/Articles/Number-finder/Number-finder.js";

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

function handlerDocumentDomLoaded(e){
    Header()
    Footer()
    finder(false, 4, 8)
    setTimeout(()=>{document.querySelector(".date-range_double__value_first").focus()}, 100)
}