import date_range_double from "../date-picker/_double/date-picker_double"
import counter from "../input-with-counter/input-with-counter";

export default function({values=[], firDate=null, secDate=null}){
    let root = document.querySelector(".js-number-finder")

   date_range_double({ firDate , secDate, root })
    
    counter({ values, root})
}