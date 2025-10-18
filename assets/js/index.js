
function pintar_body(){
    const element = document.querySelector("body");
    const cajita = document.querySelector('#valorColor');
    element.style.backgroundColor=cajita.value;
}

function pintar_body(color){
    const element = document.querySelector("body");
    element.style.backgroundColor=color;
}

function suma(a,b){
    let resultado = Number(a)+Number(b);
    return resultado
}

function calcularSuma(){
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const resultdo = document.querySelector('#resultado');

    const resultadoSuma = suma(num1,num2);
    resultdo.textContent = resultadoSuma;
}