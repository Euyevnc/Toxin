import Chart from 'chart.js';

function initDiagram(data, container){
    let area = container || document
    area.querySelectorAll(".js-diagram__canvas").forEach(el=>{
        let ctx =  el;
        let ctxM = el.getContext("2d");
        
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
    
        let cont = el.parentElement
        let FirstAmount = data.statistics.great
        let SecondAmount = data.statistics.well
        let ThirdAmount = data.statistics.fine
        let FourthAmount = data.statistics.disappointed
    
        let total = FirstAmount + SecondAmount + ThirdAmount + FourthAmount;
        cont.querySelector(".js-diagram__reviews-amount").textContent = total;
        
        let title
        if (5> total >1 || 5>total%10>1 ) title = "голоса"
        else if (total == 1 || total%10==1) titl = "голос"
        else title = "голосов"
        cont.querySelector(".js-diagram__subtitle").textContent = title;
    
        let myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Разочарован','Удовлетворительно','Хорошо', 'Великолепно'],
                datasets: [{
                    
                    label: '# of Votes',
                    data: [FourthAmount, ThirdAmount, SecondAmount, FirstAmount],
                    backgroundColor: [
                        blackGrad,
                        purpleGrad,
                        greenGrad,
                        yellowGrad
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
    })
}

export default initDiagram