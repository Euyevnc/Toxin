import "./RoomDetails.scss";
import header from "../../includes/Articles/Header/Header.js"
import footer from"../../includes/Articles/Footer/Footer.js"
import diogram from "../../includes/Articles/Diogram/Diogram.js"
import booker from "../../includes/Articles/Number-booker/Number-booker.js"
import review from "../../includes/Articles/Review-shape/Review-shape.js"
import data from "./data.json"

let legendClientData = {arrival: 4, departure: 8, guests:[[2,1,0]], likedReviews: [11460001]}

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

function handlerDocumentDomLoaded(){
    header()  
    footer()
    getEmulation("1146")
    .then(data=>{
        let dataForPage = Object.assign(data, legendClientData)
        diogram(dataForPage)
        booker(dataForPage)
        review(dataForPage)
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