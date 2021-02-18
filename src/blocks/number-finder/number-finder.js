import Date_range_double from "../date-picker/_double/date-picker_double"
import Counter from "../input-with-counter/input-with-counter";

export default function(counter, firDate, secDate){
    let FinderContainer = document.querySelector(".js-number-finder")

    if(firDate && secDate) Date_range_double(firDate, secDate, FinderContainer)
    else Date_range_double(null, null, FinderContainer)
    
    if(counter) Counter(counter, FinderContainer)
    else Counter(null, FinderContainer)
}