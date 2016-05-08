
$(document).ready(function() {

	

	//Dynamically assign height -----------------------------------------------------
	
	function sizeContent() {
    	var newHeight = $(window).height() - "3" + "px";
    	$(".bg_image").css("height", newHeight);

		}

	$(document).ready(sizeContent);

	//Every resize of window --------------------------------------------------------

	$(window).resize(sizeContent);


	// Slide in Nav for mobile -----------------------------------------------------
	
	$(".menu_icon, .close_mobile_nav").on("click", function() {
		$(".slide_in_navbar").toggle("slide");

		$(".menu_icon_outline").find(".bar1").toggleClass("line1");
		$(".menu_icon_outline").find(".bar3").toggleClass("line3");
		$(".menu_icon_outline").find(".bar2").toggleClass("line2");
	});


// ***********************************************************************************************
	
	//PayPal donate button

	$( ".nav_btns a" ).click(function() {
	  $( ".paypal" ).click();
	});


	// -----------------------

	
	

// ***********************************************************************************************


// ***********************************************************************************************
	
	//"MORE" button movement into up arrow

	$("a.more_about_btn").click(function() {
		$(this).find("span.up_btn").toggleClass("arrow_slide");
	});
	

// ***********************************************************************************************
	


	// Smooth scroll to an anchor tag on same page -----------------------------------------------------

	$(function() {
	   $('.main_nav a[href*=#]:not([href=#]), .slide_in_navbar a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      	if (target.length) {
			        $('html,body').animate({
			          scrollTop: target.offset().top -37
			        }, 800);
			        return false;
			     }
		    }
		});
	 });


// ***********************************************************************************************

	// $(document).on("scroll", function() {
	// 	if($(document).scrollTop()>150){
	// 		$(".animated").addClass("fadeOutUp").addClass("delayed").attr("id", "header_animation");
	// 	} else {
	// 		$(".delayed").removeClass("fadeOutUp").addClass("fadeInDown").attr("id","header_animation2");
	// 	}

	// });


	// flip image and info every-other post in Events Section

	$('.events_post:odd').find(".col-sm-6").first().addClass("col-sm-push-6");
	$('.events_post:odd').find(".col-sm-6").first().next().addClass("col-sm-pull-6");
	$('.events_post:odd').find(".events_info").addClass("odd_left_align");


	// hover affect

	$("#big_bttns input.big_donate").on("mouseover", function() {
		$(this).closest("#big_bttns").find(".donate").addClass("donate_hover_bg");
		$(this).closest("#big_bttns").find("input.big_donate").addClass("donate_a_hover_bg");
	});
	$("#big_bttns input.big_donate").on("mouseleave", function() {
		$(this).closest("#big_bttns").find(".donate").removeClass("donate_hover_bg");
		$(this).closest("#big_bttns").find("input.big_donate").removeClass("donate_a_hover_bg");
	});

	$("#big_bttns .get_help a").on("mouseover", function() {
		$(this).closest("#big_bttns").find(".get_help").addClass("get_help_hover_bg");
		$(this).closest("#big_bttns").find(".get_help a").addClass("get_help_a_hover_bg");
	});
	$("#big_bttns .get_help a").on("mouseleave", function() {
		$(this).closest("#big_bttns").find(".get_help").removeClass("get_help_hover_bg");
		$(this).closest("#big_bttns").find(".get_help a").removeClass("get_help_a_hover_bg");
	});


	// for mobile

	$("#big_bttns input.big_donate").on("click", function() {
		$(this).closest("#big_bttns").find(".donate").addClass("donate_hover_bg");
		$(this).closest("#big_bttns").find("input.big_donate").addClass("donate_a_hover_bg");
	});
	// $("#big_bttns input.big_donate").on("click", function() {
	// 	$(this).closest("#big_bttns").find(".donate").removeClass("donate_hover_bg");
	// 	$(this).closest("#big_bttns").find("input.big_donate").removeClass("donate_a_hover_bg");
	// });

	$("#big_bttns .get_help a").on("click", function() {
		$(this).closest("#big_bttns").find(".get_help").addClass("get_help_hover_bg");
		$(this).closest("#big_bttns").find(".get_help a").addClass("get_help_a_hover_bg");
	});
	// $("#big_bttns .get_help a").on("click", function() {
	// 	$(this).closest("#big_bttns").find(".get_help").removeClass("get_help_hover_bg");
	// 	$(this).closest("#big_bttns").find(".get_help a").removeClass("get_help_a_hover_bg");
	// });


	// carousel

	$(".remember_scrolling_img .item").first().addClass("active");


	// remembering Mikel Sub Section display/hide


	$('a.more_about_btn').on('click', function() {
		$(this).closest('.remembering_sub').find('.more_about_hidden').slideToggle();

	 });





	// form

	$(document).ready(function(){ 
	  $('form').find("input[type=textarea], input[type=password], textarea").each(function()
		  {
		      if(!$(this).val()) { 
		     $(this).attr("placeholder", "Message");
		  }
	  });

	  $('form').find("input[id=fields-name]").each(function()
		  {
		      if(!$(this).val()) { 
		     $(this).attr("placeholder", "Name");
		  }
	  });

	  $('form').find("input[id=fields-telephoneNumber]").each(function()
		  {
		      if(!$(this).val()) { 
		     $(this).attr("placeholder", "Phone");
		  }
	  });

	  $('form').find("input[id=fields-emailAddress]").each(function()
		  {
		      if(!$(this).val()) { 
		     $(this).attr("placeholder", "Email");
		  }
	  });


	  // get help form

	  $('form').find("input[id=fields-firstName]").each(function()
		  {
		      if(!$(this).val()) { 
		     $(this).attr("placeholder", "First Name");
		  }
	  });

	  $('form').find("input[id=fields-lastName]").each(function()
		  {
		      if(!$(this).val()) { 
		     $(this).attr("placeholder", "Last Name");
		  }
	  });

	  $('form').find("input[id=fields-address]").each(function()
		  {
		      if(!$(this).val()) { 
		     $(this).attr("placeholder", "Address");
		  }
	  });

	  $('form').find("input[id=fields-city]").each(function()
		  {
		      if(!$(this).val()) { 
		     $(this).attr("placeholder", "City");
		  }
	  });

	  $('form').find("input[id=fields-state]").each(function()
		  {
		      if(!$(this).val()) { 
		     $(this).attr("placeholder", "State");
		  }
	  });

	  $('form').find("input[id=fields-zipCode]").each(function()
		  {
		      if(!$(this).val()) { 
		     $(this).attr("placeholder", "Zip Code");
		  }
	  });







	});

});



















