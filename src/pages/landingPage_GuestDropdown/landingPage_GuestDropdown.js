import "./landingPage_GuestDropdown.scss"
import Header from "../../includes/Articles/Header/Header.js"
import Footer from"../../includes/Articles/Footer/Footer.js"
import finder from "../../includes/Articles/Number-finder/Number-finder.js";

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

function handlerDocumentDomLoaded(){
    Header()
    Footer()
    finder([ [2, 1, 0] ], 4, 8);
    document.querySelector(".js-input-with-counter__menu").classList.remove("input-with-counter__menu_hidden")
}