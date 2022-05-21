// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import { Swiper, Pagination, Scrollbar, Navigation, Controller, Autoplay } from 'swiper'
Swiper.use([ Pagination, Scrollbar, Navigation, Controller, Autoplay ])
document.addEventListener('DOMContentLoaded', () => {
	const sliderTop = new Swiper('.topSlider', {
		speed: 800,
		// autoHeight: true,
		loop: false,
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
			dragSize: 'auto',
		},


	})

	let cross = document.querySelector('.cross'),
			overlay = document.querySelector('.overlay'),
			hamburger = document.querySelector('.hamburger')
	if(hamburger !== null) {
		hamburger.addEventListener('click', ()=>{
			overlay.style.display = "flex"
			});
	}

	if(cross !== null) {
		cross.addEventListener('click', ()=>{
			overlay.style.display = "none"
			});
	}


	const videoSlider = new Swiper('.menuSlider', {
		spaceBetween: 15,
		speed: 600,
		freeMode: true,
		loop: false,
		initialSlide: 0,
		setWrapperSize: true,
		centeredSlides: false,
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},		
	})

	var tabNavs = document.querySelectorAll(".nav-tab");
	var tabPanes = document.querySelectorAll(".tab-pane");
  if(tabNavs !==null & tabPanes !==null) {
		tabClick() 
	}
	function tabClick() {
		for (var i = 0; i < tabNavs.length; i++) {

			tabNavs[i].addEventListener("click", function(e){
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");
	
				for (var j = 0; j < tabNavs.length; j++) {
					var contentAttr = tabPanes[j].getAttribute("data-tab-content");
	
					if (activeTabAttr === contentAttr) {
						tabNavs[j].classList.add("active");
						tabPanes[j].classList.add("active"); 
					} else {
						tabNavs[j].classList.remove("active");
						tabPanes[j].classList.remove("active");
					}
				};
			});
		}
	}
	

	

})
