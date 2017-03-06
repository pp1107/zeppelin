$(document).ready(function() {
	$('.block2 .btn-basic').click(function(){
		$('.block3').toggle("slow");
	});
		$('.block4__btn').click(function(){
		$('.block5').toggle("slow");
	});
			$('.btn__block6').click(function(){
		$('.block7').toggle("slow");
	});
	$('.block12__btn').click(function(){
		$('.block13').toggle("slow");
	});
		$('.block10__btn').click(function(){
		$('.block11').toggle("slow");
	});
			$('.btn__map').click(function(){
		$('.block9').toggle("slow");
	});
	$('.owl-carousel').owlCarousel({
		loop:false,
		nav:false,
		margin:40,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
					nav:true,
				margin:0
			},
			768:{
				items:2,
				nav:true,
				margin:0
			},
			992:{
				items:3,
				nav:true,
				margin:0
			},
			1200:{
				items:4
			}
		}
	});
	$('.owl-carousel-partners').owlCarousel({
		loop:true,
		nav:true,
		margin:40,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});

	var screen = $(window)
		if (screen.width() > 767) {
			$(".block8__item").animated("zoomIn", "zoomOut");
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 95)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	});		
		};
	
	var screen = $(window)
	if (screen.width() >= 1200) {
		$('.block1__step ul li').animate('pulse');
	};

	var screen = $(window)
		if (screen.width() < 768) {

			$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 60)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	});

			$('.mobile-nav .page-scroll').click(function(){
				$(this).parent().parent().hide();
			});
	};

	$('.mobile-btn').click(function(){
		$('.mobile-btn').toggleClass('mobile-btn-active')
$('.mobile-nav').toggle('slow');
	});
}); 
