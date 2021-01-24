import handlerButtonHover from "../../Image-slider-buttons/Image-slider-buttons";
import imageSliderArrows from "../../Image-slider-arrows/Image-slider-arrows";
import { resolve } from "path";
function loadPages(list, number, amount){
    let container = document.querySelector('.js-number-demonstration')
    container.style.minWidth = container.offsetWidth +"px"
    container.style.minHeight = container.offsetHeight +"px"
    container.innerHTML = ''
    return new Promise( (resolve, rej)=>{
        setTimeout(e=>{
            renderItems(list, number, amount);
            resolve(true)
        }, 300)
    })
    //-Вот такая незатейливая митация задержки при работе с сервером такая-с
}


function renderItems(list, number, amount){
    let cont = document.querySelector('.js-number-demonstration')
    cont.innerHTML = ''
    // let firstNumber = number*amount 
    // let lastNumber = (number+1)*amount - 1
    let firstNumber = 0
    let lastNumber = 11
    for (let n=firstNumber; n<= lastNumber; n++){
        createItem(list[n], cont)
    }
}

function createItem(itemData, container){
    let item = document.createElement("div")
    let imageCont = document.createElement("div")
    let spanCont = document.createElement('span')
    let arrowNext = document.createElement('span')

    item.classList.add("number-demonstration__item")
    imageCont.classList.add("number-demonstration__image-cont")
    spanCont.classList.add("number-demonstration__buttons")
    arrowNext.classList.add("number-demonstration__arrow")
    arrowNext.classList.add("material-icons")
    arrowNext.innerHTML= "expand_less"
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

    imageSliderArrows(arrowPrev, arrowNext,"number-demonstration__img_active","number-demonstration__button", "number-demonstration__button_state_active")
    container.appendChild(item)

    /////
    function putThePicture(picture, number){
        let image = document.createElement('img')
        image.setAttribute('src', picture)
        imageCont.appendChild(image)

        let butt = document.createElement("span")
        butt.classList.add("number-demonstration__button")
        spanCont.appendChild(butt)
        butt.addEventListener('mouseover', handlerButtonHover.bind(this, butt, '.number-demonstration__image-cont', 'number-demonstration__button_state_active', "number-demonstration__img_active"))
        if(number == 0){
            handlerButtonHover(butt, '.number-demonstration__image-cont', 'number-demonstration__button_state_active', "number-demonstration__img_active")
        }
    }
    function fillTheSignboards(){
        let price = document.createElement('div')
        price.className = "number-demonstration__price"
        item.appendChild(price)
    
        let number = document.createElement("span")
        price.appendChild(number)
        number.innerHTML = `<h3>№</h3><h2>&nbsp;${itemData.number}</h2><h4>&nbsp;&nbsp;${itemData.category}</h4>`
    
        let numberPrice = document.createElement("span")
        price.appendChild(numberPrice)
        numberPrice.innerHTML = `<h5>${itemData.price}₽</h5> <p>&nbsp;в сутки</p>`
    
    
        let rate = document.createElement('div')
        item.appendChild(rate)
        rate.className = "number-demonstration__rate"
    
        let stars = document.createElement("span")
        stars.className = "number-demonstration__stars"
        rate.appendChild(createStars(stars, itemData.rate))
    
        let resps = document.createElement("span")
        rate.appendChild(resps)
        resps.innerHTML = `<h3>${itemData.reviews}</h3><h4>&nbsp;Отзывов</h4>`
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

export default loadPages