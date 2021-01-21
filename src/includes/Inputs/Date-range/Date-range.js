import $ from 'jquery';
import "../../../plugins/datepicker.js"
//import 'jquery-ui/ui/widgets/datepicker'
// import 'jquery-ui/themes/base/core.css'
// import 'jquery-ui/themes/base/datepicker.css'
// import 'jquery-ui/themes/base/theme.css'


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
		
    };

	$.datepicker.setDefaults($.datepicker.regional['ru']);
	

    $(function(){
		let pic
		if(area) pic = $(area).find(".date-range__value")
		else pic = $(".date-range__value")

        pic.datepicker({
			dateFormat: 'dd M',
			minDate: 0,
			range: 'period', 
			onSelect: function(dateText, inst, extensionRange) {
				let start = extensionRange.startDateText;
				let end = extensionRange.endDateText;
				pic.val(`${start} - ${end}`)
				let change = new Event("change", extensionRange)
				pic.each((i,el)=>{
					el.dispatchEvent(change)
				})
			  }
        });

		$('.ui-datepicker').each((i,e)=>{
			addButtons(e)
		})
		if(+firDate && +secDate){
			pic.datepicker("setDate", [`+${firDate}d`, `+${secDate}d`])
			let extensionRange = $('.date-range__value').datepicker('widget').data('datepickerExtensionRange');
			let start = extensionRange.startDateText;
			let end = extensionRange.endDateText;
			pic.val(`${start} - ${end}`)	
		}
	});
};



function addButtons(e){
	e.addEventListener('click', (ev)=>{
		if(ev.target.closest('.ui-datepicker-button_clear')){
			e.querySelectorAll(".ui-state-active").forEach((item)=>{
				item.classList.remove("ui-state-active")
				try{
					e.querySelector(".selected-start").classList.remove(".selected-start")
					e.querySelector(".selected-end").classList.remove(".selected-end")
				}
				catch {}
			})
			$(".date-range_value").val(``)
		}
		if(ev.target.closest('.ui-datepicker-button_conf')){
			let calendar = e
			let jsDate = $(`#${e.id}`).datepicker('widget').data('datepickerExtensionRange')
			let startDT = jsDate.startDateText
			let endDT = jsDate.endDateText
			let startD = jsDate.startDate
			let endD = jsDate.endDate
			console.log(`Данные: ${startDT}- ${endDT}, (${startD};  ${endD})`);
			
			$.datepicker._hideDatepicker();
		}
	})
}	

