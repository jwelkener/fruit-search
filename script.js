const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('keyup', searchHandler);

function search(str) {
	let results = [];
	let userInput = str.toLowerCase();

	for (let idx=0; idx<fruit.length; idx++) {
		let currentFruit = fruit[idx];

		if (currentFruit.includes(userInput)) {
		results.push(fruit[idx]);
	}
	}

	return results;
}

function searchHandler(e) {
	// TODO
}

function showSuggestions(results, inputVal) {
	const suggestions = document.querySelector(`.suggestions ul`);
	suggestions.innerHTML = '';

	// if (results.length === 0) {
	// 	suggestions.style.display = 'none';
	// 	return;
	// } if no suggestions exist, dropdown is not displayed

	const dropDownHTML = results.map(result => `<li>$result</li>`).join('');
	suggestions.innerHTML = dropDownHTML;

	suggestions.style.display = 'block';
}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);