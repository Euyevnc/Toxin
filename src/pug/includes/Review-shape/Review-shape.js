export default function(){
    let par = document.querySelector(".Review-shape").parentNode
   
    let p = document.createElement("p")
    p.style.position = "absolute"
    p.style.top = "0"
    p.style.right = "0"
    p.style.lineHeight = "15px"
    
    let am = par.querySelectorAll(".Review-shape").length;
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