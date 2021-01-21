

export default function(){
    document.querySelectorAll(".menu__element_type_dropping").forEach(it=>{
        it.addEventListener("click", e=>{
            it.classList.add("menu__element_type_dropping-active")
            let menu = it.querySelector(".menu__element_type_submenu")
            menu.classList.add("menu__element_type_submenu-active")
            it.querySelector(".arrow-down i").textContent = 'expand_less'
            document.addEventListener("click", close, {capture: true, once:true})
            
        })
    })
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