export default function(exp){
    let expanded = Boolean(exp)
    document.querySelectorAll('.Dropping-checkboxes').forEach(el=>{
        let icon = el.querySelector('i.material-icons')
        let container = el.querySelector(".Dropping-checkboxes__container")
        el.querySelector(".Dropping-checkboxes__header").addEventListener('click', e=>{
            expanded = !expanded
            console.log(expanded)
            if(expanded){
                icon.innerHTML = 'expand_less'
                container.style.display = "block"
            }
            else{
                icon.innerHTML = 'expand_more'
                container.style.display = "none"
            }
        })
    })
}