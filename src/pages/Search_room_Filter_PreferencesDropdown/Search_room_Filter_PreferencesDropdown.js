import "./Search_room_Filter_PreferencesDropdown.scss"
import commonScripts from "../../layout/layout-for-hotel.js"
import header from "../../includes/Articles/Header/Header.js"
import footer from"../../includes/Articles/Footer/Footer.js"
import dateRange from "../../includes/Inputs/Date-range/Date-range.js"
import counter from "../../includes/Inputs/Inputs-with-counter/Inputs-with-counter.js";
import rangeSlider from "../../includes/Sliders/Range-slider/Range-slider.js";
import expCheckboxes from "../../includes/Checkboxes/Dropping-checkbox/Dropping-checkbox"
import pageSwitcher from "../../includes/Sliders/Pages-switcher/Pages-switcher.js";
import img1 from './img/image-1.jpg'
import img2 from './img/image.jpg'
import img3 from './img/image-2.jpg'
import img4 from './img/image-5.jpg'
import img5 from './img/image-3.jpg'
import img6 from './img/image-4.jpg'
import img7 from './img/image-8.jpg'
import img8 from './img/image-6.jpg'
import img9 from './img/image-7.jpg'
import img10 from './img/image-10.jpg'
import img11 from './img/image-9.jpg'
import img12 from './img/image 2.jpg'

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

//////
function handlerDocumentDomLoaded(){
    header()  
    footer() 
    commonScripts()
    dateRange(4, 8)
    counter([[2,1,1], [2,2,1]])
    rangeSlider()
    expCheckboxes()
    pageSwitcher(numbersList, 12)
    document.querySelector(".input-with-counter_simple .js-input-with-counter__menu").classList.remove("input-with-counter__menu_hidden")
}

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
    },{
        pictures: [img3,img2,img5,img9],
        number: 980,
        category: "люкс",
        price: "8 500",
        rate: 3,
        reviews: 35
    },{
        pictures: [img4,img2,img5,img9],
        number: 856,
        category: "",
        price: "7 300",
        rate: 5,
        reviews: 19
    },{
        pictures: [img5,img2,img7,img9],
        number: 740,
        category: "",
        price: "6 600",
        rate: 4,
        reviews: 44
    },{
        pictures: [img6,img2,img5,img9],
        number: 982,
        category: "",
        price: "5 800",
        rate: 3,
        reviews: 56
    },{
        pictures: [img7,img2,img5,img9],
        number: 678,
        category: "",
        price: "5 500",
        rate: 5,
        reviews: 45
    }
    ,{
        pictures: [img8,img2,img5,img9],
        number: 450,
        category: "",
        price: "5 300",
        rate: 4,
        reviews: 39
    },{
        pictures: [img9,img2,img5,img1],
        number: 350,
        category: "",
        price: "5 000",
        rate: 3,
        reviews: 77
    },{
        pictures: [img10,img2,img5,img9],
        number: 666,
        category: "",
        price: "5 000",
        rate: 5,
        reviews: 25
    },{
        pictures: [img11,img2,img5,img9],
        number: 444,
        category: "",
        price: "5 000",
        rate: 3,
        reviews: 15
    },{
        pictures: [img12,img2,img5,img9],
        number: 352,
        category: "",
        price: "5 000",
        rate: 3,
        reviews: 55
    }
]
