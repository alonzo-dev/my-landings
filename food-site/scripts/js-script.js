/*
	Example: let myDog = 'Rover';

This is probably what you'll do most of the time, as it is quicker than doing 
the two actions on two separate lines.
*/

/* For these reasons and more, we recommend that you use let as much as possible 
in your code, rather than var. There is no reason to use var, unless you need 
to support old versions of Internet Explorer with your code (it doesn't support 
let until version 11; the modern Windows Edge browser supports let just fine).
*/

/*
 You may see some people using == and != in their tests for equality and 
 non-equality. These are valid operators in JavaScript, but they differ 
 from ===/!==. The former versions test whether the values are the same but not 
 whether the values' datatypes are the same. The latter, strict versions test 
 the equality of both the values and their datatypes. The strict versions tend 
 to result in fewer errors, so we recommend you use them.
*/

/*
Some browsers support automatic form data validation features, but since many 
don't, you are advised to not rely on those and implement your own validation 
checks.
*/

// Don't use HTML event handler attributes.

function showList(i) {
	for (let j = 0; j < showHideBtnsLength; j++) {
		if (lists[j].classList.contains('shown')) {
			if (j === i) continue;
			lists[j].classList.remove('shown');
		}
	}

	lists[i].classList.toggle('shown');
}

function rotateArrow(i){
	for (let j = 0; j < showHideBtnsLength; j++) {
		if (showHideBtns[j].firstElementChild.classList.contains('rotate')) {
			if (j === i) continue;
			showHideBtns[j].firstElementChild.classList.remove('rotate');
		}
	}

	showHideBtns[i].firstElementChild.classList.toggle('rotate');
}	

const searchIcon = document.querySelector('#search form div');
const searchInput = document.querySelector('#search form input');

const showHideBtns = document.querySelectorAll('.show-hide-list'),
	  showHideBtnsLength = showHideBtns.length,
	  lists = document.querySelectorAll('.show-hide-list ul');

searchIcon.addEventListener('click', function () {
	searchInput.focus();
});

for (let i = 0; i < showHideBtnsLength; i++) {
	showHideBtns[i].addEventListener('click', function(){
		showList(i);
		rotateArrow(i);
	});
}


