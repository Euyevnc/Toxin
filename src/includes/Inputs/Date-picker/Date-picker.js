import $ from 'jquery';

import "../../../plugins/datepicker"
//Не используется нигде, разве что чтили импортируется в диапозонные календари
export default function(date){
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
    	dateFormat: 'dd.mm.yy',
    	firstDay: 1,
    	isRTL: false,
    	showMonthAfterYear: false,
		yearSuffix: '', 
		showOtherMonths: true,
		selectOtherMonths:true,
    };

    $.datepicker.setDefaults($.datepicker.regional['ru']);

	let pic = $(".date-picker__value")
    $(function(){
        pic.datepicker({
			dateFormat: 'dd M',
			minDate: 0,
			range: 'period', 
			onSelect: function(dateText, inst, extensionRange) {
				let change = new Event("change", extensionRange)
				pic.each((i,el)=>{
					el.dispatchEvent(change)
				})
			}
        });

		$('.ui-datepicker').each((i,e)=>{
			addButtons(e)
		})
		if(date){
			pic.datepicker("setDate", [`+${date}d`])
			//pic.val(`${start}`)
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
					e.querySelector(".selected-end").classList.remove(".selected-end")}
				catch{}
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
