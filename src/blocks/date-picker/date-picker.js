import 'jquery';
import "../../plugins/datepicker.js"
import "../../plugins/jquery.datepicker.extension.range.min.js"
import textfieldForDropping from "../textfield-for-dropping/textfield-for-dropping"

function datePicker(){
	textfieldForDropping()
	
	let pickers = []

	document.querySelectorAll(".js-date-picker").forEach((element, index)=>{
		let newPicker = new DatePicker(element)
		newPicker.init()
		pickers.push(newPicker)
	})
	if(pickers.length === 1) return pickers[0]
	else return pickers
}

class DatePicker{
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
			
		};

		this.arriveDate = root.dataset.initarrive
		this.departureDate = root.dataset.initdeparture
	}

	init(){
		$.datepicker.regional['ru'] = this.params
	
		$.datepicker.setDefaults($.datepicker.regional['ru']);

		let object = this

		let input = this.input = $(this.root).find(".js-textfield-for-dropping__value")

		let arrow = this.arrow = this.root.querySelector(".js-textfield-for-dropping__arrow")

		let arriveDate = this.arriveDate
		let departureDate = this.departureDate

		input.datepicker({
			dateFormat: 'dd M',
			minDate: 0,
			range: 'period', 
			onSelect: function(dateText, inst, extensionRange) {
				let start = extensionRange.startDateText;
				let end = extensionRange.endDateText;
				input.val(`${start} - ${end}`)
				object.arriveDate = extensionRange.startDate
				object.departureDate = extensionRange.endDate 
	
				let select = new CustomEvent("ondateselect", { detail: extensionRange })
				input[0].dispatchEvent(select)

			}
        });

		if(arriveDate && departureDate){
			input.datepicker("setDate", [`+${arriveDate}d`, `+${departureDate}d`])
			let extensionRange = $('.js-date-picker input').datepicker('widget').data('datepickerExtensionRange');
			let start = extensionRange.startDateText;
			let end = extensionRange.endDateText;
			input.val(`${start} - ${end}`)	
		}

		document.addEventListener("calendarshowing", handlerDocShowing)
		document.addEventListener("calendarhiding", handlerDocHiding)
		arrow.addEventListener("click", handlerArrowClick)

		
		let picker = document.querySelector('.js-ui-datepicker')
		picker.addEventListener("click", handlerPickerClick)

		/////////////
		function handlerPickerClick(ev){
			if(ev.target.closest('.ui-datepicker-button_clear')){
				picker.querySelectorAll(".ui-state-active").forEach((item)=>{
					item.classList.remove("ui-state-active")
				})
				try{
					picker.querySelector(".selected-start").classList.remove("selected-start")
					picker.querySelector(".selected-end").classList.remove("selected-end")
				}
				catch { }
				input.val(``)
			}
			if(ev.target.closest('.ui-datepicker-button_conf')){
				let jsDate = input.datepicker('widget').data('datepickerExtensionRange')
				let startDT = jsDate.startDateText
				let endDT = jsDate.endDateText
				let startD = jsDate.startDate
				let endD = jsDate.endDate
	
				console.log(`Данные: ${startDT}- ${endDT}, (${startD};  ${endD})`);
				
				$.datepicker._hideDatepicker();
			}
		}
	
		function handlerArrowClick(e){
			let input = e.target.closest(".js-date-picker").querySelector("input")
			$.datepicker._showDatepicker(input)
		}
		function handlerDocShowing(e){
			setTimeout(()=>(disactivateArrow()), 100)
			//Таймаут использую потому как плагин запускает (не знаю почему) функцию _hide... на этапе погружения ,
			// эту его часть я трогать не решился, вдруг всё сломается, пришлось обходиться таймаутом
			let disactivateArrow= () => {
				arrow.removeEventListener("click", handlerArrowClick)
				arrow.querySelector(".arrow-down").textContent = "expand_less"
			}
		}
		function handlerDocHiding(e){
			if(e.detail.datepickerShowing) setTimeout(()=>(activateArrow(), 100) )
			let activateArrow=()=>{
				arrow.addEventListener("click", handlerArrowClick)
				arrow.querySelector(".arrow-down").textContent = "expand_more"
			}
	
		}
	}
}

export default datePicker

