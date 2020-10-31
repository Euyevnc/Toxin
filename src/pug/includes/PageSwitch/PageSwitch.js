export default function(func, cont){
    let pars = document.querySelectorAll('.PageSwitch-cont')
    pars.forEach(i=>{
        cont.style.position = "relative"
        let subtext = i.querySelector('p')
        let cells = i.querySelectorAll('.PageSwitch-cell');
        cells.forEach((cell, indx)=>{
            
            cell.addEventListener('click', e=>{
                switchPage(cells, indx)
                cont.style.minWidth = cont.offsetWidth +"px"
                cont.style.minHeight = cont.offsetHeight +"px"
                i.parentNode.style.position = "absolute"
                i.parentNode.style.bottom = "0"
                func().then(n=>{
                    i.parentNode.style.position = "static"
                    cont.style.minWidth = "auto"
                    cont.style.minHeight = "auto"
            
                    let total = i.dataset.totalamount;
                    if (total>100){total= "100+"}
                    let pageamount = i.dataset.amountonpage
                    subtext.textContent =(indx+1)*(+pageamount) -11 + " - " + (indx+1)*(+pageamount) + " из " + total + " вариантов аренды";
                })
 
            })
        })

        i.querySelector('.PageSwitch-arrow').addEventListener('click', e=>{switchPage(cells, cells.length-1)})  
        i.querySelector('.PageSwitch-arrow').addEventListener('click', e=>{
            let total = i.dataset.totalamount;
            if (total>100){total= "100+"}
            let pageamount = i.dataset.amountonpage
            subtext.textContent =(cells.length)*(+pageamount) -11 + " - " + (cells.length)*(+pageamount) + " из " + total + " вариантов аренды";
        })
        cells[0].click()

    })

}


function switchPage(arr, indx){
    let cont = arr[0].parentElement;
    cont.querySelectorAll('.PageSwitch-cell-ell').forEach(item=>{item.remove()})

    let ellipse = document.createElement("span");
    ellipse.classList.add('PageSwitch-cell-ell');
    ellipse.textContent = '...'
    let ellipse2 = ellipse.cloneNode(true)
    

    arr.forEach((cl, ind)=>{
        if (ind !== 0 && ind !== indx-1 && ind !== indx && ind !== indx+1 && ind !== arr.length-1 && !(ind==2 && indx == 0)  && !(ind== arr.length-3 && indx ==  arr.length-1)){
            cl.style.display = 'none'
        }
        else {cl.style.display = 'inline-block'}
        cl.classList.remove('PageSwitch-cell-active');
    })  
    
    cont.children[indx].classList.add('PageSwitch-cell-active')

    if(indx>2){
        cont.insertBefore(ellipse, cont.children[1]);
    }

    if(indx<arr.length-3){
        cont.insertBefore(ellipse2, cont.children[cont.children.length-1])
    } 

}
    
