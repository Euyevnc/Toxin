import InputsWithCounter from  "../../Inputs/Inputs-with-counter/Inputs-with-counter.js"
import date_picker_double from "../../Inputs/Date-range_double/Date-range_double.js"

export default function({number, category, price, arrival,departure, guests, services}){
    date_picker_double(arrival, departure);
    InputsWithCounter(guests);
    booking()
    function booking(){
        let card = document.querySelector(".booker")

        card.querySelectorAll(".booker__number").forEach(el=>el.innerHTML = number)
        card.querySelectorAll(".booker__category").forEach(el=>el.innerHTML = '&nbsp;&nbsp;&nbsp;' + category)
        card.querySelectorAll(".booker__price").forEach(el=>el.innerHTML = parseThousand(price) + "₽ ")

        let servicePrice = 0 
        services.forEach(el=>{
            servicePrice += el.impact 
            if(el.impact < 0) el.describe+=":скидка " + (parseThousand(-el.impact))+ "₽"
            let servBlock = document.createElement("div")
            servBlock.className = "booker__service"
            servBlock.innerHTML = `<span>  <p>${el.describe}</p> <p class="booker__sign_i">i</p></span> <p>${parseThousand(el.price)}₽</p>`
            card.querySelector(".booker__total").insertAdjacentElement("beforebegin", servBlock)
        })
        count(departure - arrival)

        card.querySelectorAll(".date-range__value").forEach(el=>{
            el.set
            el.onchange = (e)=>{
                let firDate = (card.querySelectorAll(".date-range__value")[0].value.split(".")) 
                let arrival = new Date(firDate[1] + " " + firDate[0] + " " + firDate[2])
                let secDate = (card.querySelectorAll(".date-range__value")[1].value.split(".")) 
                let departure = new Date(secDate[1] + " " + secDate[0] + " " + secDate[2])
        
                let days = (departure - arrival)/(24*3600000)
                
                count(days)
            }
        })

        function count(amount){
            let word
            if(amount%10==1) word = "сутки"
            else if(amount%10>=2 && amount%10<=4 ) word = "суток"
            else word = "суток"

            card.querySelectorAll(".booker__amount").forEach(el=>el.textContent = amount + " " + word)
            card.querySelectorAll(".booker__rent-total").forEach(el=>el.textContent = parseThousand(amount*price) + "₽")
            let total = card.querySelector(".booker__total").lastElementChild
            total.textContent = parseThousand(Math.max(0, amount*price + servicePrice) ) + "₽"

        }
    }
}

function parseThousand(int){
    if(int>=1000) return(Math.floor(int/1000) + " " + (int%1000>= 100 ? int%1000 : int%1000>=10 ? "0" + int%1000 : "0" + "0" + int%1000 ) );
    else return int
}