function compare(skaicius11, skaicius22, skaicius33) {
	if (skaicius33 > skaicius22 && skaicius11 > skaicius33) {
		return skaicius11 + ' yra didziausias';
	} else if (skaicius22 > skaicius1 && skaicius22 > skaicius33) {
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