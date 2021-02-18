import "./Registration.scss"
import header from "../../blocks/header/header.js"
import registration from "../../blocks/registration/registration.js"

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

function handlerDocumentDomLoaded(){
    header()
    registration()
}