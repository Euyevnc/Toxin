
export default function(){
    document.querySelectorAll(".Inputs-with-counter_textfield").forEach(par=>{
        let inp = par.querySelector('input');
        let list = par.querySelector('.Inputs-with-counter-menu');
        let listEl = list.querySelectorAll('li');
        let sumof = false


        conf();
        listEl.forEach(li=>{
            let counter = li.querySelector('.Inputs-with-counter-counter')
            let numb = counter.querySelector(".Inputs-with-counter-number")
            let min = +(counter.getAttribute('data-min') )
            let max = +(counter.getAttribute('data-max') )
            if (+numb.textContent == min){
                depr(counter.firstChild)
            };
            if (+numb.textContent == max){
                depr(counter.lastChild)
            }

            counter.firstChild.addEventListener('click', evmin)
            counter.lastChild.addEventListener('click', evplus)

            function evplus(){
                let inc = Math.min(+numb.textContent+1, max)
                numb.textContent = inc;
                if (inc == max){depr(counter.lastChild)};
                par.querySelector('.Inputs-with-counter_delete').style.display="inline-block";
                apr(counter.firstChild)
            }
            function evmin(){
                let inc = Math.max(+numb.textContent-1, min)
                numb.textContent = inc
                if (inc == min){depr(counter.firstChild)};
                apr(counter.lastChild);
            }


            sumof= Boolean(+numb.textContent)
            if(!sumof){par.querySelector('.Inputs-with-counter_delete').style.display="none"}
        })

       
        inp.addEventListener('focus', e=>{
            list.style.display = "flex";
            inp.classList.add('WithDropdownactive')
            document.addEventListener('click',function evcl(ev){
                if (!par.contains(ev.target) ){ 
                    conf();
                    inp.classList.remove('WithDropdownactive')
                    list.style.display = "none" 
                    }
            })

        })

        par.querySelector('.Inputs-with-counter_delete').addEventListener('click', e=>{
            del()
        })
        par.querySelector('.Inputs-with-counter_confirm').addEventListener('click',e=>{
            conf()
            list.style.display = "none" ;
        })
        
        
        function conf(){
            let cont = ''
            listEl.forEach( (it,i) =>{
                
                let num = +it.querySelector(".Inputs-with-counter-number").textContent
                let word = it.querySelector('p').textContent
                if(i==2){cont+='...'}
                else {cont+= `${num} ${word}, `}
    
            })
            inp.classList.remove('WithDropdownactive')
            inp.value = cont

        }


        function del(){
            listEl.forEach(item=>{
                let limit = +item.querySelector('.Inputs-with-counter-counter').getAttribute('date-min')
                item.querySelector('.Inputs-with-counter-number').textContent = `${limit}`;
                let f = item.querySelector('.Inputs-with-counter-counter').firstChild;
                par.querySelector('.Inputs-with-counter_delete').style.display="none";
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