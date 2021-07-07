$(function () {
	// $('.slider').slick({

	// })

	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));

		return {
			total,
			days,
			hours,
			minutes,
			seconds
		};
	}

	function initializeClock(id, endtime) {
		const clock = document.querySelector('.clock');
		const daysSpan = clock.querySelector('.clock__days');
		const hoursSpan = clock.querySelector('.clock__hours');
		const minutesSpan = clock.querySelector('.clock__minutes');
		const secondsSpan = clock.querySelector('.clock__seconds');

		function updateClock() {
			const t = getTimeRemaining(endtime);

			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}

		updateClock();
		const timeinterval = setInterval(updateClock, 1000);
	}

	const deadline = $('.clock').attr('data-time');
	initializeClock('clock', deadline);



	$('.burger, .menu a').on('click', function () {
		$('.header__list').toggleClass('header__list--active')
	});

	// $(".menu a, .logo").on("click", function (event) {
	// 	event.preventDefault();
	// 	var id = $(this).attr('href'),
	// 		top = $(id).offset().top;
	// 	$('body,html').animate({ scrollTop: top }, 1500);
	// });

	$(window).on("scroll", function () {
		var wn = $(window).scrollTop();
		if (wn > 120) {
			$(".header").css("background-color", "#000");
			$(".header__inner").css("height", "70px");
		}
		else {
			$(".header").css("background-color", "transparent");
			$(".header__inner").css("height", "110px");
		}
	});

	// $(window).on("scroll", function () {
	// 	if ($(window).scrollTop() > 50) {
	// 		$('.header__nav').addClass('header__nav--scroll')
	// 	}
	// 	else
	// 		$('.header__nav').removeClass('header__nav--scroll')
	// });

});

