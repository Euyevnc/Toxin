import ImageSliderButtons from "../../ImageSliderButtons/ImageSlider.js";
import ImageSliderArrows from "../../ImageSliderArrows/ImageSlider.js";
import { resolve } from "path";
export default function(list){
    document.querySelector('.NumberDemonstration').innerHTML = ''
    //-Имитация работы с сервером такая-с
    return new Promise( (resolve, rej)=>{
        setTimeout(e=>{
            load(list);
            resolve("true")
        }, 300)
    } )
}


function load(list){
    let cont = document.querySelector('.NumberDemonstration')
    //let info = await getDate(list);
    list.forEach(i=>{
        let firstSlide

        let wrap = document.createElement("div")
        wrap.className = "NumberDemonstration__item NumberDemonstrationItem"
        cont.appendChild(wrap)

        let imageCont = document.createElement("div")
        imageCont.className = "NumberDemonstrationItem__imageCont"

        let spanCont = document.createElement('span')
        spanCont.className = "NumberDemonstrationItem__buttons"

        let arrowPrev = document.createElement('span')
        arrowPrev.classList.add("NumberDemonstrationItem__arrow")
        arrowPrev.classList.add("material-icons")
        arrowPrev.innerHTML = "expand_more"
        let arrowNext = document.createElement('span')
        arrowNext.classList.add("NumberDemonstrationItem__arrow")
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
            butt.classList.add("NumberDemonstrationItem__button")
            imageCont.appendChild(image)
            spanCont.appendChild(butt)
            butt.addEventListener('mouseover', e => ImageSliderButtons(butt, '.NumberDemonstrationItem__imageCont', 'NumberDemonstrationItem__button_state_active', "activeImg"))
            if(i == 0){firstSlide = butt}
        })
        ImageSliderButtons(firstSlide, '.NumberDemonstrationItem__imageCont', 'NumberDemonstrationItem__button_state_active', "activeImg")
       
        let price = document.createElement('div')
        price.className = "NumberDemonstrationItem__price"
        wrap.appendChild(price)

        let number = document.createElement("span")
        price.appendChild(number)
        number.innerHTML = `<h4>№</h4><h1>&nbsp;${i.number}</h1><p class="UpperPurple">&nbsp;${i.category}</p>`

        let numberPrice = document.createElement("span")
        price.appendChild(numberPrice)
        numberPrice.innerHTML = `<h4 style="color: rgba(31, 32, 65, 0.5)")>${i.price}₽</h4> <h3>&nbsp;в сутки</h3>`


        let rate = document.createElement('div')
        wrap.appendChild(rate)
        rate.className = "NumberDemonstrationItem__rate"

        let stars = document.createElement("span")
        rate.appendChild(stars)
        stars.className = "NumberDemonstrationItem__stars"

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
        resps.innerHTML = `<h4 style="color: rgba(31, 32, 65, 0.5)")>${i.reviews}</h4><h3>&nbsp;отзывов</h3>`

        ImageSliderArrows(arrowPrev, arrowNext,"activeImg","NumberDemonstrationItem__button", "NumberDemonstrationItem__button_state_active")
        
    })

}


