$(document).ready(function() {
	$(function() {
    //caches a jQuery object containing the header element
    var header = $(".block__top");
    $(window).scroll(function() {
    	var scroll = $(window).scrollTop();

    	if (scroll >= 500) {
    		header.addClass("block__top__active");
    	} else {
    		header.removeClass("block__top__active");
    	}
    });
  });
	$('.toggle-td').click(function(){
		$(this).parent().parent().parent().toggleClass('active-table');
	});
	$('.sravnivanie').click(function(){
		$(this).parent().parent().parent().toggleClass('active-table');
	});
	$('.block2 .btn-basic').click(function(){
		$('.block3__js').toggle("slow");
	});
	$('.block4__btn').click(function(){
		$('.block5').toggle("slow");
	});
	$('.btn__block6').click(function(){
		$('.block7').toggle("slow");
	});
	$('.btn__map').click(function(){
		$('.block9').toggle("slow");
	});
	$('.block12__btn').click(function(){
		$('.block13').toggle("slow");
	});
	$('.block10__btn').click(function(){
		$('.block11').toggle("slow");
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
	$(function() {
		setTimeout(function() {
			$(".block7").hide()
		}, 500);
	});
	var screen = $(window)
	if (screen.width() > 767) {


$('.block1__step ul li:nth-child(1)').animated('animated pulse');
$('.block1__step ul li:nth-child(2)').animated('animated pulse');
$('.block1__step ul li:nth-child(3)').animated('animated pulse');
$('.block1__step ul li:nth-child(4)').animated('animated pulse');
$('.block1__step ul li:nth-child(5)').animated('animated pulse');

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
	if (screen.width() < 768) {

		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: ($($anchor.attr('href')).offset().top - 110)
			}, 1250, 'easeInOutExpo');
			event.preventDefault();
		});

		$('.mobile-nav .page-scroll').click(function(){
			$('.mobile-nav a').removeClass('active');
			$(this).addClass('active');
			$(this).parent().parent().parent().hide();
		});

	};

	$('.mobile-btn').click(function(){
		$('.mobile-btn').toggleClass('mobile-btn-active')
		$('.mobile-nav').toggle('slow');
	});
	$(".owl-item-btn").click(function() {
		$('.block__top__cart span').addClass('active').html(function(i, val) {
			$.ajax({
				url: '/path/to/script/',
				type: 'POST',
				data: {increment: true},
				success: function() { alert('Request has returned') }
			});
			return +val+1;
		});
	});
	$(".block6__add").click(function() {
		$('.block__top__cart span').addClass('active').html(function(i, val) {
			$.ajax({
				url: '/path/to/script/',
				type: 'POST',
				data: {increment: true},
				success: function() { alert('Request has returned') }
			});
			return +val+1;
		});
	});
	$('.mfp-close-thn').click(function(){
		$('.block__thank_you').removeClass('block__thank_you_active');
	});
						//E-mail Ajax Send
	$("#form1").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.block__thank_you').addClass('block__thank_you_active')
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
}); 
