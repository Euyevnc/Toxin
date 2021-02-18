import initMenu from  "../menu/menu.js"
import initBurger from "../burger/burger.js"
function initHeader(){
    initMenu()
    initBurger(".js-menu", 'menu_expanded')
}

export default initHeader