import initMenu from  "../menu/menu.js"
import initBurger from "../burger/burger.js"
function initHeader(){
    initMenu()
    initBurger({menuSelector: ".js-menu", activeClass: 'menu_expanded'})
}

export default initHeader