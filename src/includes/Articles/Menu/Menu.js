function initMenu(container){
    let area = container || document
    area.querySelectorAll(".js-menu__submenu").forEach(it=>{
        it.closest('.js-menu__element').addEventListener("click", handlerElementTypeDroppingClick)
    })
}

function handlerElementTypeDroppingClick(click){
    let element = click.target.closest('.js-menu__element') 
    let submenu = element.querySelector(".js-menu__submenu")

    element.classList.toggle("menu__element_active")
    submenu.classList.toggle("menu__submenu_active")
    element.querySelector(".arrow-down").textContent =  element.classList.contains("menu__element_active") ?
    'expand_less'
    : 
    'expand_more'
}

export default initMenu