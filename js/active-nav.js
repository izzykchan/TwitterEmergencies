 
 //SMOOTH SCROLL

//only loads when page is ready
$(document).ready(function(){
	var scrollLink = $('.scroll');

	// Smooth scrolling
	scrollLink.click(function(event){
		//event.preventDefault();
		$('body,html').animate({scrollTop: $(this.hash).offset().top}, 100 ) //scroll top references how far down the scroll bar is

	})

})

//ACTIVATE / DEACTIVATE NAVIGATION BUTTONS THROUGH SCROLL

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
				if ($(this).position().top <= scrollDistance+50) {
						$('#navBar a.active').removeClass('active');
						//console.log("deactivated")
						$('#navBar a').eq(i).addClass('active');
				}
		});
}).scroll();




//ACTIVE LINK SWITCHING (Doesnt work)
$(window).scroll(function(){
	var scrollbarLocation = $(this).scrollTop();

	console.log(scrollbarLocation)
})


//SCROLL PROGRESS INDICATION

//adapted from: https://www.w3schools.com/howto/howto_js_scroll_indicator.asp

//when page is scrolled, execute myScrollFunction
window.onscroll = function() {myScrollFunction()};

//what myScrollFunction does
function myScrollFunction(){
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}