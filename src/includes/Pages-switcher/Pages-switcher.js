export default function(func, cont){
    let pars = document.querySelectorAll('.pages-switcher')
    pars.forEach(i=>{
        let current = 0
        cont.style.position = "relative"
        let subtext = i.querySelector('p')
        let cells = i.querySelectorAll('.pages-switcher__cell');
        cells.forEach((cell, indx)=>{
            cell.addEventListener('click', e=>{
                current = indx
                switchPage(cells, indx)
                if(func){
                    cont.style.minWidth = cont.offsetWidth +"px"
                    cont.style.minHeight = cont.offsetHeight +"px"
                    i.parentNode.style.position = "absolute"
                    i.parentNode.style.bottom = "0"
                    func().then(n=>{
                        i.parentNode.style.position = "relative"
                        cont.style.minWidth = "auto"
                        cont.style.minHeight = "auto"
                    })
                }
                
                let total = i.dataset.totalamount;
                if (total>100){total= "100+"}
                let pageamount = i.dataset.amountonpage
                subtext.textContent =(indx+1)*(+pageamount) -11 + " - " + (indx+1)*(+pageamount) + " из " + total + " вариантов аренды";
            })
        })

        i.querySelector('.pages-switcher__arrow').addEventListener('click', e=>{
            let nextPage = current+1
            if(nextPage<=cells.length-1){
                cells[nextPage].click()
            }
        })  
        cells[0].click()
    })

}


function switchPage(arr, indx){
    let cont = arr[0].parentElement;
    cont.querySelectorAll('.pages-switcher__cell_ell').forEach(item=>{item.remove()})

    let ellipse = document.createElement("span");
    ellipse.classList.add('pages-switcher__cell_ell');
    ellipse.textContent = '...'
    let ellipse2 = ellipse.cloneNode(true)
    

    arr.forEach((cl, ind)=>{
        if (ind !== 0 && ind !== indx-1 && ind !== indx && ind !== indx+1 && ind !== arr.length-1 && !(ind==2 && indx == 0)  && !(ind== arr.length-3 && indx ==  arr.length-1)){
            cl.style.display = 'none'
        }
        else {cl.style.display = 'inline-block'}
        cl.classList.remove('pages-switcher__cell_active');
    })  
    
    cont.children[indx].classList.add('pages-switcher__cell_active')

    if(indx>2){
        cont.insertBefore(ellipse, cont.children[1]);
    }

    if(indx<arr.length-3){
        cont.insertBefore(ellipse2, cont.children[cont.children.length-1])
    } 

}
    
