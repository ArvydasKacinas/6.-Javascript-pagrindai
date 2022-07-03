function compare(skaicius11, skaicius22, skaicius33) {
	if (skaicius33 > skaicius22 && skaicius11 > skaicius33) {
		return skaicius11 + ' yra didziausias';
	} else if (skaicius22 > skaicius11 && skaicius22 > skaicius33) {
		return skaicius22 + ' yra didziausias';
	} else {
		return skaicius33 + ' yra didziausias';
	}
}

let skaicius11 = 10;
let skaicius22 = 20;
let skaicius33 = 30;
let rezultataslyginti = compare(skaicius11, skaicius22, skaicius33);
console.log(rezultataslyginti);

let inputA1 = parseFloat(document.querySelector('#inputA1').value);
let inputB2 = parseFloat(document.querySelector('#inputB2').value);
let inputC3 = parseFloat(document.querySelector('#inputC3').value);


document.querySelector('#lyginti').addEventListener('click', function compare(inputA1, inputB2, inputC3) {
    inputA1 = parseFloat(document.querySelector('#inputA1').value);
    inputB2 = parseFloat(document.querySelector('#inputB2').value);
	inputC3 = parseFloat(document.querySelector('#inputC3').value);
    if (inputA1>inputB2 && inputA1>inputC3) {
        return console.log(inputA1 + ' yra didziausias');
} 	else if (inputB2>inputA1 && inputB2>inputC3) {
        return console.log(inputB2 + ' yra didziausias');
}	else {
        return console.log(inputC3 + ' yra didziausias');
}});