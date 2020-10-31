

export default function(el, imgWrap, buttonActiveClass, ImgActiveClass){
    let buttons = Array.from(el.parentNode.children)
    let images = el.closest(imgWrap).querySelectorAll("img")
    buttons.forEach((elem, i) => {

        elem.classList.remove(buttonActiveClass);
        if(elem == el){elem.classList.add(buttonActiveClass)};
        
    });
    images.forEach( (img, imgI) => {
        img.classList.remove(ImgActiveClass)
        if(imgI == buttons.indexOf(el)){
            img.classList.add(ImgActiveClass)
        }
    });
    
    
}