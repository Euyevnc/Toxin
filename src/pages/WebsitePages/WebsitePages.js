import "../../layout/layout-for-hotel.js"
import uiKit from"../UI-kit/UI-kit.js"
import "./WebsitePages.scss";

document.addEventListener("DOMContentLoaded", init)

function init(){
    let uiContainer = document.querySelector(".ui-demonstrate");
    let pagesContainer = document.querySelector(".linksDemonstrate")
    let uiButton = document.querySelector(".ui-button");
    let pagesButton = document.querySelector(".site-pages-button")

    
    uiButton.addEventListener("click", handlerKitButtonClick)
    pagesButton.addEventListener("click", handlerPagesButtonClick)
    uiKit()

    ////////
    function handlerKitButtonClick(e){
        if(uiButton.classList.contains("actived") ) return 
        uiContainer.style.display = "block"
        pagesContainer.style.display = "none"
        pagesButton.classList.remove("actived")
        uiButton.classList.add("actived")
    }
    function handlerPagesButtonClick(e){
        if(pagesButton.classList.contains("actived") ) return 
        pagesContainer.style.display = "flex"
        uiContainer.style.display = "none"
        uiButton.classList.remove("actived")
        pagesButton.classList.add("actived")
    }
}