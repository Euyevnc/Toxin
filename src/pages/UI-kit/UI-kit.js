import "./UI-kit.scss"

import inputMask from "../../includes/Inputs/Mask_DMY/Mask_DMY.js"
import rangeDoubleCalendar from "../../includes/Inputs/Date-range_double/Date-range_double.js"
import rangeCalendar from "../../includes/Inputs/Date-range/Date-range.js"
import fieldWithArrow from "../../includes/Inputs/Field-with-arrow/Field-with-arrow.js";
import rangeSlider from "../../includes/Range-slider/Range-slider.js";
import pageSwitcher from "../../includes/Pages-switcher/Pages-switcher.js";
import counter from "../../includes/Inputs/Inputs-with-counter/Inputs-with-counter.js";
import expandableCheckboxes from "../../includes/Checkbox/Dropping-checkbox/Dropping-checkbox"
import booker from "../../includes/Blocks/Number-booker/Number-booker.js"
import finderForm from "../../includes/Blocks/Number-finder/Number-finder_type_double/Number-finder_type_double.js";
import demonstrateNumber from "../../includes/Blocks/Number-demonstration/Number-demonstration.js";
import header from "../../includes/Blocks/Header/Header.js"

import img1 from './image-1.jpg'
import img2 from './image.jpg'
import img4 from './image-5.jpg'
import img5 from './image-3.jpg'
import img9 from './image-7.jpg'

document.addEventListener('DOMContentLoaded', handlerDOMLoaded)
const numbersList = [
    {
        pictures: [img1,img2,img5,img9],
        number: 888,
        category: "люкс",
        price: "9 990",
        rate: 5,
        reviews: 145
    },{
        pictures: [img2,img4,img5,img9],
        number: 840,
        category: "",
        price: "9 900",
        rate: 4,
        reviews: 65
    }
]
function handlerDOMLoaded(){
    let countersContainer = document.querySelector(".forms")
    let doubleCalendarContainer = document.querySelector(".double-range-calendar-container")
    let expandedCheckboxes = document.querySelector(".dropped-checkboxes-container")
    let expandingCheckboxes = document.querySelector(".dropping-checkboxes-container")
    let containerForSwitcher = document.querySelector(".pages-switcher-container ")
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
    const numbersList = [
        {
            pictures: [img1,img2,img5,img9],
            number: 888,
            category: "люкс",
            price: "9 990",
            rate: 5,
            reviews: 145
        },{
            pictures: [img2,img4,img5,img9],
            number: 840,
            category: "",
            price: "9 900",
            rate: 4,
            reviews: 65
        }
    ]

    header()
    rangeDoubleCalendar(null , 5, doubleCalendarContainer)
    inputMask()
    rangeCalendar(4, 8)
    fieldWithArrow()
    rangeSlider()
    counter([null, [2,2,0], [2,2,0], null, [2,1,0]], countersContainer)
    expandableCheckboxes(false, expandingCheckboxes)
    expandableCheckboxes(true, expandedCheckboxes)
    finderForm()
    booker({number: 888, category: "люкс", price: 9990, services: services, arrival:4, departure: 8, guests: [2,1,0]})
    demonstrateNumber(numbersList)
    pageSwitcher(null, containerForSwitcher)
    document.querySelector(".textfield-active-container input").value = "This is pretty awesome";
    setTimeout(()=>{
        let calendar = document.querySelector(".ui-datepicker").cloneNode(true)
        let contForCalendar = document.querySelector(".expended-calendar-container")
        contForCalendar.appendChild(calendar)
    }, 450)
    //Таймаут пришлось поставить. Плагин для календарика, к сожалению, асиинхронный

}
export default function(){
    document.addEventListener('DOMContentLoaded', handlerDOMLoaded)
}