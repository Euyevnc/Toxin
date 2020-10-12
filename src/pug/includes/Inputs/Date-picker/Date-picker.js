import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/datepicker.css'
import 'jquery-ui/themes/base/theme.css'

export default function(){
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

    $(function(){
        $("input.Date-picker_value").datepicker({
			showButtonPanel: false,
            minDate: 0
        });
		$('div.ui-datepicker').css({ 'font-size': '15px',});
		
		try{$(".filled-picker").datepicker("setDate", new Date)}
		catch{}
	});



};

