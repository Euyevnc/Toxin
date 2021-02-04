import "./LandingPage.scss"
import header from "../../includes/Articles/Header/Header.js"
import footer from"../../includes/Articles/Footer/Footer.js"
import finder from "../../includes/Articles/Number-finder/Number-finder.js";

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded)

function handlerDocumentDOMLoaded(e){
    header()
    footer()
    finder();
}