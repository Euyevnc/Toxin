export default function(){
    document.querySelectorAll('.Dropping_checkbox_head').forEach(el=>{
        el.addEventListener('click', e=>{
            let par = el.parentElement
            let icon = par.querySelector('i.material-icons')
            par.classList.toggle('Dropping_checkbox_wrap_active');
            if(par.classList.contains('Dropping_checkbox_wrap_active')){icon.innerHTML = 'expand_less'}
            else(icon.innerHTML = 'expand_more')
        })
        if(el.closest("[data-expanded='true']") ){
            el.click();
        }
    })
}