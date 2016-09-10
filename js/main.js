$(document).ready(function(){

	$('.my-countdown').countdown({
		until: $.countdown.UTCDate(
			-8, 2016, 10, 7, 0, 0, 0)
	});
});