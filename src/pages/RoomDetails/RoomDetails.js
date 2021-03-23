import "./RoomDetails.scss";
import header from "../../blocks/header/header.js"
import diagram from "../../blocks/diagram/diagram.js"
import booker from "../../blocks/number-booker/number-booker.js"
import review from "../../blocks/review/review.js"
import data from "./data.json"

let legendClientData = {arrival: 4, departure: 8, guests:[[2,1,0]], likedReviews: [11460001]}

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded)

function handlerDocumentDomLoaded(){
    header()  
    diagram()
    booker()
    review()
}
