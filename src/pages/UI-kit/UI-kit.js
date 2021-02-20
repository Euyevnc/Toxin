import "./UI-kit.scss"

import inputMask from "../../blocks/dmy-mask/dmy-mask"
import doubleDatePicker from "../../blocks/date-picker/_double/date-picker_double"
import datePicker from "../../blocks/date-picker/date-picker"
import rangeOldSlider from "../../blocks/range-slider/range-slider";
import counter from "../../blocks/input-with-counter/input-with-counter";
import expandableCheckboxes from "../../blocks/dropping-checkboxes/dropping-checkboxes"
import booker from "../../blocks/number-booker/number-booker" 
import finderForm from "../../blocks/number-finder/number-finder";
import header from "../../blocks/header/header"
import review from "../../blocks/reviews/reviews"
import demo from "../../blocks/number-demo/number-demo"
import data from "./data.json"  
///   
function handlerDOMLoaded(){
    let countersContainer = document.querySelector(".forms")
    let doubleCalendarContainer = document.querySelector(".double-range-calendar-container")
    let expandedCheckboxes = document.querySelector(".dropped-checkboxes-container")
    let expandingCheckboxes = document.querySelector(".dropping-checkboxes-container")
    let uiCont = document.querySelector(".ui-kit-container")
    let services =[
        {
            "describe": "Сбор за услуги", 
            "impact": -2179, 
            "price":0
        },
        {
            "describe": "Сбор за дополнительные услуги", 
            "impact": 300, 
            "price":300
        } 
    ];
    header()
    demo()
    inputMask()
    finderForm()
    rangeOldSlider(uiCont)
    datePicker(4, 8)
    expandableCheckboxes(true, expandedCheckboxes)
    expandableCheckboxes(false, expandingCheckboxes)
    doubleDatePicker(null , 5, doubleCalendarContainer)
    counter([null, [2,2,0], [2,2,0], null, [2,1,0]], countersContainer)
    booker({number: 888, category: "люкс", price: 9990, services: services, arrival:4, departure: 8, guests: [2,1,0]})
    review(Object.assign( data.numbers[1146], {likedReviews: [11460001]} ) )
    
    document.querySelectorAll(".expand-input-drop-container .js-input-with-counter__menu").forEach((el)=>{
        el.classList.remove("input-with-counter__menu_hidden")
        el.classList.remove("js-input-with-counter__menu_hidden")
    })

    document.querySelector(".textfield-active-container input").value = "This is pretty awesome";
    setTimeout(()=>{
        let calendar = document.querySelector(".ui-datepicker").cloneNode(true)
        let contForCalendar = document.querySelector(".expended-calendar-container")
        contForCalendar.appendChild(calendar)
    }, 700)
    //Таймаут пришлось поставить. Плагин для календаря, к сожалению, асиинхронный

}
export default handlerDOMLoaded