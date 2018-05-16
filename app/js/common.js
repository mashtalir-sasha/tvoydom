$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-106 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Меню при скроле
	$(window).scroll(function(){
		var topline = $(window).scrollTop();
		if ( topline > 650 ) {
			$(".posf").addClass('show');
		} else {
			$(".posf").removeClass('show');
		};
	});

	// Клик по гамбургеру на моб версии
	$('.mob-mnu__humb').click(function() {
		$('.mob-mnu-list').toggleClass('show');
	});
	$('.mob-mnu__li').click(function() {
		$('.mob-mnu-list').removeClass('show');
	});

	// Формирование полей и заголовков формы в мод окне
	$('.modal').click(function(){
		var ttl = $(this).data('title');
		var subTtl = $(this).data('subtitle');
		var text = $(this).data('text');
		var btn = $(this).data('btn');
		var goal = $(this).data('goal');
		var subject = $(this).data('subject');
		$('.ttl').html(ttl);
		$('.subTtl').html(subTtl);
		$('.text').html(text);
		$('.btn').html(btn);
		$('.goal').val(goal);
		$('.subject').val(subject);
	});

	// Отправка формы
	$('form').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find('input[ name="goal"]').val();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open('<div class="thn"><h3>Заявка отправлена!</h3><p>С Вами свяжутся в ближайшее время.</p></div>');
				//gtag('event','submit',{'event_category':'submit','event_action':goalId});
				//fbq('track', 'Lead');
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox, .modal').fancybox({
		margin: 0,
		padding: 0
	});

	//Якорь наверх
	$("[href='#top']").click(function(e){
		$('html, body').stop().animate({
			scrollTop: $('#top').offset().top
		}, 300);
		e.preventDefault();
	});

	$('.projects-slider').slick({
		arrows: false,
		fade: true
	});
	$('.projects-slider-control .next-slide').on('click', function() {
		$('.projects-slider').slick('slickNext');
	});
	$('.projects-slider-control .prev-slide').on('click', function() {
		$('.projects-slider').slick('slickPrev');
	});

	var projectHeight = $('.projects-slider-item').innerHeight();
	var projectHeightTtl = $('.projects-slider-item__ttl').innerHeight();
	$('.projects-slider-item__info').css('height', projectHeight - projectHeightTtl);

	$('.specialization__item_i1').mouseover(function() {
		$('.specialization__bg').css('background-image', 'url(img/specialization_img1.png)');
	});
	$('.specialization__item_i1').mouseout(function() {
		$('.specialization__bg').css('background-image', '');
	});

	$('.specialization__item_i2').mouseover(function() {
		$('.specialization__bg').css('background-image', 'url(img/specialization_img2.png)');
	});
	$('.specialization__item_i2').mouseout(function() {
		$('.specialization__bg').css('background-image', '');
	});

	$('.specialization__item_i3').mouseover(function() {
		$('.specialization__bg').css('background-image', 'url(img/specialization_img3.png)');
	});
	$('.specialization__item_i3').mouseout(function() {
		$('.specialization__bg').css('background-image', '');
	});

});
