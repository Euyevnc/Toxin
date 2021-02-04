import InputsWithCounter from  "../../Inputs/Inputs-with-counter/Inputs-with-counter.js"
import date_picker_double from "../../Inputs/Date-range_double/Date-range_double.js"

function initBooker({number, category, price, arrival,departure, guests, services}, container){
    let area = container || document
    let bookerContainer = area.querySelector(".js-booker")
    date_picker_double(arrival, departure, bookerContainer);
    InputsWithCounter(guests, bookerContainer);
    booking()

    function booking(){
        let card = area.querySelector(".js-booker")

        card.querySelectorAll(".js-booker__number").forEach(el=>el.innerHTML = number)
        card.querySelectorAll(".js-booker__category").forEach(el=>el.innerHTML = '&nbsp;&nbsp;&nbsp;' + category)
        card.querySelectorAll(".js-booker__price").forEach(el=>el.innerHTML = parseThousand(price) + "₽ ")

        let servicesPrice = countService(services)
        countTotal(departure - arrival, servicesPrice)

        card.querySelectorAll(".date-range_double__value").forEach(el=>{
            el.set
            el.onchange = (e)=>{
                let firDate = (card.querySelectorAll(".date-range_double__value")[0].value.split(".")) 
                let secDate = (card.querySelectorAll(".date-range_double__value")[1].value.split(".")) 
                let arrival = new Date(firDate[1] + " " + firDate[0] + " " + firDate[2])
                let departure = new Date(secDate[1] + " " + secDate[0] + " " + secDate[2])

                let days = (departure - arrival)/(24*3600000)
                countTotal(days, servicesPrice)
            }
        })

        //////
        function countTotal(amount, servicePrice){
            let word
            if(amount%10==1) word = "сутки"
            else if(amount%10>=2 && amount%10<=4 ) word = "суток"
            else word = "суток"

            card.querySelectorAll(".js-booker__amount").forEach(el=>el.textContent = amount + " " + word)
            card.querySelectorAll(".js-booker__rent-total").forEach(el=>el.textContent = parseThousand(amount*price) + "₽")
            let total = card.querySelector(".js-booker__total").lastElementChild
            total.textContent = parseThousand(Math.max(0, amount*price + servicePrice) ) + "₽"

        }
        function countService(servicesArray){
            let servicePrice = 0 
            servicesArray.forEach(el=>{
                servicePrice += el.impact 
                if(el.impact < 0) el.describe+=":скидка " + (parseThousand(-el.impact))+ "₽"
                let servBlock = document.createElement("div")
                servBlock.className = "booker__service"
                servBlock.innerHTML = `<span class="booker__font" ><span class="booker__service-desc">${el.describe}</span>   <span class="booker__sign_i">i</span></span> <span class="booker__font">${parseThousand(el.price)}₽</span>`
                card.querySelector(".js-booker__total").insertAdjacentElement("beforebegin", servBlock)
            })
            return servicePrice
        }
    }
}

function parseThousand(int){
    if(int>=1000) return(Math.floor(int/1000) + " " + (int%1000>= 100 ? int%1000 : int%1000>=10 ? "0" + int%1000 : "0" + "0" + int%1000 ) );
    else return int
}

export default initBooker