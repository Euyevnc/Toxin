function activateBurger(container, addedClass){
    let area = container || document 
    area.querySelector(".js-header__burger").addEventListener("click", handlerBurgerClick)

    //////
    function handlerBurgerClick(click){
        let burger = click.target
        let menu = burger.closest(".js-header").querySelector(".js-header__menu")
        burger.classList.toggle("header__burger_cond_active")
        menu.classList.toggle(addedClass)
    }
}
export default activateBurger