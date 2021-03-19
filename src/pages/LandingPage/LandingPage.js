import "./LandingPage.scss"
import header from  "../../blocks/header/header.js";
import finder from  "../../blocks/number-finder/number-finder.js";

document.addEventListener('DOMContentLoaded', handlerDocumentDOMLoaded)

function handlerDocumentDOMLoaded(e){
    header()
    finder({}); 
}