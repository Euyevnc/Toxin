import "./RoomDetails.scss";
import Header from "../../includes/Blocks/Header/Header.js"
import Footer from"../../includes/Blocks/Footer/Footer.js"
import diogram from "../../includes/Blocks/Diogram/Diogram.js"
import booker from "../../includes/Blocks/NumberBooker/NumberBooker.js"
import review from "../../includes/Review-shape/Review-shape.js";


document.addEventListener('DOMContentLoaded', function(e){
    Header()  
    Footer() 
    diogram(130, 65, 65, 0)
    booker({number: 888, category:"люкс", price: 9990, arrival:4,departure: 8, guests:[2,1,0],services:[{describe: "Сбор за услуги", impact: -2179, price:0},{describe: "Сбор за дополнительные услуги", impact: 300, price:300} ], })
    review()
})
