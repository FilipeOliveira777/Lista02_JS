const tarefas=document.querySelector('#tarefas');
const lista=document.querySelector('ul');
const body=document.querySelector('body');
tarefas.addEventListener('keyup',(e) => {
    if(e.key=='Enter'){
        let btn=document.createElement('button');
        btn.textContent='X' 
        let li=document.createElement('li');    
        let vet=[];
        vet=tarefas.value;    
        lista.appendChild(li);
        li.textContent=vet;
        li.appendChild(btn);
        tarefas.value='';
        console.log(e.key);
            btn.addEventListener('click', () =>{
                lista.removeChild(li);    
                lista.removeChild(btn); 
            })
    }
    
})