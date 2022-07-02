function compare(skaicius1, skaicius2, skaicius3) {
	if (skaicius3 > skaicius2 && skaicius1 > skaicius3) {
		return skaicius1 + ' yra didziausias';
	} else if (skaicius2 > skaicius1 && skaicius2 > skaicius3) {
		return skaicius2 + ' yra didziausias';
	} else {
		return skaicius3 + ' yra didziausias';
	}
}

let skaicius1 = 10;
let skaicius2 = 20;
let skaicius3 = 30;
let rezultatas = compare(skaicius1, skaicius2, skaicius3);
console.log(rezultatas);