import "./LandingPage.scss"
import "../../layout/layout-for-hotel"
import Header from "../../includes/Blocks/Header/Header.js"
import Footer from"../../includes/Blocks/Footer/Footer.js"
import Double_range_date from "../../includes/Blocks/Number-finder/Number-finder_type_double/Number-finder_type_double.js";

document.addEventListener('DOMContentLoaded', function(e){
    Header()
    Footer()
    Double_range_date()
})