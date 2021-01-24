function activateBurger(container){
    let area = container || document 
    
    area.querySelectorAll(".js-header__burger").forEach(it=>{
        it.addEventListener("click", handlerBurgerClick)
    })

    //////
    function handlerBurgerClick(click){
        let burger = click.target.closest(".js-header__burger")
        let menu = burger.closest(".header").querySelector(".js-header__menu")
        burger.classList.toggle("header__burger_cond_active")
        menu.style.visibility = getComputedStyle(menu).visibility == "hidden" ? "visible" : "hidden"
        window.addEventListener('resize', handlerWindowResize)

        ////
        function handlerWindowResize(event){
            if(document.documentElement.clientWidth> 650){
                menu.style.visibility = "visible"
                burger.classList.remove("header__burger_cond_active")
        
            }
            else if(document.documentElement.clientWidth<=650){
                menu.style.visibility = "hidden"
                burger.classList.remove("header__burger_cond_active")
            }
        }
    }
}
export default activateBurger