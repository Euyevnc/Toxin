export default function(){
    let par = document.querySelector(".review-shape").parentNode
    par.style.position = "relative"
    let p = document.createElement("p")
    p.style.position = "absolute"
    p.style.top = "0"
    p.style.right = "0"
    p.style.fontSize = "14px"
    p.style.lineHeight = "14px"
    p.style.paddingTop = "5px"
    p.style.color = "rgba(31, 32, 65, 0.5)"
    
    let am = par.querySelectorAll(".review-shape").length;
    let cas;
    if(am==0|| am%10==0||am>4||am%10>4){
        cas = "отзывов"
    }
    if(am==1||am%1==1){
        cas="отзыв"
    }
    else{
        cas = "отзыва"
    }
    p.textContent = am + " "+ cas

    par.append(p)
}   