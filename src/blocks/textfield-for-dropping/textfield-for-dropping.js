function textfielForDropping(){
    let inputs = []
    document.querySelectorAll(".js-textfield-for-dropping").forEach((element)=>{
        let newInput = new TextfielForDropping(element)
        newInput.init()
        inputs.push(newInput)
    })
    if(inputs.length === 1) return inputs[0]
    else return inputs
}
class TextfielForDropping{

    constructor(root){
        this.root = root
    }
    init(){
        let root = this.root
        let input = this.input = root.querySelector(".js-textfield-for-dropping__value")  
    }
}

export default textfielForDropping