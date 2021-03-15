import "./Search_room_Filter_PreferencesDropdown.scss";
import header from "../../blocks/header/header.js"
import dateRange from "../../blocks/date-picker/date-picker"
import counter from "../../blocks/input-with-counter/input-with-counter";
import rangeSlider from "../../blocks/range-slider/range-slider";
import expCheckboxes from "../../blocks/dropping-checkboxes/dropping-checkboxes";
import initDemo from "../../blocks/number-demo/number-demo";

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

//////
function handlerDocumentDomLoaded(){
    header()  
    initDemo()
    rangeSlider(null, {type: "range", orient:"horizontal", scale: false, cloud: "none", origin: 1000, range: 14000, step: 500}, 5000, 10000)
    dateRange(4, 8)
    expCheckboxes()
    counter([[2,1,1], [2,2,1]])
    
    document.querySelector(".input-with-counter_simple .js-input-with-counter__menu").classList.remove("input-with-counter__menu_hidden")
    document.querySelector(".input-with-counter_simple input").focus()
}




