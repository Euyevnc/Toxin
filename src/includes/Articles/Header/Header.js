import Header__menu from  "../Menu/Menu.js"
import Burger from "./Header__burger/Header__burger.js"
function initHeader(){
    Header__menu()
    Burger(null, 'header__menu_expanded')
}

export default initHeader