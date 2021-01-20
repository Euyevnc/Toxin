import $ from 'jquery';
import "../../../plugins/datepicker"
// import 'jquery-ui/ui/widgets/datepicker'
// import 'jquery-ui/themes/base/core.css'
// import 'jquery-ui/themes/base/datepicker.css'
// import 'jquery-ui/themes/base/theme.css'
import "../../../plugins/jquery.datepicker.extension.range.min"

export default function(firDate, secDate, area){
    $.datepicker.regional['ru'] = {
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

	$.datepicker.setDefaults($.datepicker.regional['ru']);
    $(function(){
		let arrive 
		let departure
		if(area){
			arrive = $(area).find(".date-range_double__value_first")
			departure = $(area).find(".date-range_double__value_second")
		}
		else{	
			arrive = $(".date-range_double__value_first")
			departure = $(".date-range_double__value_second")
		}	
        arrive.datepicker({
			minDate: 0,
			range: 'period', 
			onSelect: function(dateText, inst, extensionRange) {
				let start = extensionRange.startDateText;
				let end = extensionRange.endDateText;
				arrive.val(`${start}`)
				departure.val(`${end}`)
				let change = new Event("change")
				arrive.each((i,el)=>{
					el.dispatchEvent(change)
				})	
			}
		});
		departure.datepicker({
			minDate: 0,
			range: 'period', 
			onSelect: function(dateText, inst, extensionRange) {
				let start = extensionRange.startDateText;
				let end = extensionRange.endDateText;
				arrive.val(`${start}`)
				departure.val(`${end}`)
				let change = new Event("change", extensionRange)
				departure.each((i,el)=>{
					el.dispatchEvent(change)
				})	
			},
        });
		
		$('.ui-datepicker').each((i,e)=>{
			addButtons(e, arrive, departure)
		})
		if(firDate && secDate){
			arrive.datepicker("setDate",`+${firDate}d`)
			departure.datepicker("setDate", [`+${firDate}d`, `+${secDate}d`])			
		}
		else if(firDate){
			arrive.datepicker("setDate",`+${firDate}d`)
	
		}
		else if(secDate){
			departure.datepicker("setDate", [`+${firDate}d`, `+${secDate}d`])			
		}
	});
};



function addButtons(e, inp, inp2){
	e.addEventListener('click', (ev)=>{
		if(ev.target.closest('.ui-datepicker-button_clear')){
			e.querySelectorAll(".ui-state-active").forEach((item)=>{
			item.classList.remove("ui-state-active")
			try{
				e.querySelector(".selected-start").classList.remove(".selected-start")
				e.querySelector(".selected-end").classList.remove(".selected-end")
			} catch {}
			})
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
	})
}
	

