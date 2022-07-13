#! /usr/bin/env node
const fs = require("fs");
const fileName = process.argv[2];

let data;

try {
	data = fs
		.readFileSync(fileName, "utf8")
		.split(" ")
		.map((el) => parseInt(el));
} catch (error) {
	console.error(error.message);
}

function sortBubble(array) {
	const start = performance.now();
	let bulleComparaison = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
			bulleComparaison += 1;
		}
	}
	const duration = performance.now() - start;
	return `Tri à bulle: ${bulleComparaison} comparaisons    - ${duration.toFixed(
		4
	)}  - [${array}]`;
}

function sortInsertion(array) {
	const start = performance.now();
	let n = array.length;
	let insertionComparaison = 0;
	for (let i = 1; i < n; i++) {
		let current = array[i];
		let j = i - 1;
		while (j > -1 && current < array[j]) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = current;
		insertionComparaison += 1;
	}
	const duration = performance.now() - start;
	return `Tri à insertion: ${insertionComparaison} comparaisons - ${duration.toFixed(
		4
	)}  - [${array}]`;
}

function sortSelection(array) {
	const start = performance.now();
	let n = array.length;
	let selectionComparaison = 0;
	for (let i = 0; i < n; i++) {
		// Finding the smallest number in the subarray
		let min = i;
		for (let j = i + 1; j < n; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		if (min != i) {
			// Swapping the elements
			let tmp = array[i];
			array[i] = array[min];
			array[min] = tmp;
		}
		selectionComparaison += 1;
	}
	const duration = performance.now() - start;
	return `Tri à selection: ${selectionComparaison} comparaisons - ${duration.toFixed(
		4
	)}  - [${array}]`;
}

function sortQuick(array) {
	const start = performance.now();
	if (array.length <= 1) {
		return array;
	}

	const pivot = array[array.length - 1];
	const leftarray = [];
	const rightarray = [];
	let quickComparaison = 0;
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] < pivot) {
			leftarray.push(array[i]);
		} else {
			rightarray.push(array[i]);
		}

		quickComparaison += 1;
	}
	return [...sortQuick(leftarray), pivot, ...sortQuick(rightarray)];
	const duration = performance.now() - start;

	return `Tri rapide : ${quickComparaison} comparaisons     - ${duration.toFixed(
		4
	)} - [${array}]`;
}

function sortMethod(array) {
	const start = performance.now();
	array = array.sort((a, b) => a - b);
	const duration = performance.now() - start;
	return `Tri par méthode Sort            - ${duration.toFixed(
		2
	)} - : [${array}]`;
}

function sortFusion(array) {
	arrayLength = array.length;

	if (arrayLength > 1) {
		const middle = arrayLength / 2;
		const leftArray = array.slice(0, middle);
		const rightArray = array.slice(middle, arrayLength);

		sortFusion(leftArray);
		sortFusion(rightArray);

		let leftIndice = 0;
		let rightIndice = 0;
		let arrayIndice = 0;

		while (leftIndice < leftArray.length && rightIndice < rightArray.length) {
			if (leftArray[leftIndice] < rightArray[rightIndice]) {
				array[arrayIndice] = leftArray[leftIndice];
				leftIndice++;
			} else {
				array[arrayIndice] = rightArray[rightIndice];
				rightIndice++;
			}
			arrayIndice++;
		}
		while (leftIndice < leftArray.length) {
			array[arrayIndice] = leftArray[leftIndice];
			leftIndice++;
			arrayIndice++;
		}
		while (rightIndice < rightArray.length) {
			array[arrayIndice] = rightArray[rightIndice];
			rightIndice++;
			arrayIndice++;
		}
	}
	return array;
}

function perform() {
	// console.log(sortBubble(data));
	// console.log(sortInsertion(data));
	// console.log(sortSelection(data));
	// console.log(sortQuick(data));
	// console.log(sortMethod(data));
	console.log(sortFusion(data));
}

perform();
