import "./SearchRoom_Filter.scss"
import Header from "../../includes/Blocks/Header/Header.js"
import Footer from"../../includes/Blocks/Footer/Footer.js"
import Date_range from "../../includes/Inputs/Date-range/Date-range.js"
import Counter from "../../includes/Inputs/Inputs-with-counter/Inputs-with-counter.js";
import rangeSlider from "../../includes/Range-slider/Range-slider.js";
import exp_checkboxes from "../../includes/Checkbox/Dropping-checkbox/Dropping-checkbox"
import Demonstrate from "../../includes/Blocks/Number-demonstration/Number-demonstration.js";
import PageSwitcher from "../../includes/Pages-switcher/Pages-switcher.js";
import img1 from './image-1.jpg'
import img2 from './image.jpg'
import img3 from './image-2.jpg'
import img4 from './image-5.jpg'
import img5 from './image-3.jpg'
import img6 from './image-4.jpg'
import img7 from './image-8.jpg'
import img8 from './image-6.jpg'
import img9 from './image-7.jpg'
import img10 from './image-10.jpg'
import img11 from './image-9.jpg'
import img12 from './image 2.jpg'
document.addEventListener('DOMContentLoaded', function(e){
    let ItemCont = document.querySelector(".Items-container")
    Header()  
    Footer() 
    Date_range(4, 8)
    Counter([[2,1,1], [2,2,1]])
    rangeSlider()
    exp_checkboxes()
    //
    PageSwitcher( Demonstrate.bind(this ,numbersList),ItemCont)
    
})

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
