

export default function(el, imgWrap, toggleClass){
    let buttons = Array.from(el.parentNode.children)
    let images = el.closest(imgWrap).querySelectorAll("img")
    buttons.forEach((elem, i) => {

        elem.classList.remove(toggleClass);
        if(elem == el){elem.classList.add(toggleClass)};
        
    });
    images.forEach( (img, imgI) => {
        img.style.display = "none";
        img.style.opacity = "0";
        if(imgI == buttons.indexOf(el)){
            img.style.display="block"
            img.style.opacity = "1";
        }
    });
    
    
}