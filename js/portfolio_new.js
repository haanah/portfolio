$(function () {
	$('.top').click(function (event) {
		event.preventDefault();

		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});
	$('#toggle').on('click', function (event) {
		event.preventDefault();
		if ($('#menu').attr('class') == 'show') {
			$('#menu').removeClass('show');
		} else {
			$('#menu').addClass('show');
		};
	});
	$('#menu').on('click', function (event) {
		event.preventDefault();
		$('#menu').removeClass('show');
	});

	$('.imgInnersection2').hover(function () {
		$('.imgInnersection2 img').stop().animate({
			'margin-top': '-300px'
		}, 2000);
	}, function () {
		$('.imgInnersection2 img').stop().animate({
			'margin-top': '0'
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

});

