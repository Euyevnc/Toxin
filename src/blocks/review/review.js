function review(){
    let reviews = []
    document.querySelectorAll(".js-review").forEach((element)=>{
        let newReview = new Review(element)
        newReview.init()
        reviews.push(newReview)
    })
    if(reviews.length===1) return reviews[0]
    else return reviews
}

class Review{

    constructor(root){
        this.root = root

    }
    init(){
        this.timer = this.root.querySelector(".review__days-ago")
        this.date = this.timer.dataset.date
        
        let daysAgo = Math.floor( ( new Date() - new Date(this.date) )/(24*3600000) )

        this.timer.textContent = parseDate(daysAgo)
        ///////
        function parseDate(days) {
            console.log(days)
            let years = parseInt(days/340)
            days = days - years * 330
            let months = parseInt(days / 30);
            days = days - months * 30;
            let weeks = parseInt(days / 7);
            days = days - weeks * 7;
            return ( (years > 0 ? years + ( (years> 1|| years%10>1) ? (years<5|| years%10<5)  ? " года" : " лет" : " год" ) : months > 0 ? months + " месяц" + ( (months> 1|| months%10>1) ? (months<5|| months%10<5)  ? "а" : "ев" : "" ) : weeks> 0 ? weeks + " недел" + ((weeks>1||weeks%10>1) ? (weeks<5||weeks%10<5) ? "и" : "ь" : "я") :  days + " д" + ((days>1||days%10>1) ? (days<5 ||days%10<5 ) ? "ня" : "ней" : "ень") ) + " назад")
         }
    }     
}

export default review