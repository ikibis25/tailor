/*---------------------------------
[Master Javascript]

Project: Tailor

-------------------------------------------------------------------*/
(function($) {
	"use strict";
	var Tailor = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function() {
			if (!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}
			/*-------------- Tailor Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.Homeslider();
			this.History_Crousel();
			this.Testimonial_Carousel();
			this.Responsive_menu();
			this.Dropdown_Menu();
			this.Datepicker();
			this.Testimonial();
			this.countint_up();
			this.Gallery();
			this.Price_Filter();
			this.wowanimation();
			this.MailFunction();
			this.Selectpicker();
			this.checkout_table();
			this.product_tabs();
			this.product_carousel();
			this.loginpopup();
		},
		/*-------------- Tailor Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function() {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if (rtl_attr) {
				$('html').find('body').addClass("rtl");
			}
		},
		//home slider
		Homeslider:function(){
			if($(".tl_home_slider").length > 0){
				$('.tl_home_slider').owlCarousel({
					loop:true,
					margin:0,
					items:1,
					autoplay:false,
					autoplayTimeout:3000,
					autoplaySpeed:1500,
					smartSpeed:1500,
					animateIn:"slidein",
					animateOut:"zoom_out",
					dots:false,
					nav:true,
					navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:1
						},
						768:{
							items:1
						},
						1000:{
							items:1
						}
					}
				})
			}
		},
		//history carousel
		History_Crousel:function(){
			if($(".history_crousel, .slider-nav").length > 0){
				$('.history_crousel').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					asNavFor: '.slider-nav'
				});
				$('.slider-nav').slick({
				  slidesToShow: 3,
				  slidesToScroll: 1,
				  asNavFor: '.history_crousel',
				  dots: false,
				  arrows: true,
				  centerMode: true,
				  focusOnSelect: true
				});
			}
		},	
		//Testimonial carousel
		Testimonial_Carousel:function(){
			if($(".testimonial_carousel").length > 0){
				$('.testimonial_carousel').owlCarousel({
					loop:true,
					margin:15,
					items:2,
					autoplay:false,
					autoplayTimeout:3000,
					autoplaySpeed:1500,
					smartSpeed:1000,
					animateIn:"slidein",
					animateOut:"zoom_out",
					dots:true,
					nav:false,
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:1
						},
						768:{
							items:1
						},
						1000:{
							items:2
						}
					}
				})
			}
		},
		//Responsive Menu
		Responsive_menu: function() {
			$(".nav_toggle").on('click',function(){
				$(this).toggleClass("toggle_open");
				$(".header_right_menu").toggleClass("menu_open");
			});
		},
		//dropdown menu
		Dropdown_Menu: function (){
			if ($(window).width () <= 767){
				$(".header_right_menu ul li ul.sub-menu").parents("li").addClass("dropdown_toggle");
				$(".dropdown_toggle").append("<span class='caret_down'></span>");
				$(".caret_down").on("click",function(){
					$(this).toggleClass("caret_up");
					$(this).prev("ul").slideToggle();
					//$('.caret_down').not(this).prev("ul").slideUp();
					//$('.caret_down').not(this).removeClass("caret_up");
				});
			}
			else {
				
			}
		},
		//Datepicker
		Datepicker: function() {
			if($(".datepicker").length > 0){
				$(".datepicker").datepicker({
					dateFormat: "dd-mm-yy"
				});
			}
		},
		
		//Testimonialcrousel
		Testimonial: function() {
			if($(".tr_testimonial_crousel").length > 0){
				$('.tr_testimonial_crousel').owlCarousel({
					loop:true,
					margin:5,
					items:1,
					autoplay:false,
					autoplayTimeout:2500,
					autoplaySpeed:1500,
					smartSpeed:1500,
					animateIn:"zoom",
					animateOut:"zoom_out",
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:1
						},
						768:{
							items:1
						}
					}
				})
			}
		},
		//counter 
		countint_up:function(){
			if($('.counter_number').length > 0){
				$('.counter_number').appear(function() {
					$('.counter_number').each(count);
					  function count(options) {
						var $this = $(this);
						options = $.extend({}, options || {}, $this.data('countToOptions') || {});
						$this.countTo(options);
					}
				});
			}
		},
		//Gallery
		Gallery:function(){
			//main gallery of gallery page
			if($('.popup_gallery').length > 0){
				$('.popup_gallery').magnificPopup({
					delegate: '.popup_icon',
					type: 'image',
					tLoading: '../images/loader.gif',
					removalDelay: 300,
					mainClass: 'image_zoom',
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
					},
					image: {
						tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
						titleSrc: function(item) {
							return item.el.attr('title') + '<small></small>';
						}
					}
				});
			}
		},
		//animation on page scroll
		Price_Filter:function(){
			$( ".slider_range" ).slider({
				range: true,
				min: 0,
				max: 500,
				values: [ 50, 250 ],
				slide: function( event, ui ) {
				$( ".filter_amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
				}
			});
			$( ".filter_amount" ).val( "$" + $( ".slider_range" ).slider( "values", 0 ) +
			" - $" + $( ".slider_range" ).slider( "values", 1 ) );
		},	
		//animation on page scroll
		wowanimation:function(){
			var wow = new WOW({
				boxClass:     'wow',      // default
				animateClass: 'animated', // default
				offset:       0,          // default
				mobile:       true,       // default
				live:         true        // default
			})
			wow.init();
		},
		//contact form 
		MailFunction: function(){
        		function checkRequire(formId , targetResp){
		targetResp.html('');
		var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
		var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
		var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
		var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
		var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
		var check = 0;
		$('#er_msg').remove();
		var target = (typeof formId == 'object')? $(formId):$('#'+formId);
		target.find('input , textarea , select').each(function(){
			if($(this).hasClass('require')){
				if($(this).val().trim() == ''){
					check = 1;
					$(this).focus();
					targetResp.html('You missed out some fields.');
					$(this).addClass('error');
					return false;
				}else{
					$(this).removeClass('error');
				}
			}
			if($(this).val().trim() != ''){
				var valid = $(this).attr('data-valid');
				if(typeof valid != 'undefined'){
					if(!eval(valid).test($(this).val().trim())){
						$(this).addClass('error');
						$(this).focus();
						check = 1;
						targetResp.html($(this).attr('data-error'));
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
			}
		});
		return check;
	}
	$(".submitForm").on("click", function() {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var check = checkRequire(targetForm , errroTarget);
		if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			formDetail.append('form_type' , _this.attr('data-form-type'));
			$.ajax({
				method : 'post',
				url : 'ajax.php',
				data:formDetail,
				cache:false,
				contentType: false,
				processData: false
			}).done(function(resp){
				if(resp == 1){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
				}
			});
		}
	});
        	},
		//select picker
		Selectpicker:function() {
			//selectpicker
			$(".select_wrapper select").each(function(){
				$(this).after("<span class='select_holder'></span>");
			});
			$(".select_wrapper select").change(function(){
				var selectedOption = $(this).find(":selected").text();
				$(this).next(".select_holder").text(selectedOption);
			}).trigger('change');
		},
		//Checkout Table
		checkout_table:function() {
			$(".checkout_table .close_pro").on('click', function(){
				//$(this).parents("tr").css("display", "none");
				$(this).parents("tr").fadeOut(500);
			});
		},
		//Checkout Table
		product_tabs:function() {
			$('ul.tabs li').click(function(){
				var tab_id = $(this).attr('data-tab');
				$('ul.tabs li').removeClass('current');
				$(this).addClass('current');
				$('.tab_content').removeClass('current');
				$("#"+tab_id).addClass('current');
			});
		},
		//Product carousel
		product_carousel:function(){
			if($(".pro_slides_carousel, .pro_slider_thumbs").length > 0){
				$('.pro_slides_carousel').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					asNavFor: '.pro_slider_thumbs'
				});
				$('.pro_slider_thumbs').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.pro_slides_carousel',
					dots: false,
					arrows: true,
					centerMode: true,
					focusOnSelect: true,
					draggable: false
				});
			}
		},
		//login popup js
		loginpopup:function(){
			$("body .login_signup_popup").next("div").wrapInner("<div class='content_wrap_inner'></div>");
			
			$(".login_popup").on('click', function(){
				$(".login_signup_popup").addClass("open_popup");
				$(".content_wrap_inner").addClass("blur");
			});
			$(".close_popup").on('click', function(){
				$(this).parents (".login_signup_popup").removeClass("open_popup");
				$(".content_wrap_inner").removeClass("blur");
			});
		},
	};
	
	Tailor.init();
	
	//window load function
	$(window).load(function(){
		$(".preloader").fadeOut("slow").delay("600");
	});
	//window scroll
	// $(window).bind("scroll", function(){
		// if ($(this).scrollTop() > 100) {
			// $(".ad_header_section").addClass("fixed_menu");
		// }
		// else{
			// $(".ad_header_section").removeClass("fixed_menu");
		// }
	// });

})(jQuery);
