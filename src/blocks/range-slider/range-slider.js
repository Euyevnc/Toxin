import "jquery"
import "range-slider-for-ml"  
import"range-slider-for-ml/dist/styles.css"   

export default function(container){
	let params = {type: "range", orient:"horizontal", scale: false, cloud: "none", origin: 1000, range: 14000, step: 500}
	let area = container || document
	$(area).find(".js-range-picker").each((index, picker)=>{
		let contForSlider = $( picker.querySelector(".js-range-picker__container") )
		let slider = contForSlider.rangeSlider(params)

		slider.model.observer.subscribe(()=>{
			picker.querySelector(".js-range-picker__min").textContent = slider.getValue()[0]
			picker.querySelector(".js-range-picker__max").textContent = slider.getValue()[1]
		})

		slider.init(5000, 10000)
	})

}







