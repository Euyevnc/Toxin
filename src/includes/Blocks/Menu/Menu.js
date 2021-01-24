

function initMenu(container){
    let area = container || document
    area.querySelectorAll(".js-menu__element_type_dropping").forEach(it=>{
        it.addEventListener("click", handlerElementTypeDroppingClick)
    })
}

function handlerElementTypeDroppingClick(click){
    let element = click.target.closest(".js-menu__element_type_dropping")
    let submenu = element.querySelector(".js-menu__element_type_submenu")

    element.classList.add("menu__element_type_dropping-active")
    submenu.classList.add("menu__element_type_submenu-active")
    element.querySelector(".arrow-down i").textContent = 'expand_less'

    document.addEventListener("click", close, {capture: true, once:true})
}

function close(e){
    let par = e.target
    if (!par.closest("menu__element_type_submenu-active" ) ){
        document.querySelector(".menu__element_type_dropping-active .arrow-down i").textContent = 'expand_more'
        document.querySelector(".menu__element_type_dropping-active").classList.remove("menu__element_type_dropping-active")
        document.querySelector(".menu__element_type_submenu-active").classList.remove("menu__element_type_submenu-active")
        e.stopPropagation()
    }
}
export default initMenu