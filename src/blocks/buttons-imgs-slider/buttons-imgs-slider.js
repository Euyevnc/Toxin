function buttonsImgsSlider(data){
    let slider = new ButtonsImgsSlider(data)
    slider.init()
    return slider
}

class ButtonsImgsSlider{

    constructor({ buttons, imgs, buttonDisactiveClass, imgDisactiveClass }){
        this.buttons = buttons
        this.imags = imgs 
        this.disactImgClass = imgDisactiveClass
        this.disactBtnClass =  buttonDisactiveClass
    }
    init(){
        let imgs = this.imags 
        let buttons = this.buttons
        let imgDisactiveClass  = this.disactImgClass
        let buttonDisactiveClass = this.disactBtnClass

        buttons.forEach((button, bIndex) => {
            button.addEventListener("mouseover", buttonHoverListener)
            function buttonHoverListener(event){
        
                imgs.forEach((image, iIndex)=>{
                    if(iIndex==bIndex) image.classList.remove(imgDisactiveClass)
                    else image.classList.add(imgDisactiveClass)
                })
                buttons.forEach((el)=>{
                    el.classList.add(buttonDisactiveClass)
                })
                button.classList.remove(buttonDisactiveClass)
            } 
    
        });
    }
    
}




export default buttonsImgsSlider