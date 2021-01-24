import Field_with_arrow from "../../Inputs/Field-with-arrow/Field-with-arrow.js";

function initFooter(){
    document.querySelectorAll(".footer").forEach( (item)=>{
        Field_with_arrow(item)
    })
}


export default  initFooter