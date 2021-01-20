import Date_range_double from "../../../Inputs/Date-range_double/Date-range_double.js"
import Counter from "../../../Inputs/Inputs-with-counter/Inputs-with-counter.js";

export default function(counter, firDate, secDate){
    let FinderContainer = document.querySelector(".number-finder_type_double")
    if(firDate && secDate) Date_range_double(firDate, secDate, FinderContainer)
    else Date_range_double(null, null, FinderContainer)
    if(counter) Counter(counter, FinderContainer)
    else Counter(null, FinderContainer)
}