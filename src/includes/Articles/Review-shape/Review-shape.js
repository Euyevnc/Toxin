//нужно полностью для отзывов конструктор сделать
function initReviews(data, container){ 
    let area = container || document
    let reviewsCont = area.querySelector(".js-review").parentNode
    let template = reviewsCont.querySelector(".js-review")

    data.reviews.forEach( (item, index)=>{
        reviewsCont.append( constructReview(template, item, data.likedReviews) )
    })
    template.remove()
    createCounter(reviewsCont, data.reviews)

}

////
function constructReview(template, reviewData, likedReviews){
    let newReview = template.cloneNode(true)
    let isLiked = likedReviews.includes(reviewData.id)

    fillTheAvatar(newReview, reviewData)
    fillTheInfo(newReview, reviewData)
    fillTheArticle(newReview, reviewData)
    fillTheLiker(newReview, reviewData, isLiked)
    return newReview
}

function fillTheAvatar(reviewCont, reviewData){
    let avatarCont = reviewCont.querySelector(".review__avatar")
    let avatar = new Image()
    avatar.src = reviewData.avatar
    avatarCont.append(avatar)    
}

function fillTheInfo(reviewCont, reviewData){
    let nameCont = reviewCont.querySelector(".review__name")
    nameCont.textContent = reviewData.name

    let dateCont = reviewCont.querySelector(".review__days-ago")
    let daysAgo = calcPassedDays(reviewData.date)
    dateCont.textContent = formTimePassedString(daysAgo)
}

function fillTheArticle(reviewCont, reviewData){
    let articleCont = reviewCont.querySelector(".review__content")
    articleCont.textContent = reviewData.content
}

function fillTheLiker(reviewCont, reviewData, isLiked){
    let likerCheckbox = reviewCont.querySelector(".button-liker__box")
    let likerLabel = reviewCont.querySelector(".button-liker__label")

    likerCheckbox.setAttribute('id', 'liker' + reviewData.id)
    likerLabel.setAttribute('for', 'liker' + reviewData.id)
    likerLabel.textContent = reviewData.likes

    if(isLiked) likerCheckbox.setAttribute('checked', true)
}

function createCounter(reviewsCont, data){
    let amount = data.length
    let counter = document.createElement("span")
    counter.classList.add("review__reviews-counter")

    let word;
    if(amount==1||amount%10==1){
        word="отзыв"
    }
    else if(amount<5 || amount%10<5){
        word = "отзыва"
    }
    else{
        word = "отзывов"
    }
    counter.textContent = amount + " " + word
    reviewsCont.style.position = "relative"
    reviewsCont.append(counter)
}

function formTimePassedString(number){
    let dateAgo = number
    let wordForDate

    if(number<7){
        if (number<=1) wordForDate = "день"
        else if(number<5) wordForDate = "дня" 
        else wordForDate = "дней"
    }
    else if(number<25){
        dateAgo = Math.round(number/7)
        if(dateAgo == 1) wordForDate = "неделя"
        else wordForDate = "недели"
    }
    else if(number<360){
        dateAgo = Math.round(number/30)
        if (dateAgo==1) wordForDate = "месяц"
        else if(dateAgo<5) wordForDate = "месяца" 
        else wordForDate = "месяцев"
    }
    else{
        dateAgo = Math.round(number/360)
        if(dateAgo % 100 >=11 && dateAgo%100 <= 14 ) wordForDate = "лет"
        else if(dateAgo==1 || dateAgo%10 == 1) wordForDate = "год"
        else if(dateAgo<5 || dateAgo%10 < 5) wordForDate = "года" 
        else wordForDate = "лет"
    }

    return(dateAgo + " " + wordForDate + " назад")
}

function calcPassedDays(date){
    let daysAgo = Math.round( (Date.now() - date)/(24*3600*1000 ) )
    return daysAgo
}
export default initReviews