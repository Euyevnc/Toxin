import withDropdown from '../../includes/Inputs/WithDropdown/WithDropdown.js'
import mask_d_m_y from "../../includes/Inputs/Mask_d-m-y/Mask_d-m-y.js"
import field_arrow from "../../includes/Inputs/Field-with-arrow/Field-with-arrow.js"
//import $ from 'jquery';
//import 'bootstrap'
import "../../plugins/jquery.maskinput.min.js"
import date_picker from "../../includes/Inputs/Date-picker/Date-picker.js"
import date_range from "../../includes/Inputs/Date-range/Date-range.js"
import input_counter from "../../includes/Inputs/Inputs-with-counter/Inputs-with-counter.js" 
import dropping_checkbox from "../../includes/Checkbox/Dropping_checkbox/Dropping_checkbox.js" 
import moveRange from "../../includes/Range-slider/Range-slider.js" 
import PageSwitch from "../../includes/PageSwitch/PageSwitch"

document.addEventListener('DOMContentLoaded', function(e){
    withDropdown();
    mask_d_m_y();
    date_picker();
    date_range();
    field_arrow();
    input_counter();
    dropping_checkbox();
    moveRange()
    //Ну тут вручную начальный диапазон настрою,  хотя в отдельную функцию вынести в будущем можно
        let rangeSlider = document.querySelector(".Range-slider-filter")
        let min = rangeSlider.querySelector(".Range-slider-block-min")
        let max = rangeSlider.querySelector(".Range-slider-block-max")
        let range = rangeSlider.querySelector(".Range-slider-color-range")
        min.style.left = "92px";
        max.style.left = "192px";
        range.style.width = "100px"
        range.style.left = "92px";
        let countMin = rangeSlider.querySelector('.Range-slider-counter-min')
        let countMax = rangeSlider.querySelector('.Range-slider-counter-max')
        countMin.innerHTML = "5 000"
        countMax.innerHTML = "10 000"
    PageSwitch()




   document.querySelectorAll('.Dropping_checkbox_head')[1].click()





    
    
})