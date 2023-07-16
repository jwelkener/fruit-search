const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	let userInput = str.toLowerCase();


	for (let idx=0; idx<fruit.length; idx++) {
		let currentFruit = fruit[idx].toLowerCase();

		if (currentFruit.includes(userInput)) {
		results.push(fruit[idx]);
	}
	}

	return results;
}

function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);

	showSuggestions(results);
}

function showSuggestions(results) {
	const input = document.querySelector('#fruit');
	const suggestionsContainer = document.querySelector('.suggestions');
	const suggestionsList = suggestionsContainer.querySelector('ul');
  
	// Clear previous suggestions
	suggestionsList.innerHTML = '';
  
	if (results.length === 0) {
	  suggestionsContainer.style.display = 'none'; // Hide suggestions container if there are no results
	  return;
	}

  
	// Create HTML dropdown list
	results.forEach(function (result) {
	  const listItem = document.createElement('li');
	  listItem.textContent = result;
	  suggestionsList.appendChild(listItem);
	});
	
	input.parentNode.appendChild(suggestionsContainer);
	// suggestionsContainer.style.display = 'block'; // Show the suggestions container
  }

function highlightSuggestion(e) {
	let hoveredText = e.target;
}

function removeHighlight(e) {
	const unhoveredText = e.target;
	unhoveredText.style.backgroundColor = '';
}

function useSuggestion(e) {
	const selected = e.target.textContent;
	input.value = selected;

	suggestions.innerHTML = "";
}

function hideSuggestions(e) {
	const suggestionsContainer = document.querySelector('.suggestions');
	if (
		!e.target.closest('.suggestions') &&
		!e.target.closest('.search-container')
	  ){
		suggestionsContainer.style.dispay = 'none';
	  }
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('mouseover', highlightSuggestion);
suggestions.addEventListener('mouseout', removeHighlight);
suggestions.addEventListener('click', useSuggestion);
document.addEventListener('click', hideSuggestions);