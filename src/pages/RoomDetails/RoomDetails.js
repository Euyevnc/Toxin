import "./RoomDetails.scss";
import Header from "../../includes/Blocks/Header/Header.js"
import Footer from"../../includes/Blocks/Footer/Footer.js"
import diogram from "../../includes/Blocks/Diogram/Diogram.js"
import booker from "../../includes/Blocks/Number-booker/Number-booker.js"
import review from "../../includes/Review-shape/Review-shape.js"
import data from "./data.json"

let legendClientData = {arrival: 4, departure: 8, guests:[[2,1,0]]}

document.addEventListener('DOMContentLoaded', function(e){
    Header()  
    Footer()
    getEmulation("1146")
    .then(data=>{
        diogram(data.statistics.great, data.statistics.well, data.statistics.fine, data.statistics.disappointed)
        booker({number: data.number, category: data.category, price: data.price, services: data.services, arrival:legendClientData.arrival, departure: legendClientData.departure, guests: legendClientData.guests})
        review()
    })
})
async function getEmulation(number){
    let num = number
    let data = await fetch("./data.json")
    data = await data.json()
    return data.numbers[num]
}