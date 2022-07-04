"use strict"

let skaiciusA = 100;
let skaiciusB = 11;

if(skaiciusA>skaiciusB) {
    console.log('skaicius A yra didesnis');
} else if (skaiciusA==skaiciusB) {
    console.log('skaiciu reiksmes yra lygios');
}
  else {
      console.log('skaicius B yra didesnis')
  }

document.querySelector('#palyginti').addEventListener('click', function(){
    console.log('palyginta')
});

let inputA = parseFloat(document.querySelector('#inputA').value);
let inputB = parseFloat(document.querySelector('#inputB').value);
let inputC;


document.querySelector('#palyginti').addEventListener('click', function compare(inputA, inputB) {
    inputA = parseFloat(document.querySelector('#inputA').value);
    inputB = parseFloat(document.querySelector('#inputB').value);
    if (inputA>inputB)
        return console.log(inputA + ' yra didesnis');
    else if (inputA==inputB) {
        return console.log('abu skaiciai lygus');
    } else {
        return console.log(inputB + ' yra didesnis');
    }
});

// document.querySelector('#inputC').innerHTML=