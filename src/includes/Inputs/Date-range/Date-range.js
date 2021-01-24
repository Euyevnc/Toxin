import 'jquery';
import "../../../plugins/datepicker.js"
import "../../../plugins/jquery.datepicker.extension.range.min.js"
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
		if(area) pic = $(area).find(".js-date-range__value")
		else pic = $(".js-date-range__value")
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

		$('.ui-datepicker').each((i,picker)=>{
			addButtons(picker)
		})
		if(+firDate && +secDate){
			pic.datepicker("setDate", [`+${firDate}d`, `+${secDate}d`])
			let extensionRange = $('.js-date-range__value').datepicker('widget').data('datepickerExtensionRange');
			let start = extensionRange.startDateText;
			let end = extensionRange.endDateText;
			pic.val(`${start} - ${end}`)	
		}
	});
};



function addButtons(picker){
	picker.addEventListener('click', (ev)=>{
		if(ev.target.closest('.ui-datepicker-button_clear')){
			picker.querySelectorAll(".ui-state-active").forEach((item)=>{
				item.classList.remove("ui-state-active")
			})
			try{
				picker.querySelector(".selected-start").classList.remove("selected-start")
				picker.querySelector(".selected-end").classList.remove("selected-end")
			}
			catch {  }
			picker.find(".js-date-range_value").val(``)
		}
		if(ev.target.closest('.ui-datepicker-button_conf')){
			let jsDate = $(`#${picker.id}`).datepicker('widget').data('datepickerExtensionRange')
			let startDT = jsDate.startDateText
			let endDT = jsDate.endDateText
			let startD = jsDate.startDate
			let endD = jsDate.endDate
			console.log(`Данные: ${startDT}- ${endDT}, (${startD};  ${endD})`);
			
			$.datepicker._hideDatepicker();
		}
	})
}	

