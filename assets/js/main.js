/*
	Theory by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function ($) {

	// Breakpoints.
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function () {

		var $window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function () {
			window.setTimeout(function () {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function () {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Off-Canvas Navigation.

		// Navigation Panel.
		$(
				'<div id="navPanel">' +
				$('#nav').html() +
				'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'left'
			});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
		if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
			$('#navPanel')
			.css('transition', 'none');

	});

})(jQuery);

var countDownDate = new Date("Feb 7, 2021 22:37:25").getTime(); // +7h für Bangkok

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML ="The survey starts in: <b>"+ days + "</b> day <b>" + hours + "</b> hours <b>" + minutes + "</b> minutes <b>" + seconds + "</b> seconds ";
	
  console.log(document.getElementById("countdown").innerHTML)
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "You Can start the survey right now!";
  }
}, 1000);


	window.cookieconsent.initialise({
		"palette": {
			"popup": {
				"background": "#FFFFFF",
				"text": "#1C1C1C"
			},
			"button": {
				"background": "#A4A4A4"
			}
		},
		"theme": "edgeless",
		"position": "bottom",
		"content": {
			"message": "This site uses cookies. By using the website and its offers and continuing to navigate, you accept these cookies.",
			"dismiss": "Accept",
			"link": "Data Privacy",
			"href": "https://www.cookiesandyou.com/"
		}
	}); 