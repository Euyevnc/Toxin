import Chart from 'chart.js';


export default function(){
document.querySelectorAll(".Diogram__diogram").forEach(el=>{
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
    let FirstAmount = +cont.querySelector(".Diogram__item:nth-child(1)").getAttribute("data-amount")
    let SecondAmount = +cont.querySelector(".Diogram__item:nth-child(2)").getAttribute("data-amount")
    let ThirdAmount = +cont.querySelector(".Diogram__item:nth-child(3)").getAttribute("data-amount")
    let FourthAmount = +cont.querySelector(".Diogram__item:nth-child(4)").getAttribute("data-amount")

    let total = FirstAmount + SecondAmount + ThirdAmount + FourthAmount;
    cont.querySelector(".Diogram__title p:first-child").textContent = total;
    
    let titl 
    if (total == 0 || total%10==0 || total > 4 || total%10 >4 ) titl = "голосов"
    else if (total == 1 || total%10==1) titl = "голос"
    else titl = "голоса"
    cont.querySelector(".Diogram__title p:last-child").textContent = titl;

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
})}