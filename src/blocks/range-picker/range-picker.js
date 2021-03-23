import "jquery"
import "range-slider-for-ml"  
import "range-slider-for-ml/dist/styles.css"   

function rangePicker(){
    let pickers = []

    document.querySelectorAll(".js-range-picker").forEach((element, index)=>{
        let newPicker = new RangePicker(element)
        newPicker.init()
        pickers.push(newPicker)
    })
    if(pickers.length === 1) return pickers[0]
    else return pickers
}

class RangePicker{

	constructor(root){
		this.root = root 

	}

	init(){
		let root = this.root
		let container = this.container = $( root.querySelector(".js-range-picker__container") )
		let min = this.min = root.querySelector(".js-range-picker__min")
		let max = this.max = root.querySelector(".js-range-picker__max")

		let sliderData = eval("(" +  root.dataset.slider  + ")")

		let sliderObject = this.sliderObject = container.rangeSlider(sliderData)
		sliderObject.model.observer.subscribe(()=>{
			min.textContent = sliderObject.getValue()[0].toLocaleString()
			max.textContent = sliderObject.getValue()[1].toLocaleString()
		})
		sliderObject.init(sliderData.initStart, sliderData.initEnd)
	}
}

export default rangePicker







