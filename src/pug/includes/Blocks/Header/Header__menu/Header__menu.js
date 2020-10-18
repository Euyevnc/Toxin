

export default function(){
    document.querySelectorAll(".Menu__element_type_dropping").forEach(it=>{
        it.addEventListener("click", e=>{
            it.classList.add("Menu__element_type_dropping-active")
            let menu = it.querySelector(".Menu__element_type_submenu")
            menu.classList.add("Menu__element_type_submenu-active")
            it.querySelector(".arrow-down i").textContent = 'expand_less'
            document.addEventListener("click", close, {capture: true, once:true})
            
        })
    })
}

function close(e){
    
    let par = e.target
    if (!par.closest("Menu__element_type_submenu-active" ) ){
        document.querySelector(".Menu__element_type_dropping-active .arrow-down i").textContent = 'expand_more'
        document.querySelector(".Menu__element_type_dropping-active").classList.remove("Menu__element_type_dropping-active")
        document.querySelector(".Menu__element_type_submenu-active").classList.remove("Menu__element_type_submenu-active")
        e.stopPropagation()
    }
}