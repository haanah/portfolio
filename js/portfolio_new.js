$(function () {
	$('.top').click(function (event) {
		event.preventDefault();

		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});
	
	/* 이미지 애니메이션 */
	$('.imgInnersection2').hover(function () {
		$('.imgInnersection2 img').stop().animate({
			'margin-top': '-300px'
		}, 2000);
	}, function () {
		$('.imgInnersection2 img').stop().animate({
			'margin-top': '0'
		}, 300);
	});
	$('.imgInnersection3').hover(function () {
		$('.imgInnersection3 img').stop().animate({
			'margin-top': '-975px'
		}, 3500);
	}, function () {
		$('.imgInnersection3 img').stop().animate({
			'margin-top': '0'
		}, 300);
	});
	$('.imgInnersection4').hover(function () {
		$('.imgInnersection4 img').stop().animate({
			'margin-left': '-1000px'
		}, 4000);
	}, function () {
		$('.imgInnersection4 img').stop().animate({
			'margin-left': '0'
		}, 300);
	});
	
	/* TOOLTIP start */
	var balloon = $('<div class="balloon"></div>').
		appendTo('body');
		function updateBalloonPosition(x,y){
			balloon.css({left: x+15, top: y});  // 마우스겹쳐짐 보완 x+15
		}
		function showBalloon(){
			balloon.stop().css('opacity',0).show().animate({opacity:1},1500);
			// opacity 0으로 안보이게 했다가 보여짐
		}
		function hideBalloon(){
			balloon.stop().animate({opacity:0},2000,function(){balloon.hide();});
			// animate 속성값 3가지를 넣음
		}
		$('.showBalloon').each(function(){
			var element = $(this);
			var text = element.attr('title');
			element.attr('title','');
			element.hover(
				function(event){
					balloon.text(text);
					updateBalloonPosition(event.pageX, event.pageY);
					showBalloon();     // event를 넣고 매개변수값 받음 
				},
				function(){
					hideBalloon();
				}
			);
			element.mousemove(function(event){
				updateBalloonPosition(event.pageX, event.pageY);
			});
		});
		/* TOOLTIP end */
	
	/* SKILL PERCENT start */
	$(window).on('scroll',$.throttle(1000/15,function(){	
		var sct = $(window).scrollTop();
		var $content = $('.text2-3'); 
		var $charts = $content.find('.skill');	
			
			if(sct >= 600 && sct <= 1200){
				activatePercent();
			}else{
				zeroPercent();
			};
			
		function activatePercent(){
			
			if($content.hasClass('active') == false){
				$charts.each(function(i){
					var $chart = $(this);
					var $chartBar = $chart.find('.skill_g')
						.css({width:'0%'});
					var $percentNumber = $chart.find('.skill_p .num');
					var percentData = $percentNumber.text();
					$percentNumber.text(0);
					$({percent:0}).delay(150*i).animate({percent:percentData},{
						duration: 1000,
						progress: function(){
							var now = this.percent;
							
							$chartBar.css({width:now+'%'});
							$percentNumber.text(Math.floor(now));					
						} 
					});
				});
			};
			$content.removeClass('unactive');
			$content.addClass('active');	
		};
			
		function zeroPercent(){
			
			if($content.hasClass('unactive') == false){
				$charts.each(function(){
					var $chart = $(this);
					var $chartBar = $chart.find('.skill_g')
						.css({width:'0%'});
					var $percentNumber = $chart.find('.skill_p .num');
					
					/* $percentNumber.text(0); */
				});
			};
			$content.removeClass('active');	
			$content.addClass('unactive');	
		};
	})); 
	/* SKILL PERCENT end */
	
	/* scroll slideDown start */
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var hello=$('#section1').offset();
		
		if(sct>hello.top-200){
			$('.text1').slideDown(1000);
		}else{
			$('.text1').slideUp(1000);
		}
	});
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var hello=$('#section2').offset();
		
		if(sct>hello.top-200){
			$('.text_s2').slideDown(1000);
		}else{
			$('.text_s2').slideUp(1000);
		}
	});
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var hello=$('#section3').offset();
		
		if(sct>hello.top-200){
			$('.text3').slideDown(1000);
		}else{
			$('.text3').slideUp(1000);
		}
	});
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var hello=$('#section4').offset();
		
		if(sct>hello.top-200){
			$('.p1_s4').slideDown(1000);
		}else{
			$('.p1_s4').slideUp(1000);
		}
	});
	
	/* DT,DD EVENT START */
	$('dt').on('click',function(){

		if($(this).next().css('display')=='none'){
			$('dd').slideUp(350);
			$(this).next().slideDown(350);
		}else{
			$(this).next().slideUp(350);
		}
		});

});

