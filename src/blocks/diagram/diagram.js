import Chart from 'chart.js';

function diagram(){
    let diagrams = []
    document.querySelectorAll(".js-diagram").forEach((element)=>{
        let newDiagram = new Diagram(element)
        newDiagram.init()
        diagrams.push(newDiagram)
    })
    if(diagrams.length === 1) return diagrams[0]
    else return diagrams
}

class Diagram{

    constructor(root){
        this.root = root 
    
    }

    init(){
        let root =  this.root;
        let canvas = this.canvas = root.querySelector(".js-diagram__canvas")
        let subjectForm = this.subjectForm = Object.values(root.querySelector(".js-diagram__reviews-amount").dataset)

        let ctxM = canvas.getContext("2d");
        
        let yellowGrad = ctxM.createLinearGradient(155, 0, 155, 120);
        yellowGrad.addColorStop(0, '#FFE39C');   
        yellowGrad.addColorStop(1, '#FFBA9C');
        
        let greenGrad = ctxM.createLinearGradient(155, 0, 155, 120);
        greenGrad.addColorStop(0, '#6FCF97');   
        greenGrad.addColorStop(1, '#66D2EA');
        
        let purpleGrad = ctxM.createLinearGradient(155, 0, 155, 120);
        purpleGrad.addColorStop(0, '#BC9CFF');   
        purpleGrad.addColorStop(1, '#8BA4F9');
        
        let blackGrad = ctxM.createLinearGradient(155, 0, 155, 120);
        blackGrad.addColorStop(0, '#919191');   
        blackGrad.addColorStop(1, '#3D4975');

        let title
        if (5> total >1 || 5>total%10>1 ) title = subjectForm[1]
        else if (total == 1 || total%10==1) title = subjectForm[0]
        else title = subjectForm[2]
        root.querySelector(".js-diagram__subtitle").textContent = title;

        let amountArray = []
        let nameArray = []
        let total = 0
        
        root.querySelectorAll(".diagram__legend-item").forEach((item)=>{
            let amount = +item.dataset.amount 
            let name = item.querySelector(".diagram__legend-lettering").textContent
            amountArray.unshift(amount)
            nameArray.unshift(name)
            total +=amount
        })
        root.querySelector(".js-diagram__reviews-amount").textContent = total;
        let myChart = new Chart(canvas, {
            type: 'doughnut',
            data: {
                labels: nameArray,
                datasets: [{
                    
                    label: '# of Votes',
                    data: amountArray,
                    backgroundColor: [
                        blackGrad,
                        purpleGrad,
                        greenGrad,
                        yellowGrad,
                    ],
                    borderColor: [  
                        'white',
                        'white',
                        'white',
                        "white",
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                cutoutPercentage: 90,
                legend: {
                    display: false
                }
            },
        });
    }

}

export default diagram