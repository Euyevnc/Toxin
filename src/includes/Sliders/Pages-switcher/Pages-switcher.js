import loadPages from "../../Articles/Numbers-demonstration/Numbers-demonstration.js"

function pageSwitcher(list, amountOnPage, isKit, container){  
    //аргумент uiskit нужен, чтобы на ui-kit-е он не переключал те несчастные 2 итема на странице          
    let area = container || document
    let currentPage = 0
    //let totalAmount = list.length 
    let totalAmount = 175
    let switcher = area.querySelector('.js-pages-switcher')
    let subtext = switcher.querySelector('p')

    renderCells(Math.ceil(totalAmount/amountOnPage), area)
    let cells = switcher.querySelectorAll('.js-pages-switcher__cell');
  
    cells.forEach((cell, indx)=>{
        cell.addEventListener('click', handlerSwitcherCellClick)
        cell.addEventListener('keydown', handlerSwitcherCellKeydown)
        //////
        function handlerSwitcherCellClick(click){
            currentPage = indx
            switchPage(cells, indx)
            if(!isKit){
                loadPages(list, indx, amountOnPage).then(n=>{
                    changeSubtext(subtext, +totalAmount, +amountOnPage, indx)
                }) 
            }      
        }
        function handlerSwitcherCellKeydown(tab){
            if(tab.code == "Enter"){           
                currentPage = indx
                switchPage(cells, indx)
                if(!isKit){
                    loadPages(list, indx, amountOnPage).then(n=>{
                        changeSubtext(subtext, +totalAmount, +amountOnPage, indx)
                    }) 
                }  
            }       
        }
    })
    switcher.querySelector('.js-pages-switcher__arrow').addEventListener('click', handlerCellArrowClick) 
    cells[0].click()

    ////
    function handlerCellArrowClick(e){
        let nextPage = currentPage+1
        if(nextPage<=cells.length-1){
            cells[nextPage].click()
        }
    }
}

////////////////
function renderCells(amount, container){
    let cellContainer = container.querySelector(".js-pages-switcher__cell-container")
    for(let i = amount; i>=1; i--){
        let cell = document.createElement("span")
        cell.classList = "pages-switcher__cell js-pages-switcher__cell"
        cell.textContent = i;
        cell.tabIndex = 0;
        cellContainer.insertAdjacentElement('afterbegin', cell)
    }
}

function switchPage(arrOfCell, active){
    let pagesContainer = arrOfCell[0].parentElement;
    pagesContainer.querySelectorAll('.pages-switcher__cell_ell').forEach(item=>{item.remove()})

    let ellipse = document.createElement("span");
    ellipse.classList.add('pages-switcher__cell_ell');
    ellipse.textContent = '...'
    let ellipse2 = ellipse.cloneNode(true)
    

    arrOfCell.forEach((cl, ind)=>{
        if( ind==0 || ind == arrOfCell.length-1){cl.style.display = 'inline-block'}

        else if(ind==active || ind == active-1){cl.style.display = 'inline-block'}

        else if(ind== active+1 ){cl.style.display = 'inline-block'}

        else if(ind==2 && active==0){cl.style.display = 'inline-block'}

        else if(ind==arrOfCell-1 && ind == arrOfCell-3){cl.style.display = 'inline-block'}

        else cl.style.display = 'none'

        cl.classList.remove('pages-switcher__cell_active');
    })  
    
    pagesContainer.children[active].classList.add('pages-switcher__cell_active')

    if(active>2){
        pagesContainer.insertBefore(ellipse, pagesContainer.children[1]);
    }

    if(active<arrOfCell.length-3){
        pagesContainer.insertBefore(ellipse2, pagesContainer.children[pagesContainer.children.length-1])
    } 
}

function changeSubtext(textContainer, totalAmount, amountOnPage, pagenumber){
    let total = totalAmount;
    if (total>100){total= "100+"}
    textContainer.innerHTML = pagenumber*amountOnPage+1 + " - " + (pagenumber+1)*(+amountOnPage) + " из " + total + " вариантов аренды";
}
export default pageSwitcher