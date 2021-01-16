import Date_range_double from "../../../Inputs/Date-range_double/Date-range_double.js"
import Counter from "../../../Inputs/Inputs-with-counter/Inputs-with-counter.js";

export default function(counter, firDate, secDate){
    if(firDate && secDate) Date_range_double(firDate, secDate)
    else Date_range_double()
    if(counter) Counter(counter)
    else Counter()
}