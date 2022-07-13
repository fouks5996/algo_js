#! /usr/bin/env node

// **********************************************
// ******************* EXO 1 ********************
// **********************************************
function exo1(n, array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[i] + array[j] == n) return true;
		}
	}
	return false;
}

// console.log(exo1(17, [23, 10, 3, 7]));

// **********************************************
// ******************* EXO 2 ********************
// **********************************************

const exo2 = (array) => {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		let canSee = true;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] >= array[i]) canSee = false;
		}
		if (canSee == true) count++;
	}
	return count;
};

// console.log(exo2([90, 7, 65, 10, 52, 32, 40]));

// **********************************************
// ******************* EXO 3 ********************
// **********************************************
const exo3 = (n, array) => {
	for (let i = 0; i < array.length; i++) {
		let test = n - array[i];
		if (array.includes(test)) return true;
	}
	return false;
};

// console.log(exo3(17, [23, 5, 11, 12, 7]));

// **********************************************
// ******************* EXO 4 ********************
// **********************************************

function exo4(array) {
	let arr = [];
	for (let i = 0; i < array.length; i++) {
		arr.push(array[i] > array[i + 1]);
	}

	arr = arr.filter(Boolean);
	return `${arr.length + 1} immeubles sont orientés ouest`;
}

// console.log(exo4([3, 7, 8, 3, 6, 1, 2]));

// **********************************************
// ******************* EXO 5 ********************
// **********************************************

function exo5(n, arr) {
	return arr.some((item, i) => arr.slice(i + 1).includes(n - item));
}

// console.log(exo5(17, [23, 6, 21, 12, 7]));

// **********************************************
// ******************* EXO 6 ********************
// **********************************************

function exo6(array) {
	return array.every((el) => el < el + 1);
}

console.log(exo6([23, 5, 11, 12, 7]));
