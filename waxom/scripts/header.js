// 'use strict';

/*function toggleInput() {
	searchIcon.removeEventListener('click', toggleInput);

	if (input.style.transition) {
		input.style.transition = '';
	} else {
		input.style.transition = 'all .5s ease';
	}

	input.classList.toggle('show-input');
}*/

function showInput() {
	searchIcon.removeEventListener('click', showInput);
	input.classList.add('show-input');
	searchIcon.addEventListener('click', hideInput);
}

function hideInput() {
	searchIcon.removeEventListener('click', hideInput);
	input.classList.remove('show-input');
	searchIcon.addEventListener('click', showInput);
}

function showSlides(index) {
	if (index === slides.length) slideIndex = index = 0;
	if (index < 0) slideIndex = index = slides.length - 1;

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('image-block');
		slides[i].classList.add('image-block_none');
	}

	slides[index].classList.add('image-block');

	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace('active_dot', '');
	}

	dots[index].className = 'active_dot';
}

//Burger, menu, menu list items

const logoMenu = document.querySelector('.logo_and_menu'),
      burger = document.querySelector('.burger'),
      menu = document.querySelector('.menu'),
      navItems = document.querySelectorAll('nav li');

burger.addEventListener('click', function () {
	for (let i = 0; i < this.children.length; i++) {
		this.children[i].classList.toggle('toggle');
	}
});

burger.addEventListener('click', function () {
	if (menu.className === 'menu show-menu') {
		menu.classList.add('opacity-animation');
	} else {
		menu.classList.remove('opacity-animation');
	}

	logoMenu.classList.toggle('background-color');
	menu.classList.toggle('show-menu');
	document.body.classList.toggle('overflow-hidden');
});

burger.addEventListener('click', function () {
	navItems.forEach(function (item, index) {
		if (item.style.transition) {
			item.style.transition = ''; 
		} else {
			item.style.transition = `all .3s ${index/10}s`;
		}

		item.classList.toggle('move');
	});
});

// Form button, form input

const searchIcon = document.querySelector('header form div img'),
	  input = document.querySelector('header input');

/*searchIcon.addEventListener('click', function (event) {
	let clickTasearchIcon.addEventListener('click', showInput);
		}
	});
});*/

input.addEventListener('blur', function () {
	input.classList.remove('show-input');
	searchIcon.rget = event.target;

	input.addEventListener('blur', function (event) {
		if (clickTarget !== searchIcon) {
			input.classList.remove('show-input');
			addEventListener('click', showInput);
			searchIcon.removeEventListener('click', hideInput);
		}
	});
});

searchIcon.addEventListener('click', showInput);

// Slide images

const slides = document.querySelectorAll('.image-block_none'),
	  moveImgBtns =  document.querySelectorAll('.move_images-btn div'),
	  dots = document.querySelectorAll('.slideshow-container > div:last-child span');

let slideIndex = 0;

showSlides(slideIndex);

for (let i = 0; i < moveImgBtns.length; i++) {
	moveImgBtns[i].addEventListener('click', function () {
		if (i === 0) {
			showSlides(--slideIndex);
		} else {
			showSlides(++slideIndex);
		}
	});
}

for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click', function () {
		showSlides(slideIndex = i);
	});
}


