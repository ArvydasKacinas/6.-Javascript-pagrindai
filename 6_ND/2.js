document.querySelector('#sudeti').addEventListener('click', function(){
    console.log('sudeta')
});

document.querySelector('#atimti').addEventListener('click', function(){
    console.log('atimta')
});
document.querySelector('#sudauginti').addEventListener('click', function(){
    console.log('sudauginta')
});
document.querySelector('#padalinti').addEventListener('click', function(){
    console.log('padalinta')
});

let input1;
let input2;
let rezultatas;

input1 = parseFloat(document.querySelector('#input1').value);
input2 = parseFloat(document.querySelector('#input2').value);

if (document.querySelector('#sudeti').addEventListener('click', function add(){
    input1 = parseFloat(document.querySelector('#input1').value)
    input2 = parseFloat(document.querySelector('#input2').value)

    rezultatas=input1+input2
    console.log(rezultatas)
    document.querySelector('#skaiciuotuvas').innerHTML=rezultatas;
}))
    {}

if (document.querySelector('#atimti').addEventListener('click', function substract(){
    input1 = parseFloat(document.querySelector('#input1').value)
    input2 = parseFloat(document.querySelector('#input2').value)

    rezultatas=input1-input2
    console.log(rezultatas)
    document.querySelector('#skaiciuotuvas').innerHTML=rezultatas;
}))
    {}

if (document.querySelector('#sudauginti').addEventListener('click', function multiply(){
    input1 = parseFloat(document.querySelector('#input1').value)
    input2 = parseFloat(document.querySelector('#input2').value)

    rezultatas=input1*input2
    console.log(rezultatas)
    document.querySelector('#skaiciuotuvas').innerHTML=rezultatas;
}))
    {}
 
if (document.querySelector('#padalinti').addEventListener('click', function divide(){
    input1 = parseFloat(document.querySelector('#input1').value)
    input2 = parseFloat(document.querySelector('#input2').value)

    rezultatas=input1/input2
    console.log(rezultatas)
    document.querySelector('#skaiciuotuvas').innerHTML=rezultatas;
}))
    {}



