$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-107 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Клик по гамбургеру на моб версии
	$('.nav-btn').click(function() {
		$('.menu').toggleClass('show');
	});
	$('.menu-list__item a').click(function() {
		$('.menu').removeClass('show');
	});

	// Инит фансибокса
	$('.fancybox').fancybox({
		margin: 0,
		padding: 0
	});

	// Слайдер проектов
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

	// Определение высоты проектов
	var projectHeight = $('.projects-slider-item').innerHeight();
	var projectHeightTtl = $('.projects-slider-item__ttl').innerHeight();
	$('.projects-slider-item__info').css('height', projectHeight - projectHeightTtl);

	// Наведение на специализацию
	$('.specialization__item_i1').mouseover(function() {
		$('.specialization__bg').css('background-image', 'url(img/specialization_img1.png)').fadeIn();
		$('.specialization__txt_i1').css('opacity', '1');
	});
	$('.specialization__item_i1').mouseout(function() {
		$('.specialization__bg').fadeOut();
		$('.specialization__txt_i1').css('opacity', '0');
	});
	$('.specialization__item_i2').mouseover(function() {
		$('.specialization__bg').css('background-image', 'url(img/specialization_img2.png)').fadeIn();
		$('.specialization__txt_i2').css('opacity', '1');
	});
	$('.specialization__item_i2').mouseout(function() {
		$('.specialization__bg').fadeOut();
		$('.specialization__txt_i2').css('opacity', '0');
	});
	$('.specialization__item_i3').mouseover(function() {
		$('.specialization__bg').css('background-image', 'url(img/specialization_img3.png)').fadeIn();
		$('.specialization__txt_i3').css('opacity', '1');
	});
	$('.specialization__item_i3').mouseout(function() {
		$('.specialization__bg').fadeOut();
		$('.specialization__txt_i3').css('opacity', '0');
	});

	// Тултип в тесте
	$('[data-toggle="tooltip"]').tooltip();

	// Пошаговая форма
	var steps = $(".test-wrap-form").children(".step"); // находим все шаги формы
	var numb = $(".test-wrap-list").children(".test-wrap-list__item"); // находим все шаги формы
	$(steps[0]).show(); // показываем первый шаг
	$(numb[0]).addClass('active');
	var current_step = 0; // задаем текущий шаг
	$(".test-wrap-form__btn.next").click(function(){	// Событие клика на ссылку "Следующий шаг"
			if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Следующий шаг"
				$(".submit").show().css('display', 'block'); // показываем кнопку "Регистрация"
			}
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг
	});
	function changeStep(i) { // функция смены шага
		$(steps).hide(); // скрываем все шаги
		$(steps[i]).show(); // показываем текущий
		$(numb).removeClass('active');
		$(numb[i]).addClass('active'); // показываем текущий
	}

	// Ресайз для блока технологий на главной
	var trigerHeight = $('.triger-bg__patern').innerHeight();
	$('.triger-bg').css('height', trigerHeight);
	$(window).on('resize', function() {
		var trigerHeight = $('.triger-bg__patern').innerHeight();
		$('.triger-bg').css('height', trigerHeight);
	});

	// Слайдеры на старнице проекта
	 $('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 361,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.details-tab').on('click', 'li:not(.active)', function() {
		console.log('1');
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.details-info').find('.tab-content').removeClass('active').eq($(this).index()).addClass('active');
	});

});
