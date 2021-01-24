import "./landingPage_GuestDropdown.scss"
import Header from "../../includes/Blocks/Header/Header.js"
import Footer from"../../includes/Blocks/Footer/Footer.js"
import finder from "../../includes/Blocks/Number-finder/Number-finder_type_double/Number-finder_type_double.js";

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

function handlerDocumentDomLoaded(){
    Header()
    Footer()
    finder([ [2, 1, 0] ], 4, 8);
    document.querySelector(".js-input-with-counter__value").focus()
}