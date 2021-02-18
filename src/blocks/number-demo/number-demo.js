import handlerButtonHover from "../buttons-imgs-slider/buttons-imgs-slider";
import imageSliderArrows from "../arrow-imgs-slider/arrow-imgs-slider";

function initDemo(container){
    let area = document || container
    area.querySelectorAll(".number-demo").forEach( (it, ind) => {
        let buttons = it.querySelectorAll(".number-demo__button")
        let images = it.querySelectorAll(".number-demo__image") 
        let arrowPrev = it.querySelector(".number-demo__arrow_left")
        let arrowNext = it.querySelector(".number-demo__arrow_right")
        handlerButtonHover(buttons, images, 'number-demo__button_disactive', 'number-demo__image_disactive')
        imageSliderArrows(arrowPrev, arrowNext,images, buttons, "number-demo__image_disactive","number-demo__button_disactive")
    })
}

export default initDemo