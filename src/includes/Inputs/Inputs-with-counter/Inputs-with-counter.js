export default function(values){
    document.querySelectorAll(".input-with-counter").forEach((par, i)=>{
        let value
        if(values) value = values[i]
        let inp = par.querySelector('input');
        let list = par.querySelector('.input-with-counter__menu');
        let listEl = list.querySelectorAll('li');
        let assign1
        assign1 = 0
        let assign2
        listEl.forEach((li,i)=>{
            let counter = li.querySelector('.input-with-counter__counter')
            let numb = counter.querySelector(".input-with-counter__number")
            let min = +(counter.getAttribute('data-min') )
            let max = +(counter.getAttribute('data-max') )
            if(value && value[i]){
                numb.textContent = Math.max(min,Math.min(value[i], max))
            }
            if (+numb.textContent == min){
                depr(counter.firstChild)
            };
            if (+numb.textContent == max){
                depr(counter.lastChild)
            }
            assign1+=(+numb.textContent)


            counter.firstChild.addEventListener('click', evmin)
            counter.lastChild.addEventListener('click', evplus)

            function evplus(){
                let inc = Math.min(+numb.textContent+1, max)
                numb.textContent = inc;
                if (inc == max){depr(counter.lastChild)};
                par.querySelector('.input-with-counter__button_delete').style.visibility= 'visible';
                apr(counter.firstChild)
            }
            function evmin(){
                let inc = Math.max(+numb.textContent-1, min)
                numb.textContent = inc
                if (inc == min){depr(counter.firstChild)};
                apr(counter.lastChild);
                assign2 = 0
                listEl.forEach(el=>{
                    assign2 +=(+el.querySelector('.input-with-counter__number').textContent)

                })
                if (!assign2){par.querySelector('.input-with-counter__button_delete').style.visibility= 'hidden';}
            }
        })
        if(value) conf();
        if(!assign1){par.querySelector('.input-with-counter__button_delete').style.visibility= 'hidden'}

        inp.addEventListener('focus', e=>{
            list.style.display = "flex";
            document.addEventListener('click',function evcl(ev){
                if (!par.contains(ev.target) ){ 
                    conf();
                    list.style.display = "none" 
                }
            })

        })


        par.querySelector('.input-with-counter__button_delete').addEventListener('click', e=>{
            del()
        })
        par.querySelector('.input-with-counter___button_confirm').addEventListener('click',e=>{
            conf()
            list.style.display = "none" ;
        }) 
        
        function conf(){
            let cont = ''
            listEl.forEach( (it,i) =>{
                if(par.classList.contains("input-with-counter_simple")){
                    let num = +it.querySelector(".input-with-counter__number").textContent
                    if(cont&&i==1) cont += ', '
                    let word = it.querySelector('p').textContent
                    if(num==0){cont+=''}
                    else if(i==2&&num>0&&cont){cont += "..."}
                    else {cont+= `${num} ${word}`}
                }
                else{
                    let num = +it.querySelector(".input-with-counter__number").textContent
                    if(i==0){
                        cont=+cont + num; 
                    }
                    else if(i==listEl.length-2){
                        cont = +cont + num;
                        if (cont==0){cont=''}
                        else if(cont == 1 || cont% 10 == 1) cont+= " гость";
                        else if(5>cont || 5>(cont%10)) cont+= " гостя";
                        else cont+= " гостей";
                    }
                    else if(i==listEl.length-1){
                        if (num==0){num=''}
                        else if(num == 1 || num% 10 == 1) num+= " младенец";
                        else if(5>num || 5>num%10) num+= " младенца";
                        else num += " младенцев";

                        if(cont&&num) cont +=", " + num
                        
                    }
                }
            })
            cont = cont || inp.getAttribute("placeholder")
            inp.classList.remove('WithDropdownactive')
            inp.value = cont

        }
        function del(){
            listEl.forEach(item=>{
                let limit = +item.querySelector('.input-with-counter__counter').getAttribute('date-min')
                item.querySelector('.input-with-counter__number').textContent = `${limit}`;
                let f = item.querySelector('.input-with-counter__counter').firstChild;
                par.querySelector('.input-with-counter__button_delete').style.visibility= 'hidden';
                depr(f)
                conf()
            })
        }
        

        function depr(ar){
            ar.style.border= '1px solid rgba(31, 32, 65, 0.25)';
            ar.style.color = 'rgba(31, 32, 65, 0.25)';
            ar.style.cursor = "auto"
        }
        function apr(ar){
            ar.style.border= '1px solid rgba(31, 32, 65, 0.5)';
            ar.style.color = 'rgba(31, 32, 65, 0.5)';
            ar.style.cursor = "pointer"
        }

    })
}