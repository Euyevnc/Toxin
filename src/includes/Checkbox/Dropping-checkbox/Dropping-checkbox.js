export default function(expend, container){
    let expanded = Boolean(expend)
    let area = container || document 
    area.querySelectorAll('.dropping-checkboxes').forEach(checkbox=>{
        let icon = checkbox.querySelector('i.material-icons')
        let menu = checkbox.querySelector(".dropping-checkboxes__container")

        checkbox.querySelector(".dropping-checkboxes__header").addEventListener('click', handlerHeaderClick)
        if(expanded) {
            menu.style.display = "block"
            icon.innerHTML = 'expand_less'
        }

        ////////
        function handlerHeaderClick(e){
            if(expanded){
                icon.innerHTML = 'expand_more'
                menu.style.display = "none"
            }
            else{
                icon.innerHTML = 'expand_less'
                menu.style.display = "block"
            }
            expanded = !expanded
        }
    })
}

