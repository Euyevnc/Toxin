import inputsWithCounter from  "../input-with-counter/input-with-counter.js"
import doubleDatePicker from "../double-date-picker/double-date-picker"


function booker(){
    inputsWithCounter()
    doubleDatePicker()
    let bookers = []
    document.querySelectorAll(".js-booker").forEach((element)=>{
        let newBooker = new Booker(element)
        newBooker.init()
        bookers.push(newBooker)
    })
    if(bookers.length === 1) return bookers[0]
    else return bookers
}
class Booker{

    constructor(root){
        this.root = root
        this.arrival = 4
        this.departure = 8
    }

    init(){
        doubleDatePicker();
        inputsWithCounter();

        let object = this
        let root = this.root
        let number = this.number = root.querySelector(".js-booker__number").dataset.number
        let category = this.category = root.querySelector(".js-booker__category").dataset.category
        
        let price = this.price = +root.querySelector(".js-booker__price").dataset.price
        let services = this.services = extractServicesObject()
        let servicePrice = this.servicePrice = countService()

        countTotal(this.departure - this.arrival)
        root.querySelectorAll(".js-booker__number").forEach(el=>el.textContent = number)
        root.querySelectorAll(".js-booker__category").forEach(el=>el.textContent = "   " + category)
        root.querySelectorAll(".js-booker__price").forEach(el=>el.textContent = price.toLocaleString() + "₽")

        root.querySelectorAll(".js-double-date-picker input").forEach(input=>{
            input.addEventListener("ondateselect", handlerInputChange)
        })

        //////
        function handlerInputChange(e){
            let arrival = new Date(e.detail.startDate)
            let departure = new Date(e.detail.endDate)

            let days = (departure - arrival)/(24*3600000)
            countTotal(days)
        }

        function countTotal(amount){
            let word
            if(amount%10==1) word = "сутки"
            else if(amount%10>=2 && amount%10<=4 ) word = "суток"
            else word = "суток"

            root.querySelectorAll(".js-booker__amount").forEach(el=>el.textContent = amount + " " + word)
            root.querySelectorAll(".js-booker__rent-total").forEach(el=>el.textContent = (amount*price).toLocaleString() + "₽")
            let total = root.querySelector(".js-booker__total").lastElementChild
            object.totalPrice = total
            total.textContent =(Math.max(0, amount*price + servicePrice) ).toLocaleString() + "₽"

        }
        function countService(){
            let servicePrice = 0 
            services.forEach(el=>{
                if(el.describe){
                    servicePrice += el.impact 
                    if(el.impact < 0)el.describe+=": скидка " + (-el.impact).toLocaleString()+ "₽"
                    let servBlock = document.createElement("li")
                    servBlock.className = "booker__service"
                    servBlock.innerHTML = `<span class="booker__service-desc">${el.describe}</span><span class="booker__sign_i">i</span><span class="booker__service-price">${Math.max(el.impact, 0).toLocaleString()}₽</span>`
                    root.querySelector(".js-booker__services").appendChild(servBlock)
                }
            })
            return servicePrice
        }

        function extractServicesObject(){
            let services = []
            let prices = root.querySelector(".js-booker__services").dataset.price.split(', ')
            root.querySelector(".js-booker__services").dataset.desc.split(', ').forEach((elem, index, array)=>{
                let newService = {
                    impact: +prices[index],
                    describe: elem
                }
                services.push(newService)
            })
            return services
            
        }
    }
}

export default booker