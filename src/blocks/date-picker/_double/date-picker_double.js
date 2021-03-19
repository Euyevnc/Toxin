import $ from 'jquery';
import "../../../plugins/datepicker"
import "../../../plugins/jquery.datepicker.extension.range.min"

function createDoubleDatepicker({firDate=null, secDate=null, container=null}){
	let area = container || document
	let pickers = []
	area.querySelectorAll(".js-date-picker_double").forEach((item)=>{
		let picker = new DatePicker(item)
		picker.init(firDate, secDate)
		pickers.push(picker)
	})
	return pickers
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
			dateFormat: 'dd.mm.yy',
		};
	}

	init(arriveDate, departureDate){
		this.arriveInput = $(this.root).find(".js-date-picker_double__container_for_first input")
		this.departureInput = $(this.root).find(".js-date-picker_double__container_for_second input")
		this.arriveArrow = this.root.querySelector(".js-date-picker_double__container_for_first .js-text-field_with_arrow-down__arrow")
		this.departureArrow = this.root.querySelector(".js-date-picker_double__container_for_second .js-text-field_with_arrow-down__arrow")
		$.datepicker.regional['ru'] = this.params
		$.datepicker.setDefaults($.datepicker.regional['ru']);

		let arriveInput = this.arriveInput 
		let departureInput = this.departureInput
		let arriveArrow = this.arriveArrow
		let departureArrow = this.departureArrow

		arriveInput.datepicker({
			minDate: 0,
			range: 'period', 
			onSelect: function(dateText, inst, extensionRange) {
				let start = extensionRange.startDateText;
				let end = extensionRange.endDateText;
				arriveInput.val(start)
				departureInput.val(end)
			}
		});

		departureInput.datepicker({
			minDate: 0,
			range: 'period', 
			onSelect: function(dateText, inst, extensionRange) {
				let start = extensionRange.startDateText;
				let end = extensionRange.endDateText;
				arriveInput.val(start)
				departureInput.val(end)
			},
		})

		if(arriveDate && departureDate){
			this.arrive.datepicker("setDate",`+${firDate}d`)
			this.departure.datepicker("setDate", [`+${firDate}d`, `+${secDate}d`])			
		}
		else if(arriveDate){
			this.arrive.datepicker("setDate",`+${firDate}d`)
	
		}
		else if(departureDate){
			this.departure.datepicker("setDate", [`+${firDate}d`, `+${secDate}d`])			
		}

		$('.js-ui-datepicker').each((i,picker)=>{
			addButtons(picker, arriveInput, departureInput)
		})

		document.addEventListener("calendarshowing", handlerDocShowing)
		document.addEventListener("calendarhiding", handlerDocHiding)
		arriveArrow.addEventListener("click", handlerArrowClick)
		departureArrow.addEventListener("click", handlerArrowClick)
		/////
		function addButtons(picker, inp, inp2){
			picker.addEventListener('click', handlerPickerClick)

			function handlerPickerClick(ev){
				if(ev.target.closest('.ui-datepicker-button_clear')){
					picker.querySelectorAll(".ui-state-active").forEach((item)=>{
						item.classList.remove("ui-state-active")
		
					})
					try{
						picker.querySelector(".selected-start").classList.remove("selected-start")
						picker.querySelector(".selected-end").classList.remove("selected-end")
					}catch { }
					inp.val(``)
					inp2.val(``)
				}
				if(ev.target.closest('.ui-datepicker-button_conf')){
		
					let jsDate = inp.datepicker('widget').data('datepickerExtensionRange')
					let startDT = jsDate.startDateText
					let endDT = jsDate.endDateText
					let startD = jsDate.startDate
					let endD = jsDate.endDate
		
					$.datepicker._hideDatepicker();
					
					console.log(`Данные: ${startDT}- ${endDT}, (${startD};  ${endD})`);
					
				}
			}
		}
		function handlerArrowClick(e){
			let input = e.target.closest(".js-date-picker_double__container").querySelector("input")
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
			setTimeout(activateArrow, 100)
			function activateArrow(){
				arriveArrow.addEventListener("click", handlerArrowClick)
				departureArrow.addEventListener("click", handlerArrowClick)
	
				arriveArrow.querySelector(".arrow-down").textContent = "expand_more"
				departureArrow.querySelector(".arrow-down").textContent = "expand_more"
			}

		}
	}
}

export default createDoubleDatepicker
