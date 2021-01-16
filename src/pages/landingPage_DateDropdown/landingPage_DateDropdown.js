import "./landingPage_DateDropdown.scss"
import Header from "../../includes/Blocks/Header/Header.js"
import Footer from"../../includes/Blocks/Footer/Footer.js"
import Double_range_date from "../../includes/Blocks/Number-finder/Number-finder_type_double/Number-finder_type_double.js";

document.addEventListener('DOMContentLoaded', function(e){
    Header()
    Footer()
    Double_range_date(false, 4, 8)
    setTimeout(()=>{document.querySelector(".date-range__value").focus()}, 10)
    //С открытой панелью разработчика ждёт пока она
    // закроется (или задействуется инструмент выбора элементов со страницы)и только потом выполняется, 
    //что меня ставит, елси честно, в тупик. (firefox)
})