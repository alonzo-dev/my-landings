'use strict';

function addActive() {
	burger.classList.toggle('active');
	menuBody.classList.toggle('active');
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

	searchBtnIcon.removeEventListener('click', focusSearchInput);
	searchBtnIcon.addEventListener('click', unfocusSearchInput);
}

function unfocusSearchInput() {
	searchInput.blur();

	searchBtnIcon.removeEventListener('click', unfocusSearchInput);
	searchBtnIcon.addEventListener('click', focusSearchInput);
}

// Ibg ==========================================================================

function ibg(){
	let ibg = document.querySelectorAll(".ibg"); 
	for (var i = 0; i < ibg.length; i++) { 
		if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; 
		} 
	}
}

ibg();

// ===============================================================================

const burger = document.querySelector('.burger-icon'),
		menuBody = document.querySelector('.menu__body');

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

/*const logoImage = document.querySelector('.logo__img');
const upperHeader = document.querySelector('.header__upper-section');
lowerHeader.style.top = logoImage.height + getComputedStyle(upperHeader).paddingTop + getComputedStyle(upperHeader).paddingBottom + 'px';

console.log(lowerHeader.style.top);*/

$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1500,
		// easing: 'linear',
		// infinite: true,
		// initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 3000,
		// pauseOnFocus: true,
		pauseOnHover: false,
		// pauseOnDotsHover: false,
		// draggable: true,
		// swipe: true,
		// touchThreshold: 5,
		// touchMove: true,
		// waitForAnimate: true,
		// centerMode: false,
		// variableWidth: false,
		// rows: 1,
		// slidesPerRow: 1,
		// vertical: false,
		// verticalSwiping: false,
		// fade: false,
		// asNavFor: '.class',
		 responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}
		], 

		mobileFirst: true,
		// appendArrows: $(''),
		// appendDots: $('')
	});
});
