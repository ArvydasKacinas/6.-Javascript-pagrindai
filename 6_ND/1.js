"use strict"

let skaicius1 = 2;
let skaicius2 = 3;
let skaicius3 = 4;
let skaicius4 = 5;
let suma = skaicius1+skaicius2+skaicius3+skaicius4;
let sandauga = skaicius1*skaicius2*skaicius3*skaicius4;

console.log(skaicius1);
console.log(skaicius2);
console.log(skaicius3);
console.log(skaicius4);
console.log(suma);
console.log(sandauga);

let temp;

temp = skaicius1;
skaicius1 = skaicius2;
skaicius2 = temp;

console.log(`${skaicius1}`);
console.log(`${skaicius2}`);

[skaicius3, skaicius4] = [skaicius4, skaicius3];
console.log(`${skaicius3}`);
console.log(`${skaicius4}`);

console.log(`${skaicius1}`);
console.log(`${skaicius2}`);
console.log(`${skaicius3}`);
console.log(`${skaicius4}`);

let maxSkaicius = Number.MAX_VALUE;

console.log(maxSkaicius);

let skaicius5 = 6;
let skaicius6 = 7;

skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
skaicius5 = skaicius5 ^ skaicius6;

console.log(`${skaicius5}`);
console.log(`${skaicius6}`);

document.querySelector('#rezultatas').innerHTML=skaicius5 + ' ir ' + skaicius6;
