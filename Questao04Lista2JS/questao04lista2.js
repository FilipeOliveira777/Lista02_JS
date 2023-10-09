const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const nome = document.querySelector('#nome');
const salario = document.querySelector('#salario');
let vet = [];
btn.addEventListener('click', () => {
    let nomevalor = nome.value;
    let valorsalario = parseFloat(salario.value);
     if (isNaN(valorsalario && !/^[a-zA-Z\s]*$/.test(nomevalor) && nomevalor.trim() !== '')) {
        nome.classList.add('botao-estilo-falso');
        setTimeout(() => {
            nome.classList.remove('botao-estilo-falso');
        }, 3000);
        salario.classList.add('botao-estilo-falso');
        setTimeout(() => {
            salario.classList.remove('botao-estilo-falso');
        }, 3000);
     }
    else if (isNaN(valorsalario)) {
       salario.classList.add('botao-estilo-falso');
       setTimeout(() => {
           salario.classList.remove('botao-estilo-falso');
       }, 3000);
    }
    else if (!/^[a-zA-Z\s]*$/.test(nomevalor) && nomevalor.trim() !== '') {
       nome.classList.add('botao-estilo-falso');
       setTimeout(() => {
           nome.classList.remove('botao-estilo-falso');
       }, 3000);
    }
    else{
    let adicionar = [{
        nome: "",
        salario: 0
    }]
    adicionar.nome = nomevalor;
    adicionar.salario = valorsalario;
    nome.value = '';
    salario.value = '';
    vet.push(adicionar);
    ul.innerHTML = '';
    vet.forEach((obj) => {
        let li = document.createElement('li');
        li.textContent = 'nome: ' + obj.nome + ', salario: ' + obj.salario;
        ul.appendChild(li);
    });
    const totalsalario = vet.reduce((valant, valatual) => valant + valatual.salario, 0);
    let p = document.createElement('li');
    p.textContent = `O total de salário pago foi: ${totalsalario}`;
    ul.appendChild(p);
    const maiorsalario = vet.reduce((valant, valatual) => {
        return valatual.salario > valant.salario ? valatual : valant;
    }, { salario: Number.NEGATIVE_INFINITY });
    let p1 = document.createElement('li');
    p1.textContent = `O maior salário pago foi para: ${maiorsalario.nome}, valor: ${maiorsalario.salario}`;
    ul.appendChild(p1);
}
});
