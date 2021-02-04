import handlerButtonHover from "../../Sliders/Image-slider-buttons/Image-slider-buttons";
import imageSliderArrows from "../../Sliders/Image-slider-arrows/Image-slider-arrows";

function createItem(itemData, container){
    let item = document.createElement("article")
    let imageCont = document.createElement("section")
    let spanCont = document.createElement('span')
    let arrowNext = document.createElement('span')

    item.classList.add("number-demo")
    item.tabIndex = 0
    imageCont.classList.add("number-demo__image-cont")
    spanCont.classList.add("number-demo__buttons")
    arrowNext.classList.add("number-demo__arrow")
    arrowNext.classList.add("material-icons")
    arrowNext.innerHTML= "expand_less"
    arrowNext.tabIndex = 0;
    let arrowPrev = arrowNext.cloneNode(true)
    arrowPrev.innerHTML = "expand_more"

    imageCont.appendChild(arrowPrev)
    imageCont.appendChild(arrowNext)
    imageCont.appendChild(spanCont)
    item.appendChild(imageCont)

    itemData.pictures.forEach((picture, indexPicture)=>{
        putThePicture(picture, indexPicture)
    })
    fillTheSignboards()

    imageSliderArrows(arrowPrev, arrowNext,"number-demo__image_active","number-demo__button", "number-demo__button_state_active")
    container.appendChild(item)

    /////
    function putThePicture(picture, number){
        let image = document.createElement('img')
        image.classList.add("number-demo__image")
        image.setAttribute('src', picture)
        imageCont.appendChild(image)

        let butt = document.createElement("span")
        butt.classList.add("number-demo__button")
        spanCont.appendChild(butt)
        butt.addEventListener('mouseover', handlerButtonHover.bind(this, butt, '.number-demo__image-cont', 'number-demo__button_state_active', "number-demo__image_active"))
        if(number == 0){
            handlerButtonHover(butt, '.number-demo__image-cont', 'number-demo__button_state_active', "number-demo__image_active")
        }
    }
    function fillTheSignboards(){
        let price = document.createElement('section')
        price.className = "number-demo__price"
        item.appendChild(price)
    
        let number = document.createElement("span")
        price.appendChild(number)
        number.innerHTML = `<b class="number-demo__font number-demo__font_middle">№</b>
        <strong class="number-demo__font number-demo__font_large">&nbsp;${itemData.number}</strong>
        <strong class="number-demo__font number-demo__font_purple number-demo__font_small number-demo__font_uppercase">&nbsp;${itemData.category}</strong>`
    
        let numberPrice = document.createElement("span")
        price.appendChild(numberPrice)
        numberPrice.innerHTML = `<b class="number-demo__font number-demo__font_grey number-demo__font_middle">${itemData.price}₽</b> 
        <span class="number-demo__font number-demo__font_grey number-demo__font_small">&nbsp;в сутки</span>`
    
    
        let rate = document.createElement('section')
        item.appendChild(rate)
        rate.className = "number-demo__rate"
    
        let stars = document.createElement("span")
        stars.className = "number-demo__stars"
        rate.appendChild(createStars(stars, itemData.rate))
    
        let resps = document.createElement("span")
        rate.appendChild(resps)
        resps.innerHTML = `<b class="number-demo__font number-demo__font_grey number-demo__font_middle">${itemData.reviews}</b>
        <span class="number-demo__font number-demo__font_grey number-demo__font_small">&nbsp;Отзывов</span>`
    }
}

function createStars(starContainer, rate){
    //в UI-kit были звёзды  через pug, но раз решил делать на лету, то пришлось фунцкию создать под эти цели
    let allStars = starContainer
    let filledStars = Math.floor(rate)
    let fillingStar = rate - filledStars
    let emptyStars = (5 - rate)

    for(let i =1; i<=filledStars; i++){
        let star = document.createElement('span')
        allStars.appendChild(star)
        star.className = "rate-stars__star rate-stars__star_colorized"
        star.innerHTML = "star"
    }
    if(fillingStar){
        let perc = fillingStars*100
        let star =  document.createElement('span')
        allStars.appendChild(star)
        star.className = "rate-stars__star rate-stars__star_outlined"
        star.innerHTML = `star_outline <span class="rate-stars__star rate-stars__star_colorized" style='width: ${perc}%'>star</span>`
        
    }
    for(let i=1; i<=emptyStars; i++){
        let star = document.createElement('span')
        allStars.appendChild(star)
        star.className = "rate-stars__star rate-stars__star_outlined"
        star.innerHTML = "star_outlined"
    }
    return allStars
}

export default createItem