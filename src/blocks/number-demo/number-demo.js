import handlerButtonHover from "../buttons-imgs-slider/buttons-imgs-slider";
import handlerArrowClick from "../arrow-imgs-slider/arrow-imgs-slider";

function numberDemo(){
    let demos = []

    document.querySelectorAll(".js-number-demo").forEach((element, index)=>{
        let newDemo = new NumberDemo(element)
        newDemo.init()
        demos.push(newDemo)
    })
    if(demos.length === 1) return demos[0]
    else return demos
}

class NumberDemo{

    constructor(root){
        this.root = root
    }

    init(){
        let root = this.root
        let buttons = this.buttons = root.querySelectorAll(".js-number-demo__button")
        let imgs = this.imgs = root.querySelectorAll(".js-number-demo__image") 
        let arrowPrev = this.arrowPrev = root.querySelector(".js-number-demo__arrow_left")
        let arrowNext = this.arrowNext = root.querySelector(".js-number-demo__arrow_right")

        handlerButtonHover({buttons, imgs, buttonDisactiveClass: 'number-demo__button_disactive', imgDisactiveClass: 'number-demo__image_disactive'})
        handlerArrowClick({arrowPrev, arrowNext, imgs, buttons, imgDisactiveClass: "number-demo__image_disactive", buttonDisactiveClass: "number-demo__button_disactive"})
    }
}

export default numberDemo