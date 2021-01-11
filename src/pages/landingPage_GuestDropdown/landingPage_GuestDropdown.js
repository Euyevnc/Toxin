import "./landingPage_GuestDropdown.scss"
import Header from "../../includes/Blocks/Header/Header.js"
import Footer from"../../includes/Blocks/Footer/Footer.js"
import Double_range_date from "../../includes/Blocks/NumberFinder/NumberFinder_type_double/NumberFinder_type_double.js";

document.addEventListener('DOMContentLoaded', function(e){
    Header()  
    Footer() 
    document.querySelector("#finder_arrival").classList.add("filled-range");
    document.querySelector("#finder_departure").classList.add("filled-range")
    Double_range_date()
})