export default function(exp){
    let expanded = Boolean(exp)
    document.querySelectorAll('.dropping-checkboxes').forEach(el=>{
        let icon = el.querySelector('i.material-icons')
        let container = el.querySelector(".dropping-checkboxes__container")
        if(expanded) {
            container.style.display = "block"
            icon.innerHTML = 'expand_less'
        }
        el.querySelector(".dropping-checkboxes__header").addEventListener('click', e=>{
            console.log(expanded)
            if(expanded){
                icon.innerHTML = 'expand_more'
                container.style.display = "none"
            }
            else{
                icon.innerHTML = 'expand_less'
                container.style.display = "block"
            }
            expanded = !expanded
        })
    })
}