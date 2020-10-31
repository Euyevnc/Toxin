let BurgerFirstTimeChecking = true

export default function(){
    document.querySelectorAll(".Header__burger").forEach(it=>{
        let menu = it.parentNode.querySelector(".Menu")
        it.addEventListener("click", e=>{
            it.classList.toggle("Header__burger_cond_active")
            menu.style.visibility = getComputedStyle(menu).visibility == "hidden" ? "visible" : "hidden"
            if(BurgerFirstTimeChecking){
                
                window.addEventListener('resize', ev=>{
                    if(document.documentElement.clientWidth> 600){
                        menu.style.visibility = "visible"
                        try{it.classList.remove("Header__burger_cond_active")}
                        catch{}
                    }
                    else if(document.documentElement.clientWidth<=600){
                        menu.style.visibility = "hidden"
                        try{it.classList.remove("Header__burger_cond_active")}
                        catch{}
                    }
                })
                BurgerFirstTimeChecking = false
            }

        })
    })
}