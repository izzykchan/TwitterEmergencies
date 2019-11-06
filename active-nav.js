$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		// if (scrollDistance >= 850) {
		// 		$('nav').fadeIn("fast");
		// } else {
		// 		$('nav').fadeOut("fast");
		// }

		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('#navBar a.active').removeClass('active');
						$('#navBar a').eq(i).addClass('active');
				}
		});
}).scroll();
