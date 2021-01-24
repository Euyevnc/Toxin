import "./landingPage_DateDropdown.scss"
import Header from "../../includes/Blocks/Header/Header.js"
import Footer from"../../includes/Blocks/Footer/Footer.js"
import finder from "../../includes/Blocks/Number-finder/Number-finder_type_double/Number-finder_type_double.js";

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

function handlerDocumentDomLoaded(e){
    Header()
    Footer()
    finder(false, 4, 8)
    setTimeout(()=>{document.querySelector(".date-range_double__value_first").focus()}, 100)
}