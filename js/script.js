$(document).ready(function(){
	$('a.gallery').colorbox();

	var options = { 
	'speed' : 500, 
	// 스피드
	'initTop': 250, 
	// 기본 top 위치
	'alwaysTop' : false, 
	// 항상고정 true , false 이동
	'default_x' : '#wrap' 
	//레어아웃이 가운데 정렬 일때 레이어가 붙는 아이디값
	}
	
	
	
	$('#floatdiv').Floater(options);
	
	$('#btn01').click(function(){
		$('html, body').animate({scrollTop: $('#main').offset().top-0},500);
	});
	$('#btn02').click(function(){
		$('html, body').animate({scrollTop: $('#profile').offset().top-0},500);
	});
	$('#btn03').click(function(){
		$('html, body').animate({scrollTop: $('#mobile').offset().top-0},500);
	});
	$('#btn04').click(function(){
		$('html, body').animate({scrollTop: $('#adaptive01').offset().top-0},500);
	});
	$('#btn05').click(function(){
		$('html, body').animate({scrollTop: $('#jQuery').offset().top-0},500);
	});
	$('#btn06').click(function(){
		$('html, body').animate({scrollTop: $('#css').offset().top-0},500);
	});
	$('#btn07').click(function(){
		$('html, body').animate({scrollTop: $('#shopping').offset().top-0},500);
	});
	$('#btn08').click(function(){
		$('html, body').animate({scrollTop: $('#graphic').offset().top-0},500);
	});
	$('#btn09').click(function(){
		$('html, body').animate({scrollTop: $('#epilogue').offset().top-0},500);
	});
	
	
	var menu = $('#menuWrap > ul > li');
	var contents = $('#contents > div');
	var btn = $('#floatdiv ul li');
	menu.click(function(event){
		event.preventDefault();
		var tg = $(this);
		var i = tg.index();
		var section = contents.eq(i);
		var tt = section.offset().top;
		$('html,body').stop().animate({scrollTop:tt});
	});
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		contents.each(function(){
			var tg = $(this);
			var i = tg.index();
			if(tg.offset().top <= sct){
				menu.removeClass('on');
				menu.eq(i).addClass('on');
				btn.removeClass('active');
				btn.eq(i).addClass('active');
			}
		});
	});
	
	var current = 1;
	var thumbListSize = 4;
	var thumbnail = $('#graphicBox');
	// #graphicBox = width : 580px;
	var prev = thumbnail.find('> .left');
	var next = thumbnail.find('> .right');
	var graphicImg = thumbnail.find('> .graphicImg > ul');
	// graphicImg = width: 1530px;
	var graphicImgWidth = thumbnail.find('> .graphicImg').width();
	// graphicImgWidth = width: 510px;
	var thumb = graphicImg.find('> .thumb');
	var maxSize = thumb.size();
	// maxSize = 12
	var image = $('.graphicImgBox #graphicImage > p');
	thumb.on('click',function(){
		image.css('display','none');
		var i = $(this).index();
		image.eq(i).css('display','block');
	});
	thumb.hover(
		function(){
			var tg = $(this);
			tg.css('opacity','0.3');
		},
		function(){
			var tg = $(this);
			tg.css('opacity','1');
		}
	);
	function listMove(){
		var tl = graphicImgWidth*current*-1;
		graphicImg.stop().animate({left:tl},{duration:500,easing:'easeOutCubic'});
	};
	next.on('click',function(){
		if(current < maxSize/thumbListSize - 1) current++;
		alert('페이지의 마지막 입니다.');
		listMove();
	});
	prev.on('click',function(){
		if(current > 0) current--;
		//alert(current);
		listMove();
	});
});












































