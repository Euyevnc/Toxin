import focusinput from '../../includes/Inputs/TextField/TextField.js'
import withDropdown from '../../includes/Inputs/WithDropdown/WithDropdown.js'
import mask_d_m_y from "../../includes/Inputs/Mask_d-m-y/Mask_d-m-y.js"
import field_arrow from "../../includes/Inputs/Field-with-arrow/Field-with-arrow.js"
//import $ from 'jquery';
//import 'bootstrap'
import "../../plugins/jquery.maskinput.min.js"
import date_picker from "../../includes/Inputs/Date-picker/Date-picker.js"
import date_range from "../../includes/Inputs/Date-range/Date-range.js"
import input_counter from "../../includes/Inputs/Inputs-with-counter/Inputs-with-counter" 


document.addEventListener('DOMContentLoaded', function(e){
    focusinput();
    withDropdown();
    mask_d_m_y();
    date_picker();
    date_range();
    field_arrow();
    input_counter();
})