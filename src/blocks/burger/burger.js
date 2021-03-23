function burger(data){
    let element = new Burger(document.querySelector(".js-burger"), data.menuSelector, data.activeClass )
    element.init()
    return element
}
class Burger{
    constructor(root, menuSelector, activeClass){
        this.root = root 
        this.menuSelector = menuSelector
        this.activeClass = activeClass
    }
    init(){
        let root = this.root 
        let menuSelector = this.menuSelector 
        let activeClass = this.activeClass
        let menu = this.menu = document.querySelector(menuSelector)
        
        this.root.addEventListener("click", handlerBurgerClick)

        function handlerBurgerClick(click){
            
            root.classList.toggle("burger_cond_active")
            menu.classList.toggle(activeClass)
        }
    }
}

export default burger
