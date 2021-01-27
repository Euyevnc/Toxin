import "./LandingPage.scss"
import Header from "../../includes/Articles/Header/Header.js"
import Footer from"../../includes/Articles/Footer/Footer.js"
import finder from "../../includes/Articles/Number-finder/Number-finder.js";

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded)

function handlerDocumentDOMLoaded(e){
    Header()
    Footer()
    finder();
}