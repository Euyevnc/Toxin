function initArrowSlide(arrowPrev,arrowNext, images, buttons, disactImg, disactBtn){
    arrowPrev.addEventListener("click", handlerArrowPrevClick)
    arrowNext.addEventListener("click", handlerArrowNextClick)

    //////
    let parent = arrowPrev.parentNode
    let currentIndex = 0 
    let length = images.length

    function handlerArrowPrevClick(e){
        let newIndex = currentIndex - 1 
        if(newIndex<0) newIndex = length-1 

        images.forEach((image, iIndex)=>{
            if(iIndex == newIndex){
                image.classList.remove(disactImg)
                buttons[iIndex].classList.remove(disactBtn)
            }
            else{
                image.classList.add(disactImg)
                buttons[iIndex].classList.add(disactBtn)
            }
        })

        currentIndex = newIndex
    }

    function handlerArrowNextClick(e){
        let newIndex = currentIndex + 1 
        if(newIndex>=length) newIndex = 0

        images.forEach((image, iIndex)=>{
            if(iIndex == newIndex){
                image.classList.remove(disactImg)
                buttons[iIndex].classList.remove(disactBtn)
            }
            else{
                image.classList.add(disactImg)
                buttons[iIndex].classList.add(disactBtn)
            }
        })
        
        currentIndex = newIndex
    }
}

export default initArrowSlide

