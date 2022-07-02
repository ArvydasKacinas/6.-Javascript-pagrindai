let krastine1 = 10;
let krastine2 = 10;
let krastine3 = 11;

if(krastine1+krastine2>krastine3 && krastine1+krastine3>krastine2 && krastine2+krastine3>krastine1) {
    console.log('Trikampi imanoma sudaryti');
} else {
    console.log('Trikampio neimanoma sudaryti');
}

console.log('*ignoruoti, jeigu trikampio sudaryti neimanoma*');

let kvadratuA = krastine1*krastine1;
let kvadratuB = krastine2*krastine2;
let kvadratuC = krastine3*krastine3;

if (kvadratuC==kvadratuA+kvadratuB) {
    console.log('trikampis yra statusis');
} else if (kvadratuC<kvadratuA+kvadratuB) {
    console.log('trikampis yra smailusis');
} else {
    console.log('trikampis yra bukasis');
}

if(krastine1==krastine2 && krastine2==krastine3) {
    console.log('trikampis yra lygiakrastis');
} else if (krastine1==krastine2 && krastine2!==krastine3|| krastine1==krastine3 && krastine2!==krastine3|| krastine2==krastine3&& krastine1!==krastine3) {
    console.log('trikampis yra lygiasonis');
} else {
    console.log('trikampis yra ivairiakrastis');
}
