import "./favicons/favicons"

function commonScripts(container){
    let area = container || document
    area.querySelectorAll("input[type=checkbox]+label").forEach((label)=>{
        label.tabindex = 0

    })
   
}

//////
export default commonScripts