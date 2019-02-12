$(function () {
	$('.top').click(function (event) {
		event.preventDefault();

		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});
	$('#toggle').on('click', function(event){
		event.preventDefault();
		if($('#menu').attr('class') == 'show'){
			$('#menu').removeClass('show');
		}else{
			$('#menu').addClass('show');
		};
	});
	$('#menu').on('click',function(event){
		event.preventDefault();
		$('#menu').removeClass('show');
	});
	$('.icon .tel').on('mouseenter', function () {
		$('.phone').css("display", "block");
	});

	$('.icon .tel').on('mouseleave', function () {
		$('.phone').css("display", "none");
	});
	$('.icon .mail').on('mouseenter', function () {
		$('.email').css("display", "block");
	});
	$('.icon .mail').on('mouseleave', function () {
		$('.email').css("display", "none");
	});
	$('.icon .sns').on('mouseenter', function () {
		$('.insta').css("display", "block");
	});
	$('.icon .sns').on('mouseleave', function () {
		$('.insta').css("display", "none");
	});

	var Num = $('.wrap').find('.wrap>div').length; /* li 갯수 구하기 */
	var imgW = $('.wrap').find('.wrap>div').width(); /* li 넓이 구하기 */
	$('.wrap').width(Num * imgW);
	/* li 부모요소인 ul 넓이 구하기 */
	$('.next').on('click', function (event) {
		event.preventDefault();
		$('.wrap').animate({
			left: -imgW
		}, 0, function () {
			$('.wrap').children().eq(0).appendTo($('.wrap'));
			$('.wrap').css('left', 0);
		});
	});

	$('.prev').on('click', function (event) {
		event.preventDefault();
		$('.wrap').children().eq(Num - 1).prependTo($('.wrap'));
		$('.wrap').css('left', -imgW);
		$('.wrap').animate({
			'left': '0'
		}, 300);
	});

});


/* ul을 이동시키려면 position:absolute 해줘야 함 */
