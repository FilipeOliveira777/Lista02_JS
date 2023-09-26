const btn=document.querySelector('button');
let numvet=document.querySelector('#numeros');
const sepvet=document.querySelector('#separador');
const div=document.querySelector('div');
btn.addEventListener('click', () =>{
    let vet=[];
    let variavel=numvet.value;
    vet = variavel.split(sepvet.value);
    vet.forEach((num) =>{
        let res = parseInt(num);
    })
    let min=Math.min(...vet);
    let max=Math.max(...vet);
    div.textContent = `O maior numero é: ${max}, e o menor é: ${min}`
});