$(function(){

	if($("html").hasClass("ie9")){

		function DoRotate1(d) {
			"use strict";
		    $(".teamKraftt_load .circle .arc-1").css({
		        '-ms-transform': 'rotate(' + d + 'deg)',
		        'transform': 'rotate(' + d + 'deg)'
		    });
		}
		function AnimateRotate1(d){
			"use strict";
		    var elem = $(".teamKraftt_load .circle .arc-1");

		    $({deg: 0}).animate({deg: d}, {
		        duration: 3000,
		        step: function(now){
		            elem.css({
		                '-ms-transform': "rotate(" + now + "deg)",
		        		'transform': 'rotate(' + now + 'deg)'
		            });
		        }
		    });
		}
		function DoRotate2(d) {
			"use strict";
		    $(".teamKraftt_load .circle .arc-2").css({
		        '-ms-transform': 'rotate(' + d + 'deg)',
		        'transform': 'rotate(' + d + 'deg)'
		    });
		}
		function AnimateRotate2(d){
			"use strict";
		    var elem = $(".teamKraftt_load .circle .arc-2");

		    $({deg: 0}).animate({deg: d}, {
		        duration: 3000,
		        step: function(now){
		            elem.css({
		                '-ms-transform': "rotate(" + now + "deg)",
		        		'transform': 'rotate(' + now + 'deg)'
		            });
		        }
		    });
		}
		DoRotate1(0);
		AnimateRotate1(1215);
		DoRotate2(0);
		AnimateRotate2(-1215);

	}



	$(window).load(function(){
		"use strict";
	  $('.teamKraftt_load').fadeOut(400,function(){$(this).remove();});
	});

	var w  = $(window).width();
	var h = $(window).height();

	function portfolioStyle1(){
		"use strict";
		var w  = $(window).width();
		var h = $(window).height();
		if(w > 1024){
			for(var port = 0; port <= $(".portfolio-works .portfolio-work").length; port++){
				$(".portfolio-section .portfolio-works .portfolio-work").removeClass("w50");

				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(1)").addClass("w50");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(4)").addClass("w50");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(5)").addClass("portfolio-margin");

				$(".portfolio-works .portfolio-work").eq(port).addClass("portfolio-work-"+(port+1)).height($(".portfolio-works .portfolio-work").eq(port).width());
				$(".portfolio-works .portfolio-margin").each(function(){
					
					$(this).attr("style","height:"+$(this).width()+"px;margin-top:-"+$(this).width()+"px");

				});
				
				$(".portfolio-section .portfolio-works .portfolio-work-5").addClass("w50");
				$(".portfolio-section .portfolio-works .portfolio-work-8").addClass("w50");

				$(".portfolio-works .portfolio-work:nth-child("+(port+1)+") .portfolio-work-assets").height($(".portfolio-works .portfolio-work:nth-child("+(port+1)+")").height());
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info").attr("style","width:"+($(".portfolio-work:nth-child("+(port+1)+")").width() - 30)+"px;height:"+($(".portfolio-work:nth-child("+(port+1)+")").height() - 30)+"px;");
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+(($(".portfolio-work:nth-child("+(port+1)+")").height() - 30) - $(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
			}
		}else{
			$(".portfolio-works .portfolio-work").height($(".portfolio-works .portfolio-work").width());
			$(".portfolio-works .portfolio-work .portfolio-work-assets").height($(".portfolio-works .portfolio-work").height());
			$(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+($(".portfolio-works .portfolio-work .portfolio-work-info").height() - $(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
		}
	}

	function portfolioStyle2(){
		"use strict";
		var w  = $(window).width();
		var h = $(window).height();
		if(w > 1024){
			for(var port = 0; port <= $(".portfolio-works .portfolio-work").length; port++){
				$(".portfolio-section .portfolio-works .portfolio-work").removeClass("w50");

				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(1)").addClass("w50");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(8)").addClass("w50").addClass("portfolio-margin");

				$(".portfolio-works .portfolio-work").eq(port).addClass("portfolio-work-"+(port+1)).height($(".portfolio-works .portfolio-work").eq(port).width());
				$(".portfolio-works .portfolio-margin").each(function(){
					
					$(this).attr("style","height:"+$(this).width()+"px;margin-bottom:-"+$(this).width()/2+"px");

				});
				

				$(".portfolio-works .portfolio-work:nth-child("+(port+1)+") .portfolio-work-assets").height($(".portfolio-works .portfolio-work:nth-child("+(port+1)+")").height());
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info").attr("style","width:"+($(".portfolio-work:nth-child("+(port+1)+")").width() - 30)+"px;height:"+($(".portfolio-work:nth-child("+(port+1)+")").height() - 30)+"px;");
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+(($(".portfolio-work:nth-child("+(port+1)+")").height() - 30) - $(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
			}
		}else{
			$(".portfolio-works .portfolio-work").height($(".portfolio-works .portfolio-work").width());
			$(".portfolio-works .portfolio-work .portfolio-work-assets").height($(".portfolio-works .portfolio-work").height());
			$(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+($(".portfolio-works .portfolio-work .portfolio-work-info").height() - $(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
		}
	}

	function portfolioStyle3(){
		"use strict";
		var w  = $(window).width();
		var h = $(window).height();
		if(w > 1024){
			for(var port = 0; port <= $(".portfolio-works .portfolio-work").length; port++){
				$(".portfolio-section .portfolio-works .portfolio-work").removeClass("h50");

				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(1)").addClass("h50");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(3)").addClass("h50");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(5)").addClass("h50");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(5)").addClass("portfolio-margin");

				$(".portfolio-works .portfolio-work").eq(port).addClass("portfolio-work-"+(port+1)).height($(".portfolio-works .portfolio-work").eq(port).width());
				
				$(".portfolio-works .h50").each(function(){
					
					$(this).attr("style","height:"+(($(this).width()*0.3334)+$(this).width())+"px;");

				});

				$(".portfolio-works .portfolio-margin").each(function(){
					
					$(this).attr("style","height:"+$(this).width()+"px;margin-top:-"+($(this).width()*0.3334)+"px");

				});

				$(".portfolio-works .portfolio-margin.h50").each(function(){
					
					$(this).attr("style","height:"+(($(this).width()*0.3334)+$(this).width())+"px;margin-top:-"+($(this).width()*0.3334)+"px");

				});

				$(".portfolio-works .portfolio-work:nth-child("+(port+1)+") .portfolio-work-assets").height($(".portfolio-works .portfolio-work:nth-child("+(port+1)+")").height());
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info").attr("style","width:"+($(".portfolio-work:nth-child("+(port+1)+")").width() - 30)+"px;height:"+($(".portfolio-work:nth-child("+(port+1)+")").height() - 30)+"px;");
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+(($(".portfolio-work:nth-child("+(port+1)+")").height() - 30) - $(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
			}
		}else{
			$(".portfolio-works .portfolio-work").height($(".portfolio-works .portfolio-work").width());
			$(".portfolio-works .portfolio-work .portfolio-work-assets").height($(".portfolio-works .portfolio-work").height());
			$(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+($(".portfolio-works .portfolio-work .portfolio-work-info").height() - $(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
		}
	}


	$(window).resize(function() {
		"use strict";
		var wR  = $(window).width();
		var hR = $(window).height();
		if(wR < 1024){
			$('header').addClass('header-fixed');
			if($("body").hasClass("no-responsive")){
			}else{$(".header-content .nav .menu").height(hR);}
		}else{
			$('header').removeClass('header-fixed');
		}

		if($(".portfolio-section").hasClass("portfolio-style-1")){
			portfolioStyle1();
		}
		if($(".portfolio-section").hasClass("portfolio-style-2")){
			portfolioStyle2();
		}
		if($(".portfolio-section").hasClass("portfolio-style-3")){
			portfolioStyle3();
		}

	$(".FullWslider .slides").height(($(".FullWslider .slides").width()/2)+30);
	$(".blog-page .FullWslider .slides").height(parseInt(($(".FullWslider .slides").width()/1.666)));
	$(".map-section").height(($(".middle").width()/2));
	$(".team-section .team-peoples .team-people").height($(".team-section .team-peoples .team-people").width());
	$(".video .asset iframe").height(parseInt(($(".video .asset iframe").width()/1.666)));

		
	});

	if($(".portfolio-section").hasClass("portfolio-style-1")){
		portfolioStyle1();
	}
	if($(".portfolio-section").hasClass("portfolio-style-2")){
		portfolioStyle2();
	}
	if($(".portfolio-section").hasClass("portfolio-style-3")){
		portfolioStyle3();
	}

	
	$(".nav .menu li ul").addClass("drop-down");
	$(".nav .menu li ul").parent().addClass("have-drop");



	if(w < 1024){

		$(".nav .menu li.have-drop").append("<span class='icon'><i class='fa fa-angle-down'></i></span>");
		if($("body").hasClass("no-responsive")){
		}else{$(".header-content .nav .menu").height(h);}

		$('.header-content .menu li .icon').click(
		  function () {

		    $('ul', $(this).parent()).slideToggle();
		  }
		);

	}else{

		$(".nav .menu li.have-drop a").append("<span class='icon'><i class='fa fa-angle-down'></i></span>");

		$('.header-content .menu li').hover(
		  function () {
		    $('ul', this).show();
		  },
		  function () {
		    $('ul', this).hide();
		  }
		);

	}


	

	var denetle = 0;
	$(".sidebar-control").click(function(){
		$(this).toggleClass("active");
		if($("body").hasClass("sidebar-active")){
			$("body").removeClass("sidebar-active");
		}else{
			$("body").addClass("sidebar-active");
		}

		$(".slider .slides .slide").fadeOut().removeClass("active");
		$(".slider .slides .slide:first-child").fadeIn(400).addClass("active");
		
		setTimeout(function(){ denetle = 1; }, 100);
	});

	if($("div").hasClass("blog-sidebar")){
		setTimeout(function(){
			$(".slider .slides .slide").fadeOut().removeClass("active");
			$(".slider .slides .slide:first-child").fadeIn(400).addClass("active");
		}, 1000);
		
	}

	$(".middle").click(function(){
		"use strict";
		if(denetle != 0){
			if($("body").hasClass("sidebar-active")){
				$(".sidebar-control").toggleClass("active");
				$("body").removeClass("sidebar-active");
			}
			denetle = 0;
		}
			
	});
	


	
	
    
    $(".search").click(function(){
		$(".search-box").toggleClass("search-box-active");
    });
    $(".search-box-close").click(function(){
		$(".search-box").toggleClass("search-box-active");
    });
    
    	// widget sliders
    	$(".slider .arrow-right.slide-arrow").click(function(){
    		"use strict";
    		$(".slider").removeClass("active");
    		$(this).parent().addClass("active");
    		var last = $('.slider.active .slides .slide').last();
		    if($('.slider.active .slides .slide.active').is(last)) {
		        $('.slider.active .slides .slide.active').fadeOut(200).removeClass('active');
		    }
    		$(".slider.active .slides .slide.active").fadeOut(200).next().addClass("active").prev().removeClass("active");
    		if(!$(".slider.active .slides .slide").hasClass("active")){
		    	$('.slider.active .slides .slide:first-child').addClass("active");
    		}
    		$(".slider.active .slides .slide.active").fadeIn(400);
    	});

    	
    	$(".slider .arrow-left.slide-arrow").click(function(){
    		"use strict";
    		$(".slider").removeClass("active");
    		$(this).parent().addClass("active");
    		var first = $('.slider.active .slides .slide').first();
		    if($('.slider.active .slides .slide.active').is(first)) {
		        $('.slider.active .slides .slide.active').fadeOut(200).removeClass('active');
		    }
    		$(".slider.active .slides .slide.active").fadeOut(200).prev().addClass("active").next().removeClass("active");
    		if(!$(".slider.active .slides .slide").hasClass("active")){
		    	$('.slider.active .slides .slide:last-child').addClass("active");
    		}
    		$(".slider.active .slides .slide.active").fadeIn(400);
    	});


    	// full width sliders
    	$(".FullWslider .arrow-right.slide-arrow").click(function(){
    		"use strict";
    		$(".FullWslider").removeClass("active");
    		$(this).parent().addClass("active");
    		var last = $('.FullWslider.active .slides .slide').last();
		    if($('.FullWslider.active .slides .slide.active').is(last)) {
		        $('.FullWslider.active .slides .slide.active').fadeOut(200).removeClass('active');
		    }
    		$(".FullWslider.active .slides .slide.active").fadeOut(200).next().addClass("active").prev().removeClass("active");
    		if(!$(".FullWslider.active .slides .slide").hasClass("active")){
		    	$('.FullWslider.active .slides .slide:first-child').addClass("active");
    		}
    		$(".FullWslider.active .slides .slide.active").fadeIn(400);
    	});

    	
    	$(".FullWslider .arrow-left.slide-arrow").click(function(){
    		"use strict";
    		$(".FullWslider").removeClass("active");
    		$(this).parent().addClass("active");
    		var first = $('.FullWslider.active .slides .slide').first();
		    if($('.FullWslider.active .slides .slide.active').is(first)) {
		        $('.FullWslider.active .slides .slide.active').fadeOut(200).removeClass('active');
		    }
    		$(".FullWslider.active .slides .slide.active").fadeOut(200).prev().addClass("active").next().removeClass("active");
    		if(!$(".FullWslider.active .slides .slide").hasClass("active")){
		    	$('.FullWslider.active .slides .slide:last-child').addClass("active");
    		}
    		$(".FullWslider.active .slides .slide.active").fadeIn(400);
    	});

		  

	$('.sidebar-wrapper').perfectScrollbar({
  		wheelSpeed:2.5
	});


	$(".recent-tab-widget .recent-tab-contents .recent-tab-content").eq(0).addClass("active");
	$(".recent-tab-widget .recent-tab-nav div").eq(0).addClass("active");
	$(".recent-tab-widget .recent-tab-contents").height($(".recent-tab-widget .recent-tab-contents .recent-tab-content.active").height());
	for(var tes = 0; tes <= $(".recent-tab-widget .recent-tab-contents .recent-tab-content").length; tes++){
		$(".recent-tab-widget .recent-tab-contents .recent-tab-content").eq(tes).attr("style","left:"+tes*100+"%;");
	}

	$(".recent-tab-widget .recent-tab-nav div").click(function(){
		$(".recent-tab-widget .recent-tab-nav div").removeClass("active");
		$(this).addClass("active");
		$(".recent-tab-widget .recent-tab-contents .recent-tab-content").removeClass("active");
		var index = $(this).index();
		$(".recent-tab-widget .recent-tab-contents .recent-tab-content").eq(index).addClass("active");
		$(".recent-tab-widget .recent-tab-contents").height($(".recent-tab-widget .recent-tab-contents .recent-tab-content.active").height());
		$(".recent-tab-widget .recent-tab-contents").attr("style","left: -"+(index*100)+"%;height:"+$(".recent-tab-widget .recent-tab-contents .recent-tab-content.active").height()+"px;");
	});



	// Parallax Background Image Create
	function Createparallaxbg(parallaxImage){
		"use strict";
		var ParSecImg = $(parallaxImage).attr("data-image");
		$(parallaxImage).attr("style","background-image:url("+ParSecImg+");");	
	}
	
	// Parallax Background Image ATTR ADD
	function parallaxbg(position,parallaxImage){
		"use strict";
		var currentTop = $(window).scrollTop();
		var ParSecPT = $(position).position().top;
		if(currentTop > (ParSecPT-h)){

			$(parallaxImage).css({"background-position": "0px "+(currentTop - ParSecPT)/3+"px"});
				
		}
	}

	if($("div").hasClass("parallax-section")){
		Createparallaxbg(".parallax-section .parallax-image span");
	}

	if($("div").hasClass("funfact")){
		Createparallaxbg(".funfact");
	}



	for(var funD = 0; funD < $(".funfact-div").length; funD++){
		$(".funfact-div").eq(funD).addClass("funfact-div-"+(funD+1));
	}


	/* fixed sidebar for 321 and 363 line
	if($("div").hasClass("blog-sidebar") && w > 1024){
		var bsBottom = $(".blog-sidebar").offset().top + $(".blog-sidebar").height() - h;
	}
	*/

	if($("div").hasClass("info") && w > 1024){

		if($("div").hasClass("blog-single")){var binfoBottom1 = $(".blog-single .blog-post .info").offset().top - $(".blog-single .blog-post .info").height() + 120;}
	}

	function blogInfops(vara,info,post,asset){
		"use strict";

		var currentTop = $(window).scrollTop();
			if(currentTop > vara){
				if (currentTop < this.previousTop ) {

					
					if(currentTop > vara + ($(post).height() - $(info).height() - $(asset).height()) - 30){
						$(info).attr("style","top:"+($(post).height() - $(info).height() - $(asset).height() - 30)+"px;");
					}else{
						$(info).attr("style","top:"+(currentTop - vara)+"px");
					}
					
					
				}else{
					if(currentTop > vara + ($(post).height() - $(info).height() - $(asset).height() - 30)){
						$(info).attr("style","top:"+($(post).height() - $(info).height() - $(asset).height() - 30)+"px;");
					}else{
						$(info).attr("style","top:"+(currentTop - vara)+"px");
					}
				}
			}
			if(currentTop < 1){
				$(info).attr("style","top:0px;");
			}
	}

	$(window).bind('scroll', function () {
		"use strict";

		if($(".section").hasClass("parallax-section") && w > 1024){
			parallaxbg(".parallax-section",".parallax-section .parallax-image span");
		}
		if($("div").hasClass("funfact") && w > 1024){
			parallaxbg(".funfact",".funfact");
		}

		var currentTop = $(window).scrollTop();




		/* fixed sidebar for 321 and 363 line
		if($("div").hasClass("blog-sidebar") && w > 1024){
			if(currentTop > bsBottom){
				if(currentTop > bsBottom + ($(".blog-page").height() - $(".blog-sidebar").height())){
					$(".blog-sidebar").attr("style","top:"+($(".blog-page").height() - $(".blog-sidebar").height())+"px;");
				}else{
					$(".blog-sidebar").attr("style","top:"+(currentTop - bsBottom)+"px");
				}
			}
			if(currentTop < 1){
				$(".blog-sidebar").attr("style","top:0px;");
			}
		}*/

		if($("div").hasClass("info") && w > 1024){

			if($("div").hasClass("blog-single")){blogInfops(binfoBottom1,".blog-single .blog-post .info",".blog-single .blog-post",".blog-single .blog-post .asset");}

		}

		

		
		if(currentTop > 1){
			$('header').addClass('header-fixed');
			previousTop: 0;
			if (currentTop < this.previousTop ) {

				if(w > 1024){

					$(".sticky").attr("style","top:"+(currentTop)+"px;");
					$(".sticky").css({
						"transform":"translate(0px,-10px)",
						"-webkit-transform":"translate(0px,-10px)",
						"-ms-transform":"translate(0px,-10px)"
					})

				}

				

				$('header').addClass('header-visible');

			} else {
				if(w > 1024){

					$(".sticky").attr("style","top:"+(currentTop)+"px;");
					$(".sticky").css({
						"transform":"translate(0px,-70px)",
						"-webkit-transform":"translate(0px,-70px)",
						"-ms-transform":"translate(0px,-70px)"
					})
				}

		      $('header').removeClass('header-visible');

			}

			this.previousTop = currentTop;

		}else{
			if(w > 1024){
				$('header').removeClass('header-fixed');
			}
		}

		if($("div").hasClass("sticky-section") && w > 1024){
		var stickySection = $(".sticky-section .single-in");

		if(currentTop > 100){
			if(currentTop > (stickySection.height() - $(".sticky").height() - 90)){
				$(".sticky").attr("style","top:"+(stickySection.height() - $(".sticky").height() - 90)+"px;");
			}
		}
		if(currentTop < 90){
			$(".sticky").attr("style","top:30px;");
		}

		}

		
	
	});


	$(".toggle").click(function(){
		$(".logo").fadeToggle(400);
		$(".mobile-nav-active-logo").fadeToggle(400);
		$(".header-content").toggleClass("background-black");
		$(".header-content").toggleClass("background-white");
		$(this).toggleClass("color-white");
		$("i",this).toggleClass("fa-navicon fa-times")
		$(".header-content .nav .search").toggleClass("color-white");
		$(".menu").toggleClass("active");
	})


	$(".client-section .testimonial .testimonial-in").eq(0).addClass("active");
	$(".client-section .clients_pictures .clients_picture").eq(0).addClass("active");
	$(".client-section .testimonial").height($(".client-section .testimonial .testimonial-in.active").height());

	$(".client-section .clients_pictures .clients_picture").click(function(){
		$(".client-section .clients_pictures .clients_picture").removeClass("active");
		$(this).addClass("active");
		$(".client-section .testimonial .testimonial-in").removeClass("active");
		var index = $(this).index();
		$(".client-section .testimonial .testimonial-in").eq(index).addClass("active");
		$(".client-section .testimonial").height($(".client-section .testimonial .testimonial-in.active").height());
	});



	$(".parallax-section .parallax-in").attr("style","top:"+($(".parallax-section").height() - $(".parallax-section .parallax-in").height())/2+"px");

	
	function isotopeStyle1(){
		"use strict";
		if(w > 1024){


		for(var port = 0; port <= $(".portfolio-works .portfolio-work").length + 1; port++){

				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(3)").addClass("w50");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(6)").addClass("w50");
				

				$(".portfolio-works .portfolio-work").eq(port).addClass("portfolio-work-"+(port+1)).height($(".portfolio-works .portfolio-work").eq(port).width());
				
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(7)").addClass("w50 h300");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(4)").addClass("h600");
				
				
				$(".portfolio-works .portfolio-work:nth-child("+(port+1)+") .portfolio-work-assets").height($(".portfolio-works .portfolio-work:nth-child("+(port+1)+")").height());
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info").attr("style","width:"+($(".portfolio-work:nth-child("+(port+1)+")").width() - 30)+"px;height:"+($(".portfolio-work:nth-child("+(port+1)+")").height() - 30)+"px;");
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+(($(".portfolio-work:nth-child("+(port+1)+")").height() - 30) - $(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
			}
		}else{

			$(".portfolio-works .portfolio-work").height($(".portfolio-works .portfolio-work").width());
			$(".portfolio-works .portfolio-work .portfolio-work-assets").height($(".portfolio-works .portfolio-work").height());
			$(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+($(".portfolio-works .portfolio-work .portfolio-work-info").height() - $(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
		
		}

	}

	function isotopeStyle2(){
		"use strict";
		if(w > 1024){


		for(var port = 0; port <= $(".portfolio-works .portfolio-work").length + 1; port++){

				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(3)").addClass("w50 h300");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(2)").addClass("h600");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(4)").addClass("w50 h300");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(8)").addClass("w50 h300");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(11)").addClass("w50 h300");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(9)").addClass("h600");
				

				$(".portfolio-works .portfolio-work").eq(port).addClass("portfolio-work-"+(port+1)).height($(".portfolio-works .portfolio-work").eq(port).width());
				
				
				$(".portfolio-works .portfolio-work:nth-child("+(port+1)+") .portfolio-work-assets").height($(".portfolio-works .portfolio-work:nth-child("+(port+1)+")").height());
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info").attr("style","width:"+($(".portfolio-work:nth-child("+(port+1)+")").width() - 30)+"px;height:"+($(".portfolio-work:nth-child("+(port+1)+")").height() - 30)+"px;");
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+(($(".portfolio-work:nth-child("+(port+1)+")").height() - 30) - $(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
			}
		}else{

			$(".portfolio-works .portfolio-work").height($(".portfolio-works .portfolio-work").width());
			$(".portfolio-works .portfolio-work .portfolio-work-assets").height($(".portfolio-works .portfolio-work").height());
			$(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+($(".portfolio-works .portfolio-work .portfolio-work-info").height() - $(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
		
		}

	}

	function isotopeStyle3(){
		"use strict";
		if(w > 1024){


		for(var port = 0; port <= $(".portfolio-works .portfolio-work").length + 1; port++){

				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(2)").addClass("h50");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(4)").addClass("h50");
				$(".portfolio-section .portfolio-works .portfolio-work:nth-child(5)").addClass("h50");



				$(".portfolio-works .portfolio-work").eq(port).addClass("portfolio-work-"+(port+1)).height($(".portfolio-works .portfolio-work").eq(port).width());
				
				$(".portfolio-works .h50").each(function(){
					
					$(this).attr("style","height:"+(($(this).width()*0.3334)+$(this).width())+"px;");

				});
				
				$(".portfolio-works .portfolio-work:nth-child("+(port+1)+") .portfolio-work-assets").height($(".portfolio-works .portfolio-work:nth-child("+(port+1)+")").height());
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info").attr("style","width:"+($(".portfolio-work:nth-child("+(port+1)+")").width() - 30)+"px;height:"+($(".portfolio-work:nth-child("+(port+1)+")").height() - 30)+"px;");
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+(($(".portfolio-work:nth-child("+(port+1)+")").height() - 30) - $(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
			}
		}else{

			$(".portfolio-works .portfolio-work").height($(".portfolio-works .portfolio-work").width());
			$(".portfolio-works .portfolio-work .portfolio-work-assets").height($(".portfolio-works .portfolio-work").height());
			$(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+($(".portfolio-works .portfolio-work .portfolio-work-info").height() - $(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
		
		}

	}

	function isotopeStyle4(){
		"use strict";
		if(w > 1024){


		for(var port = 0; port <= $(".portfolio-works .portfolio-work").length + 1; port++){

				$(".portfolio-section .portfolio-works .portfolio-work").removeClass("h50").removeClass("w50");


				$(".portfolio-works .portfolio-work:nth-child("+(port+1)+")").attr("style","height:"+$(".portfolio-works .portfolio-work:nth-child("+(port+1)+")").width()+"px")

				$(".portfolio-works .portfolio-work:nth-child("+(port+1)+")").css({"margin-bottom":""+($(".portfolio-works").width() / 100)*2.5+"px"});
				
				$(".portfolio-works .portfolio-work").eq(port).addClass("portfolio-work-"+(port+1));
				

				$(".portfolio-works .portfolio-work:nth-child("+(port+1)+") .portfolio-work-assets").height($(".portfolio-works .portfolio-work:nth-child("+(port+1)+")").height());
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info").attr("style","width:"+($(".portfolio-work:nth-child("+(port+1)+")").width() - 30)+"px;height:"+($(".portfolio-work:nth-child("+(port+1)+")").height() - 30)+"px;");
				$(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+(($(".portfolio-work:nth-child("+(port+1)+")").height() - 30) - $(".portfolio-work:nth-child("+(port+1)+") .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
			}
		}else{

			$(".portfolio-works .portfolio-work").height($(".portfolio-works .portfolio-work").width());
			$(".portfolio-works .portfolio-work .portfolio-work-assets").height($(".portfolio-works .portfolio-work").height());
			$(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").attr("style","top:"+($(".portfolio-works .portfolio-work .portfolio-work-info").height() - $(".portfolio-works .portfolio-work .portfolio-work-info .portfolio-work-info-in").height())/2+"px");
		
		}

	}


	if($("#portfolio-isotope").hasClass("portfolio-isotope")){



		var $container = $('.portfolio-works');

		if($("html").hasClass("safari")){


			if($(".portfolio-isotope").hasClass("isotope-style-1")){
				isotopeStyle1();

				// initialize isotope
				$container.isotope({ 
					masonry: { 
						"columnWidth": (($(".portfolio-works").width() / 100)*25)
					},
					itemSelector: ".portfolio-work"
				});
			}


		}else{

			if($(".portfolio-isotope").hasClass("isotope-style-1")){
				isotopeStyle1();

				// initialize isotope
				$container.isotope({ 
					masonry: { "columnWidth": ".grid-sizer" },
					itemSelector: ".portfolio-work", 
					percentPosition: true
				});
			}

		}

		if($("html").hasClass("safari")){


			if($(".portfolio-isotope").hasClass("isotope-style-2")){
				isotopeStyle2();

				// initialize isotope
				$container.isotope({ 
					masonry: { 
						"columnWidth": (($(".portfolio-works").width() / 100)*25)
					},
					itemSelector: ".portfolio-work"
				});
			}


		}else{

			if($(".portfolio-isotope").hasClass("isotope-style-2")){
				isotopeStyle2();

				// initialize isotope
				$container.isotope({ 
					masonry: { "columnWidth": ".grid-sizer" },
					itemSelector: ".portfolio-work", 
					percentPosition: true
				});
			}

		}

		if($("html").hasClass("safari")){


			if($(".portfolio-isotope").hasClass("isotope-style-3")){
				isotopeStyle3();

				// initialize isotope
				$container.isotope({ 
					masonry: { 
						"columnWidth": (($(".portfolio-works").width() / 100)*33.333334)
					},
					itemSelector: ".portfolio-work"
				});
			}


		}else{

			if($(".portfolio-isotope").hasClass("isotope-style-3")){
				isotopeStyle3();

				// initialize isotope
				$container.isotope({ 
					masonry: { "columnWidth": ".grid-sizer" },
					itemSelector: ".portfolio-work", 
					percentPosition: true
				});
			}

		}

		


		if($("html").hasClass("safari")){

			if($(".portfolio-isotope").hasClass("isotope-style-4")){
				isotopeStyle4();

				// initialize isotope
				$container.isotope({ 
					masonry: { 
						"columnWidth": (($(".portfolio-works").width() / 100)*23.12555),
						"gutter": (($(".portfolio-works").width() / 100)*2.5)
					},
					itemSelector: ".portfolio-work"
				});
			}


		}else{

			if($(".portfolio-isotope").hasClass("isotope-style-4")){
				isotopeStyle4();

				// initialize isotope
				$container.isotope({ 
					masonry: { 
						columnWidth: ".grid-sizer",
						"gutter": ".gutter-sizer"
					},
					itemSelector: ".portfolio-work", 
					percentPosition: true
				});
			}

		}
		

		

		if($("html").hasClass("safari")){

			if($(".portfolio-isotope").hasClass("isotope-style-5")){
				isotopeStyle4();

				// initialize isotope
				$container.isotope({ 
					masonry: { 
						"columnWidth": (($(".portfolio-works").width() / 100)*23.12555),
						"gutter": (($(".portfolio-works").width() / 100)*2.5)
					},
					itemSelector: ".portfolio-work"
				});
			}


		}else{

			if($(".portfolio-isotope").hasClass("isotope-style-5")){
				isotopeStyle4();

				// initialize isotope
				$container.isotope({ 
					masonry: { 
						columnWidth: ".grid-sizer",
						"gutter": ".gutter-sizer"
					},
					itemSelector: ".portfolio-work", 
					percentPosition: true
				});
			}

		}

		if($("html").hasClass("safari")){

			if($(".portfolio-isotope").hasClass("isotope-style-6")){
				isotopeStyle4();

				// initialize isotope
				$container.isotope({ 
					masonry: { 
						"columnWidth": (($(".portfolio-works").width() / 100)*31.666667),
						"gutter": (($(".portfolio-works").width() / 100)*2.5)
					},
					itemSelector: ".portfolio-work"
				});
			}


		}else{

			if($(".portfolio-isotope").hasClass("isotope-style-6")){
				isotopeStyle4();

				// initialize isotope
				$container.isotope({ 
					masonry: { 
						columnWidth: ".grid-sizer",
						"gutter": ".gutter-sizer"
					},
					itemSelector: ".portfolio-work", 
					percentPosition: true
				});
			}

		}

		if($("html").hasClass("safari")){

			if($(".portfolio-isotope").hasClass("isotope-style-7")){
				isotopeStyle4();

				// initialize isotope
				$container.isotope({ 
					masonry: { 
						"columnWidth": (($(".portfolio-works").width() / 100)*31.666667),
						"gutter": (($(".portfolio-works").width() / 100)*2.5)
					},
					itemSelector: ".portfolio-work"
				});
			}


		}else{

			if($(".portfolio-isotope").hasClass("isotope-style-7")){
				isotopeStyle4();

				// initialize isotope
				$container.isotope({ 
					masonry: { 
						columnWidth: ".grid-sizer",
						"gutter": ".gutter-sizer"
					},
					itemSelector: ".portfolio-work", 
					percentPosition: true
				});
			}

		}

		


		
		
		$('.filters button:first-child').addClass('filter_current');
		// filter items when filter link is clicked
		$('.filters button').click(function(){
		  var selector = $(this).attr('data-filter');
		  $container.isotope({ filter: selector });
		  $(this).addClass('filter_current').siblings().removeClass('filter_current');
		  
		  return false;
		});


		
		$('.load-more a').on( 'click', function() {
			"use strict";
		    // create new item elements
		    var $elems = demoAdd1().add(demoAdd3()).add(demoAdd3()).add(demoAdd2());
		    // append elements to container
		    $container.append($elems);


			$(this).width($(this).width());
			$(this).html('<i style="margin:0;" class="fa fa-spin fa-spinner"></i>');


			$(".portfolio-works .portfolio-work.new").each(function(){
				$(this).height($(this).width());
				if($(".portfolio-isotope").hasClass("isotope-style-4") || $(".portfolio-isotope").hasClass("isotope-style-5") || $(".portfolio-isotope").hasClass("isotope-style-6") || $(".portfolio-isotope").hasClass("isotope-style-7")){
					$(this).css({"margin-bottom":""+($(this).parent().width() / 100)*2.5+"px"});
				}
				$(".portfolio-work-assets",this).height($(this).height());
				$(".portfolio-work-info",this).attr("style","width:"+($(this).width() - 30)+"px;height:"+($(this).height() - 30)+"px;");
				$(".portfolio-work-info .portfolio-work-info-in",this).attr("style","top:"+(($(this).height() - 30) - $(".portfolio-work-info .portfolio-work-info-in",this).height())/2+"px");
			})
			
			
			
			setTimeout(function(){
				$(".load-more a").html('<span>Load More</span><i class="fa fa-angle-right"></i>');
			},1000)
		      // add and lay out newly appended elements
			$container.isotope( 'appended', $elems );
		  
		  });

			$('.load-more a[href*=#]:not([href=#])').click(function() {
				"use strict";
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('body, html').animate({
			          scrollTop: target.offset().top - (h - ($(this).height()+$(this).height()))
			        }, 700);
			        return false;
			      }
			    }
			  });

		


		// NEW ITEM ADDCLASS NEW IMPORTANT PLEASE
		function demoAdd1() {
			"use strict";
		  var $demoitem = $('<div class="portfolio-work webdesign branding advertising"><div class="portfolio-work-assets"><img src="images/portfolio-demo/5.jpg" alt=""></div><a href=""><div class="portfolio-work-info"><div class="portfolio-work-info-in"><div class="portfolio-work-info-title">Avantgarde</div><div class="portfolio-work-info-category">Advertising , Branding , Web Design</div><div class="divider-half background-aqua"></div><div class="portfolio-work-info-description">How do you help a national retailer reach a younger audience? Together, we established a brand, digital and retail strategy around the world.</div></div></div></a></div>');
		  	
		  $demoitem.addClass("w50").addClass("new");

		  return $demoitem;
		}

		function demoAdd2() {
			"use strict";
		  var $demoitem = $('<div class="portfolio-work ecommerce branding"><div class="portfolio-work-assets"><img src="images/portfolio-demo/2.jpg" alt=""></div><a href=""><div class="portfolio-work-info"><div class="portfolio-work-info-in"><div class="portfolio-work-info-title">Logoland</div><div class="portfolio-work-info-category">eCommerce , Branding</div><div class="divider-half background-aqua"></div><div class="portfolio-work-info-description">We partnered with the team at Geox on a rebrand across all communications including a redesign of their eCommerce platform.</div></div></div></a></div>');
		  
		  $demoitem.addClass("h300").addClass("w50").addClass("new");
		  
		  return $demoitem;
		}

		function demoAdd3() {
			"use strict";
		  var $demoitem = $('<div class="portfolio-work ecommerce branding"><div class="portfolio-work-assets"><img src="images/portfolio-demo/1.jpg" alt=""></div><a href=""><div class="portfolio-work-info"><div class="portfolio-work-info-in"><div class="portfolio-work-info-title">Logoland</div><div class="portfolio-work-info-category">eCommerce , Branding</div><div class="divider-half background-aqua"></div><div class="portfolio-work-info-description">We partnered with the team at Geox on a rebrand across all communications including a redesign of their eCommerce platform.</div></div></div></a></div>');
		  
		  return $demoitem.addClass("new");
		}
  
	}



	// magnificPopup custom
	$('.single').magnificPopup({
	    delegate: 'a.img-link',
	    type: 'image',
	    mainClass: 'mfp-with-zoom mfp-img-mobile',
	    image: {
	      verticalFit: true,
	    },
	    gallery: {
	      enabled: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 230,
	      opener: function(element) {
	        return element.find('img');
	      }
	    }
    });
    
	$(".single a img").parent().addClass("img-link");

	/* Auto 50% or 100% Single Image
		
		for(var singA = 0; singA <= $(".single a img").parent().length; singA++){
			$(".single a img").parent().eq(singA).addClass("img-link-"+(singA+1));
			if($(".img-link-"+(singA+1)).width() <= ($(".single").width()/2)){
				$(".img-link-"+(singA+1)).addClass("ImageW50");
			}
			if($(".img-link-"+(singA+1)).width() >= ($(".single").width()/2)+1){
				$(".img-link-"+(singA+1)).addClass("ImageW100");
			}
		}

	*/
	
	if($("div").hasClass("FullWslider")){
		$(".FullWslider .slides .slide").fadeOut().removeClass("active");
		$(".FullWslider .slides .slide:first-child").fadeIn(400).addClass("active");
	}
	
	$(".map-section iframe,.asset iframe").attr("width","");
	$(".map-section iframe,.video .asset iframe").attr("height","");
	$(".FullWslider .slides").height(($(".FullWslider .slides").width()/2));
	$(".blog-page .FullWslider .slides").height(parseInt(($(".FullWslider .slides").width()/1.666)));
	$(".map-section,.map-section iframe").height(($(".middle").width()/2));
	$(".video .asset iframe").height(parseInt(($(".video .asset iframe").width()/1.666)));


	$(".post-nav div.post-share").click(function(){
		$(this).toggleClass("active");
	});84

	$(".skills").addClass("active")
	$(".skills .skill .skill-bar span").each(function(){
		$(this).attr("style","width:"+$(this).parent().attr("data-bar")+"%");
		$(this).append('<b>'+$(this).parent().attr("data-bar")+'%</b>');
	});
	setTimeout(function(){$(".skills .skill .skill-bar span b").attr("style","opacity:1;")}, 2000);

	$(".team-section .team-peoples .team-people").height($(".team-section .team-peoples .team-people").width());


	// Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // TODO: The rest of the code will go here...

    // Set up an event listener for the contact form.
	$(form).submit(function(event) {
		"use strict";
	    // Stop the browser from submitting the form.
	    event.preventDefault();

	    // Serialize the form data.
		var formData = $(form).serialize();
			// Submit the form using AJAX.
			$.ajax({
			    type: 'POST',
			    url: $(form).attr('action'),
			    data: formData
			}).done(function(response) {
			    // Make sure that the formMessages div has the 'success' class.
			    $(formMessages).removeClass('error');
			    $(formMessages).addClass('success');

			    // Set the message text.
			    $(formMessages).text(response);
			    
			}).fail(function(data) {
			    // Make sure that the formMessages div has the 'error' class.
			    $(formMessages).removeClass('success');
			    $(formMessages).addClass('error');

			    // Set the message text.
			    if (data.responseText !== '') {
			        $(formMessages).text(data.responseText);
			    } else {
			        $(formMessages).text('Oops! An error occured and your message could not be sent.');
			    }
			});

	    // TODO
	});




	
	



});


