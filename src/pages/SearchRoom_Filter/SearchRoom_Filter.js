import "./SearchRoom_Filter.scss"
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
    dateRange(4, 8)
    counter([[2,1,1], [2,2,1]])
    rangeSlider()
    expCheckboxes()
    initDemo()
}

