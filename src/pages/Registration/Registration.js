import "./Registration.scss"
import header from "../../includes/Blocks/Header/Header.js"
import footer from "../../includes/Blocks/Footer/Footer.js"
import registration from "../../includes/Blocks/Registration/Registration.js"

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

function handlerDocumentDomLoaded(){
    header()
    footer()
    registration()
}