import $ from 'jquery';
import "../../plugins/datepicker"
import "../../plugins/jquery.datepicker.extension.range.min"
import textfieldForDropping from "../textfield-for-dropping/textfield-for-dropping"

function doubleDatePicker(){
	textfieldForDropping()
	
	let pickers = []

	document.querySelectorAll(".js-double-date-picker").forEach((element, index)=>{
		let newPicker = new DoubleDatePicker(element)
		newPicker.init()
		pickers.push(newPicker)
	})
	if(pickers.length === 1) return pickers[0]
	else return pickers
}

	
class DoubleDatePicker{
	constructor(root){
		this.root = root
		this.params = {
			closeText: 'Закрыть',
			prevText: 'Предыдущий',
			nextText: 'Следующий',
			currentText: 'Сегодня',
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			weekHeader: 'Не',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: '',
			showOtherMonths: true,
			selectOtherMonths:true,
			dateFormat: 'dd.mm.yy',
		};
	}

	init(){
		let arriveCont = this.root.querySelector(".js-double-date-picker__container_for_first")
		let departureCont = this.root.querySelector(".js-double-date-picker__container_for_second")

		let arriveInput = this.arriveInput = $(arriveCont).find(".js-textfield-for-dropping__value")
		let departureInput = this.departureInput = $(departureCont).find(".js-textfield-for-dropping__value")

		let arriveArrow = this.arriveArrow = arriveCont.querySelector(".js-textfield-for-dropping__arrow")
		let departureArrow = this.departureArrow = departureCont.querySelector(".js-textfield-for-dropping__arrow")

		let arriveDate = this.arriveDate = arriveCont.dataset.init 
		let departureDate = this.departureDate = departureCont.dataset.init 
	
		$.datepicker.regional['ru'] = this.params
		$.datepicker.setDefaults($.datepicker.regional['ru']);

		arriveInput.datepicker({
			minDate: 0,
			range: 'period', 
			onSelect: (dateText, inst, extensionRange)=>{
				let start = extensionRange.startDateText;
				let end = extensionRange.endDateText;
				arriveInput.val(start)
				departureInput.val(end)
				this.arriveDate = extensionRange.startDate;
				this.departureDate = extensionRange.endDate

				let select = new CustomEvent("ondateselect", { detail: extensionRange })
				arriveInput[0].dispatchEvent(select)
			}
		});

		departureInput.datepicker({
			minDate: 0,
			range: 'period', 
			onSelect: (dateText, inst, extensionRange)=>{
				let start = extensionRange.startDateText;
				let end = extensionRange.endDateText;
				arriveInput.val(start)
				departureInput.val(end)
				this.arriveDate = extensionRange.startDate;
				this.departureDate = extensionRange.endDate

				let select = new CustomEvent("ondateselect", { detail: extensionRange })
				departureInput[0].dispatchEvent(select)
			},
		})

		if(arriveDate && departureDate){
			arriveInput.datepicker("setDate",`+${arriveDate}d`)
			departureInput.datepicker("setDate", [`+${arriveDate}d`, `+${departureDate}d`])			
		}
		else if(arriveDate){
			arriveInput.datepicker("setDate",`+${arriveDate}d`)
	
		}
		else if(departureDate){
			departureInput.datepicker("setDate", [`+${arriveDate}d`, `+${departureDate}d`])			
		}

		document.addEventListener("calendarshowing", handlerDocShowing)
		document.addEventListener("calendarhiding", handlerDocHiding)
		arriveArrow.addEventListener("click", handlerArrowClick)
		departureArrow.addEventListener("click", handlerArrowClick)


		let picker = document.querySelector('.js-ui-datepicker')
		picker.addEventListener("click", handlerPickerClick)

		/////
		function handlerPickerClick(ev){
			if(ev.target.closest('.ui-datepicker-button_clear')){
				picker.querySelectorAll(".ui-state-active").forEach((item)=>{
					item.classList.remove("ui-state-active")
	
				})
				try{
					picker.querySelector(".selected-start").classList.remove("selected-start")
					picker.querySelector(".selected-end").classList.remove("selected-end")
				}catch { }
				arriveInput.val(``)
				departureInput.val(``)
			}
			if(ev.target.closest('.ui-datepicker-button_conf')){
	
				let jsDate = arriveInput.datepicker('widget').data('datepickerExtensionRange')
				let startDT = jsDate.startDateText
				let endDT = jsDate.endDateText
				let startD = jsDate.startDate
				let endD = jsDate.endDate
	
				$.datepicker._hideDatepicker();
				
				console.log(`Данные: ${startDT}- ${endDT}, (${startD};  ${endD})`);
				
			}
		}

		function handlerArrowClick(e){
			let input = e.target.closest(".js-double-date-picker__container").querySelector("input")
			$.datepicker._showDatepicker(input)
		}
		function handlerDocShowing(e){
			setTimeout(disactivateArrow, 100)
			//Таймаут использую потому как плагин запускает (не знаю почему) функцию _hide... на этапе погружения ,
			// эту его часть я трогать не решился, вдруг всё сломается, пришлось обходиться таймаутом
			function disactivateArrow(){
				if(e.detail.input == arriveInput[0]){
					arriveArrow.removeEventListener("click", handlerArrowClick)
					arriveArrow.querySelector(".arrow-down").textContent = "expand_less"
				}
				
				else if(e.detail.input == departureInput[0]){
					departureArrow.removeEventListener("click", handlerArrowClick)
					departureArrow.querySelector(".arrow-down").textContent = "expand_less"
				}
			}

		}
		function handlerDocHiding(e){
			if(e.detail.datepickerShowing) setTimeout(activateArrow, 100)
			function activateArrow(){
				arriveArrow.addEventListener("click", handlerArrowClick)
				departureArrow.addEventListener("click", handlerArrowClick)
				arriveArrow.querySelector(".arrow-down").textContent = "expand_more"
				departureArrow.querySelector(".arrow-down").textContent = "expand_more"
			}

		}
	}
}



export default doubleDatePicker
