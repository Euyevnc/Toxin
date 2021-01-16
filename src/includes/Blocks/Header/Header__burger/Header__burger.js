let BurgerFirstTimeChecking = true

export default function(){
    document.querySelectorAll(".header__burger").forEach(it=>{
        let menu = it.parentNode.querySelector(".header__menu")
        it.addEventListener("click", e=>{
            it.classList.toggle("header__burger_cond_active")
            menu.style.visibility = getComputedStyle(menu).visibility == "hidden" ? "visible" : "hidden"
            if(BurgerFirstTimeChecking){
                
                window.addEventListener('resize', ev=>{
                    if(document.documentElement.clientWidth> 600){
                        menu.style.visibility = "visible"
                        try{it.classList.remove("header__burger_cond_active")}
                        catch{}
                    }
                    else if(document.documentElement.clientWidth<=600){
                        menu.style.visibility = "hidden"
                        try{it.classList.remove("header__burger_cond_active")}
                        catch{}
                    }
                })
                BurgerFirstTimeChecking = false
            }

        })
    })
}