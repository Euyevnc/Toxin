function initArrowSlide(arrowPrev,arrowNext, actImg, Btns, actBtn){
    arrowPrev.addEventListener("click", handlerArrowPrevClick)
    arrowNext.addEventListener("click", handlerArrowNextClick)

    //////
    function handlerArrowPrevClick(e){
        let arr = e.target.parentNode.querySelectorAll("img")
        let activeNumber= [...arr].indexOf(e.target.parentNode.querySelector(`.${actImg}`) )
        let rathNumber = (activeNumber-1 == -1) ?  arr.length-1 :  activeNumber-1
        arr.forEach((img,i)=>{
            i == rathNumber ? img.classList.add(actImg) : img.classList.remove(actImg)
        })
        let arrButt = e.target.parentNode.querySelectorAll(`.${Btns}`)
        arrButt.forEach((btn, btnN) => {
            btnN == rathNumber ? btn.classList.add(actBtn) : btn.classList.remove(actBtn)
        })
    }

    function handlerArrowNextClick(e){
        let arr = e.target.parentNode.querySelectorAll("img")
        let activeNumber= [...arr].indexOf(e.target.parentNode.querySelector(`.${actImg}`) )
        let rathNumber = (activeNumber+1 == arr.length) ?  0 :  activeNumber+1
        arr.forEach((img,i)=>{
            i == rathNumber ? img.classList.add(actImg) : img.classList.remove(actImg)
        })

        let arrButt = e.target.parentNode.querySelectorAll(`.${Btns}`)
        arrButt.forEach((btn, btnN) => {
            btnN == rathNumber ? btn.classList.add(actBtn) : btn.classList.remove(actBtn)
        })
    }
}

export default initArrowSlide

