import "./RoomDetails.scss";
import header from "../../blocks/header/header.js"
import diogram from "../../blocks/diogram/diogram.js"
import booker from "../../blocks/number-booker/number-booker.js"
import createReviews from "../../blocks/reviews/reviews.js"
import data from "./data.json"

let legendClientData = {arrival: 4, departure: 8, guests:[[2,1,0]], likedReviews: [11460001]}

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

function handlerDocumentDomLoaded(){
    header()  
    getEmulation("1146")
    .then(data=>{
        let dataForPage = Object.assign(data, legendClientData)
        diogram(dataForPage)
        booker(dataForPage)
        createReviews(dataForPage)
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