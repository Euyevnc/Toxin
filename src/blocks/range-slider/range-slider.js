import "jquery"
import "range-slider-for-ml"  
import "range-slider-for-ml/dist/styles.css"   

export default function(container, params, firstValue, secondValue){
	let area = container || document
	$(area).find(".js-range-picker").each((index, picker)=>{
		let contForSlider = $( picker.querySelector(".js-range-picker__container") )
		let slider = contForSlider.rangeSlider(params)

		slider.model.observer.subscribe(()=>{
			picker.querySelector(".js-range-picker__min").textContent = slider.getValue()[0].toLocaleString()
			picker.querySelector(".js-range-picker__max").textContent = slider.getValue()[1].toLocaleString()
		})

		slider.init(firstValue, secondValue)
	})

}







