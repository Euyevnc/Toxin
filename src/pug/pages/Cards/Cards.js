import "./Cards.scss"
import NumberFinder from "../../includes/Blocks/NumberFinder/NumberFinder.js";
import NumberBooker from "../../includes/Blocks/NumberBooker/NumberBooker.js";
import DateRange from "../../includes/Inputs/Date-range/Date-range.js";
//import $ from 'jquery';
//import 'bootstrap'
document.addEventListener('DOMContentLoaded', function(e){
    NumberFinder.date_picker()
    NumberFinder.WithDropdown()
    NumberBooker.InputsWithCounter()
    DateRange();
    })
