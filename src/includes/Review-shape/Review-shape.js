//нужно полностью для отзывов конструктор сделать
function initReviews(){
    let par = document.querySelector(".js-review-shape").parentNode
    par.style.position = "relative"
    let p = document.createElement("p")
    p.style.position = "absolute"
    p.style.top = "0"
    p.style.right = "0"
    p.style.fontSize = "14px"
    p.style.lineHeight = "14px"
    p.style.paddingTop = "5px"
    p.style.color = "rgba(31, 32, 65, 0.5)"
    
    let am = par.querySelectorAll(".js-review-shape").length;
    let cas;

    if(am==1||am%10==1){
        cas="отзыв"
    }
    else if(am<5 || am%10<5){
        cas = "отзыва"
    }
    else{
        cas = "отзывов"
    }
    p.textContent = am + " "+ cas

    par.append(p)
}

export default initReviews