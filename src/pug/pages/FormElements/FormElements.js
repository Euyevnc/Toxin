import focusinput from '../../includes/Inputs/TextField/TextField.js'
import withDropdown from '../../includes/Inputs/WithDropdown/WithDropdown.js'
import Mask_d_m_y from "../../includes/Inputs/Mask_d-m-y/Mask_d-m-y.js"
//import $ from 'jquery';
//import 'bootstrap'
import "../../plugins/jquery.maskinput.min.js"
import Date_picker from "../../includes/Inputs/Date-picker/Date-picker.js"
import Date_range from "../../includes/Inputs/Date-range/Date-range.js"


document.addEventListener('DOMContentLoaded', function(e){
    focusinput();
    withDropdown();
    Mask_d_m_y();
    Date_picker();
    Date_range();
})