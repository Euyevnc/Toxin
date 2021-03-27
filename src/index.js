import "./layout/layout-for-hotel.js"
import uiKit from "./UI-kit/UI-kit.js"
import "./index.scss";
document.addEventListener("DOMContentLoaded", init)

function init(){
    let buttons = document.querySelectorAll(".js-switcher")
    let sections = document.querySelectorAll("section.section")
    buttons.forEach((but, butI)=>{
        but.addEventListener("click", handlerSwitcherClick)
        function handlerSwitcherClick(e){
            if(but.classList.contains("actived") ) return 
            buttons.forEach((el)=>{
                el.classList.remove("actived")
            })
            but.classList.add("actived")

            sections.forEach((sec)=>{
                sec.style.display = "none";
            })
            sections[butI].style.display = "flex";
        }
    })
    if(window.location.hash == '#slider'){
        buttons[2].click()
    }
    else buttons[0].click()

    uiKit()
}