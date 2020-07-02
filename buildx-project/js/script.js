'use strict';
function addActive() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('lock');
}

function hideSearchBtnIcon() {
	searchBtnIcon.classList.toggle('hide');
}

function toggleSearchBlock() {
	middleHeader.classList.toggle('header__middle-section_expanded');
	searchForm.classList.toggle('search__form_expanded');
	searchInput.classList.toggle('search__input_expanded');
	searchBtn.classList.toggle('search__btn_expanded');
	searchBtnImg.classList.toggle('search__img_expanded');
}

function focusSearchInput() {
	searchInput.focus();
}

function ibg(){
	let ibg = document.querySelectorAll(".ibg"); 
	for (var i = 0; i < ibg.length; i++) { 
		if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; 
		} 
	}
}

const burger = document.querySelector('.burger-icon'),
		menu = document.querySelector('.menu__body');

burger.addEventListener('click', addActive);
burger.addEventListener('click', hideSearchBtnIcon);

const searchBtnIcon = document.querySelector('.header__search-btn'),
		middleHeader = document.querySelector('.header__middle-section'),
		searchForm = document.querySelector('.search__form'),
		searchInput = document.querySelector('.search__input'),
		searchBtn = document.querySelector('.search__btn'),
		searchBtnImg = document.querySelector('.search__img');

searchBtnIcon.addEventListener('click', toggleSearchBlock);
searchBtnIcon.addEventListener('click', focusSearchInput);

ibg();

/*const logoImage = document.querySelector('.logo__img');
const upperHeader = document.querySelector('.header__upper-section');
lowerHeader.style.top = logoImage.height + getComputedStyle(upperHeader).paddingTop + getComputedStyle(upperHeader).paddingBottom + 'px';

console.log(lowerHeader.style.top);*/
