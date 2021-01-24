import "./favicons/favicons"

function commonScripts(container){
    let area = container || document
    area.querySelectorAll("input[type=checkbox]+label").forEach((label)=>{
        label.tabindex = 0
        label.addEventListener("keydown", handlerLabelKeydown)

    })
   
}

//////
function handlerLabelKeydown(e){
    if(e.code=="Enter"){    
        e.target.click()
    }
}

export default commonScripts