import inputsWithCounter from  "../input-with-counter/input-with-counter.js"
import datePickerDouble from "../date-picker/_double/date-picker_double"

function initBooker({number, category, price, arrival,departure, guests, services}, container){
    let area = container || document
    let bookerContainer = area.querySelector(".js-booker")
    datePickerDouble(arrival, departure, bookerContainer);
    inputsWithCounter(guests, bookerContainer);
    booking()

    function booking(){
        let card = area.querySelector(".js-booker")

        card.querySelectorAll(".js-booker__number").forEach(el=>el.innerHTML = number)
        card.querySelectorAll(".js-booker__category").forEach(el=>el.innerHTML = '&nbsp;&nbsp;&nbsp;' + category)
        card.querySelectorAll(".js-booker__price").forEach(el=>el.innerHTML = price.toLocaleString() + "₽ ")

        let servicesPrice = countService(services)
        countTotal(departure - arrival, servicesPrice)

        card.querySelectorAll(".date-picker_double input").forEach(el=>{
            el.set
            el.onchange = (e)=>{
                let firDate = (card.querySelectorAll(".date-picker_double input")[0].value.split(".")) 
                let secDate = (card.querySelectorAll(".date-picker_double input")[1].value.split(".")) 
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
            card.querySelectorAll(".js-booker__rent-total").forEach(el=>el.textContent = (amount*price).toLocaleString() + "₽")
            let total = card.querySelector(".js-booker__total").lastElementChild
            total.textContent =(Math.max(0, amount*price + servicePrice) ).toLocaleString() + "₽"

        }
        function countService(servicesArray){
            let servicePrice = 0 
            servicesArray.forEach(el=>{
                servicePrice += el.impact 
                if(el.impact < 0) el.describe+=":скидка " + (-el.impact).toLocaleString()+ "₽"
                let servBlock = document.createElement("li")
                servBlock.className = "booker__service"
                servBlock.innerHTML = `<span><span class="booker__service-desc">${el.describe}</span>   <span class="booker__sign_i">i</span></span> <span>${(el.price).toLocaleString()}₽</span>`
                card.querySelector(".js-booker__services").appendChild(servBlock)
            })
            return servicePrice
        }
    }
}

export default initBooker