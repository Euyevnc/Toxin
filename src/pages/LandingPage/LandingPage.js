import "./LandingPage.scss"
import Header from "../../includes/Blocks/Header/Header.js"
import Footer from"../../includes/Blocks/Footer/Footer.js"
import finder from "../../includes/Blocks/Number-finder/Number-finder_type_double/Number-finder_type_double.js";

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded)

function handlerDocumentDOMLoaded(e){
    Header()
    Footer()
    finder();
}