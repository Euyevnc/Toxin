import "./RoomDetails.scss";
import Header from "../../includes/Blocks/Header/Header.js"
import Footer from"../../includes/Blocks/Footer/Footer.js"
import diogram from "../../includes/Blocks/Diogram/Diogram.js"
import booker from "../../includes/Blocks/NumberBooker/NumberBooker.js"
import review from "../../includes/Review-shape/Review-shape.js";


document.addEventListener('DOMContentLoaded', function(e){
    Header()  
    Footer() 
    diogram()
    booker()
    review()
})
