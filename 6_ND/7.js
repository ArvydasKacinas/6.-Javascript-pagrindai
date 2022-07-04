"use strict"

// let trumpena1 = 1/3;
// let trupmena2 = 4/3;

// let suma1 = trumpena1+trupmena2;

// console.log(suma1);

// data 07-04

let sveikojidalis1, skaitiklis1, vardiklis1;
let sveikojidalis2, skaitiklis2, vardiklis2;

sveikojidalis1= 1;
skaitiklis1= 1;
vardiklis1= 2;

sveikojidalis2= 2;
skaitiklis2= 1;
vardiklis2= 4;

let nskaitiklis1, nvardiklis1;
let nskaitiklis2, nvardiklis2;

nskaitiklis1=skaitiklis1+sveikojidalis1*vardiklis1;
nvardiklis1=vardiklis1;

nskaitiklis2=skaitiklis2+sveikojidalis2*vardiklis2;
nvardiklis2=vardiklis2;

console.log(nskaitiklis1);
console.log(nvardiklis1);
console.log(nskaitiklis2);
console.log(nvardiklis2);

nskaitiklis1 = nskaitiklis1*nvardiklis2;
nskaitiklis2 = nskaitiklis2*nvardiklis1;

nvardiklis1 = nvardiklis1*nvardiklis2;
nvardiklis2 = nvardiklis1;

console.log(nskaitiklis1);
console.log(nskaitiklis2);
console.log(nvardiklis1);
console.log(nvardiklis2);

let sudetasvardiklis, sudetasskaitiklis;

sudetasskaitiklis = nskaitiklis1+nskaitiklis2;
sudetasvardiklis = nvardiklis2;

console.log(sudetasskaitiklis);
console.log(sudetasvardiklis);

let sSveikojiDalis;
sSveikojiDalis = parseInt(sudetasskaitiklis/sudetasvardiklis);
sudetasskaitiklis = sudetasskaitiklis - sSveikojiDalis * sudetasvardiklis

console.log(sSveikojiDalis);
console.log(sudetasskaitiklis);
console.log(sudetasvardiklis);