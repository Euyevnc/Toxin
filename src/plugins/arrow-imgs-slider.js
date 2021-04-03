function arrowImgsSlider(data){
    let slider = new ArrowImgsSlider(data)
    slider.init()
    return slider
}

class ArrowImgsSlider{

    constructor({arrowPrev , arrowNext, imgs, buttons, imgDisactiveClass, buttonDisactiveClass}){
        this.arrowPrev = arrowPrev 
        this.arrowNext = arrowNext 
        this.imags = imgs 
        this.buttons = buttons
        this.disactImgClass = imgDisactiveClass
        this.disactBtnClass =  buttonDisactiveClass

    }

    init(){
        let arrowPrev = this.arrowPrev 
        let arrowNext = this.arrowNext
        
        let imgs = this.imags 
        let buttons = this.buttons
        let disactImg  = this.disactImgClass
        let disactBtn = this.disactBtnClass

        let parent = arrowPrev.parentNode
        let currentIndex = 0 
        let length = imgs.length

        arrowPrev.addEventListener("click", handlerArrowPrevClick)
        arrowNext.addEventListener("click", handlerArrowNextClick)
        ///////
        function handlerArrowPrevClick(e){
            let newIndex = currentIndex - 1 
            if(newIndex<0) newIndex = length-1 
    
            imgs.forEach((image, iIndex)=>{
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
    
            imgs.forEach((image, iIndex)=>{
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
}

export default arrowImgsSlider

