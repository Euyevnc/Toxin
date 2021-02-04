import createItem from "../Number-demo/Number-demo.js"

function loadPages(list, number, amount, container){
    let area = container || document
    let demoContainer = area.querySelector('.js-numbers-demonstration')
    demoContainer.style.minWidth = demoContainer.offsetWidth +"px"
    demoContainer.style.minHeight = demoContainer.offsetHeight +"px"
    demoContainer.innerHTML = ''
    return new Promise( (resolve, rej)=>{
        setTimeout(e=>{
            demoContainer.style.minWidth = "auto"
            demoContainer.style.minHeight = "auto"
            renderItems(demoContainer, list, number, amount);
            resolve(true)
        }, 300)
    })
    //-Вот такая незатейливая митация задержки при работе с сервером такая-с
}


function renderItems(cont, list, number, amount){
    // let firstNumber = number*amount 
    // let lastNumber = (number+1)*amount - 1
    let firstNumber = 0
    let lastNumber = 11
    for (let n=firstNumber; n<= lastNumber; n++){
        createItem(list[n], cont)
    }
}

export default loadPages