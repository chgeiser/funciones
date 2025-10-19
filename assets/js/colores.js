const btnColor1 = document.querySelector('#color1');
const btnColor2 = document.querySelector('#color2');
const btnColor3 = document.querySelector('#color3');
const btnColor4 = document.querySelector('#color4');

btnColor1.addEventListener('click', function(){
    console.log('estoy aqui');
    btnColor1.style.backgroundColor = 'black';
    console.log('cambie');

})

btnColor2.addEventListener('click', function(){
    btnColor2.style.backgroundColor = 'black';

})

btnColor3.addEventListener('click', function(){
    btnColor3.style.backgroundColor = 'black';

})

btnColor4.addEventListener('click', function(){
    btnColor4.style.backgroundColor = 'black';

})