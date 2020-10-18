import slider from "../../ImageSlider/ImageSlider.js";

// function getDate(list){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(list), 500)
//     });
// }


export default function(list){
    let cont = document.querySelector('.NumberDemonstration')
    //let info = await getDate(list);

    list.forEach(i=>{
        let firstSlide

        let wrap = document.createElement("div")
        wrap.className = "NumberDemonstrationItem"
        cont.appendChild(wrap)

        let imageCont = document.createElement("div")
        imageCont.className = "NumberDemonstrationImageCont"

        let spanCont = document.createElement('span')
        spanCont.className = "NumberDemonstrationButtons"

        cont.appendChild(wrap)
        wrap.appendChild(imageCont)
        imageCont.appendChild(spanCont)

        i.pictures.forEach((pic, i)=>{
            let image = document.createElement('img')
            image.setAttribute('src', pic )
            let butt = document.createElement("span")
            imageCont.appendChild(image)
            spanCont.appendChild(butt)
            butt.addEventListener('mouseover', e => slider(butt, '.NumberDemonstrationImageCont', 'NumberDemonstrationButton_active'))
            if(i == 0){firstSlide = butt}
        })

        e=>slider(butt, '.NumberDemonstrationImageCont', 'NumberDemonstrationButton_active')

        let price = document.createElement('div')
        price.className = "NumberDemonstrationPrice"
        wrap.appendChild(price)

        let number = document.createElement("span")
        price.appendChild(number)
        number.innerHTML = `<h4>№</h4><h1>&nbsp;${i.number}</h1><p class="CardsPurple">&nbsp;${i.category}</p>`

        let numberPrice = document.createElement("span")
        price.appendChild(numberPrice)
        numberPrice.innerHTML = `<h4 style="color: rgba(31, 32, 65, 0.5)")>${i.price}₽</h4> <h3>&nbsp;в сутки</h3>`


        let rate = document.createElement('div')
        wrap.appendChild(rate)
        rate.className = "NumberDemonstrationRate"

        let stars = document.createElement("span")
        rate.appendChild(stars)
        stars.className = "NumberDemonstrationStars"

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
        resps.innerHTML = `<h4 style="color: rgba(31, 32, 65, 0.5)")>${i.reviews}</h4><h3>&nbsp; отзывов</h3>`

        slider(firstSlide, '.NumberDemonstrationImageCont', 'NumberDemonstrationButton_active')


    })

}


