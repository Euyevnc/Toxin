import "./RoomDetails.scss";
import header from "../../includes/Blocks/Header/Header.js"
import footer from"../../includes/Blocks/Footer/Footer.js"
import diogram from "../../includes/Blocks/Diogram/Diogram.js"
import booker from "../../includes/Blocks/Number-booker/Number-booker.js"
import review from "../../includes/Review-shape/Review-shape.js"
import data from "./data.json"

let legendClientData = {arrival: 4, departure: 8, guests:[[2,1,0]]}

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

function handlerDocumentDomLoaded(){
    header()  
    footer()
    getEmulation("1146")
    .then(data=>{
        diogram(data.statistics.great, data.statistics.well, data.statistics.fine, data.statistics.disappointed)
        booker({number: data.number, category: data.category, price: data.price, services: data.services, arrival:legendClientData.arrival, departure: legendClientData.departure, guests: legendClientData.guests})
        review()
    }) 
}

function getEmulation(number){
    let num = number
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{   
            resolve(data.numbers[num])
        }, 100)
    })
}