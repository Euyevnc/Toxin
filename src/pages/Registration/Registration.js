import "./Registration.scss"
import header from "../../includes/Articles/Header/Header.js"
import footer from "../../includes/Articles/Footer/Footer.js"
import registration from "../../includes/Articles/Registration/Registration.js"

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

function handlerDocumentDomLoaded(){
    header()
    footer()
    registration()
}