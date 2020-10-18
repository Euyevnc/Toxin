import "./Cards.scss"
import NumberFinder from "../../includes/Blocks/NumberFinder/NumberFinder.js";
import NumberBooker from "../../includes/Blocks/NumberBooker/NumberBooker.js";
import DateRange from "../../includes/Inputs/Date-range/Date-range.js";
import Registration from "../../includes/Blocks/NumberRegistration/NumberRegistration.js"
import Demonstration from "../../includes/Blocks/NumberDemonstration/NumberDemonstration.js"
import number1_1 from "./Number1_1.png"
import number2_1 from "./Number2_1.png"
//import $ from 'jquery';
//import 'bootstrap'


const numbersList = [
    {
        pictures: [number1_1, number2_1],
        number: 888,
        category: "люкс",
        price: "9 990",
        rate: 5,
        reviews: 145
    },{
        pictures: [number2_1, number1_1],
        number: 840,
        category: "",
        price: "9 900",
        rate: 4,
        reviews: 65
    }


]


document.addEventListener('DOMContentLoaded', function(e){
    NumberFinder.date_picker()
    NumberFinder.WithDropdown()
    NumberBooker.InputsWithCounter()
    DateRange();
    Registration();
    Demonstration(numbersList)

    })
