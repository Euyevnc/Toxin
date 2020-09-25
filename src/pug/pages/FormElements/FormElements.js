import focusinput from '../../includes/Inputs/TextField/TextField.js'
import withDropdown from '../../includes/Inputs/WithDropdown/WithDropdown.js'
import Mask_d_m_y from "../../includes/Inputs/Mask_d-m-y/Mask_d-m-y.js"
import 'jquery'
//import 'bootstrap'
import "../../plugins/jquery.maskinput.min.js"

document.addEventListener('DOMContentLoaded', function(e){
    focusinput();
    withDropdown();
    Mask_d_m_y();
})