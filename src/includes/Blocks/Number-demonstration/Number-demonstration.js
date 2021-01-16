import ImageSliderButtons from "../../Image-slider-buttons/Image-slider-buttons";
import ImageSliderArrows from "../../Image-slider-arrows/Image-slider-arrows";
import { resolve } from "path";
export default function(list){
    document.querySelector('.number-demonstration').innerHTML = ''
    //-Имитация работы с сервером такая-с
    return new Promise( (resolve, rej)=>{
        setTimeout(e=>{
            load(list);
            resolve("true")
        }, 300)
    } )
}


function load(list){
    let cont = document.querySelector('.number-demonstration')
    //let info = await getDate(list);
    list.forEach(i=>{
        let firstSlide

        let wrap = document.createElement("div")
        wrap.className = "number-demonstration__item"
        cont.appendChild(wrap)

        let imageCont = document.createElement("div")
        imageCont.className = "number-demonstration__image-cont"

        let spanCont = document.createElement('span')
        spanCont.className = "number-demonstration__buttons"

        let arrowPrev = document.createElement('span')
        arrowPrev.classList.add("number-demonstration__arrow")
        arrowPrev.classList.add("material-icons")
        arrowPrev.innerHTML = "expand_more"
        let arrowNext = document.createElement('span')
        arrowNext.classList.add("number-demonstration__arrow")
        arrowNext.classList.add("material-icons")
        arrowNext.innerHTML= "expand_less"



        cont.appendChild(wrap)
        wrap.appendChild(imageCont)
        imageCont.appendChild(spanCont)
        imageCont.appendChild(arrowNext)
        imageCont.appendChild(arrowPrev)

        i.pictures.forEach((pic, i)=>{
            let image = document.createElement('img')
            image.setAttribute('src', pic)
            let butt = document.createElement("span")
            butt.classList.add("number-demonstration__button")
            imageCont.appendChild(image)
            spanCont.appendChild(butt)
            butt.addEventListener('mouseover', e => ImageSliderButtons(butt, '.number-demonstration__image-cont', 'number-demonstration__button_state_active', "number-demonstration__img_active"))
            if(i == 0){firstSlide = butt}
        })
        ImageSliderButtons(firstSlide, '.number-demonstration__image-cont', 'number-demonstration__button_state_active', "number-demonstration__img_active")
       
        let price = document.createElement('div')
        price.className = "number-demonstration__price"
        wrap.appendChild(price)

        let number = document.createElement("span")
        price.appendChild(number)
        number.innerHTML = `<h3>№</h3><h2>&nbsp;${i.number}</h2><h4>&nbsp;&nbsp;${i.category}</h4>`

        let numberPrice = document.createElement("span")
        price.appendChild(numberPrice)
        numberPrice.innerHTML = `<h5>${i.price}₽</h5> <p>&nbsp;в сутки</p>`


        let rate = document.createElement('div')
        wrap.appendChild(rate)
        rate.className = "number-demonstration__rate"

        let stars = document.createElement("span")
        rate.appendChild(stars)
        stars.className = "number-demonstration__stars"

        let filled = Math.floor(i.rate);

        for(let i =1; i<=filled; i++){
            let filledStar = document.createElement('span')
            stars.appendChild(filledStar)
            filledStar.className = "filling-star_color"
            filledStar.innerHTML = "star"
        }

        if(filled < 5){
            let perc = +((i.rate - filled)*100)
            let lastStar = document.createElement('span')
            stars.appendChild(lastStar)
            lastStar.className = "filling-star_outl"
            lastStar.innerHTML = `star_outline <span class="filling-star_color" style='width: ${perc}%'>star</span>`
                for(let i =1; i<=(5-(filled+1) ); i++){
                    let emptyStar = document.createElement('span')
                    stars.appendChild(emptyStar)
                    emptyStar.className = "filling-star_outl"
                    emptyStar.innerHTML = `star_outline`
            }
        }

        let resps = document.createElement("span")
        rate.appendChild(resps)
        resps.innerHTML = `<h3>${i.reviews}</h3><h4>&nbsp;Отзывов</h4>`

        ImageSliderArrows(arrowPrev, arrowNext,"number-demonstration__img_active","number-demonstration__button", "number-demonstration__button_state_active")
        
    })

}


