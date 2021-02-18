function initButtonSlide(buttons, imgs, buttonDisactiveClass, imgDisactiveClass){
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


export default initButtonSlide