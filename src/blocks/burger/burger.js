function activateBurger(menuSelector, addedClass, container){
    let area = container || document 
    area.querySelector(".js-burger").addEventListener("click", handlerBurgerClick)

    //////
    function handlerBurgerClick(click){
        let burger = click.target.closest(".js-burger")
        let menu = area.querySelector(menuSelector)
        
        burger.classList.toggle("burger_cond_active")
        menu.classList.toggle(addedClass)
    }
}
export default activateBurger