$(function() {
	$('.toggle').on('click', function() {
		if ($('.item').hasClass('active')) {
			$('.item').removeClass('active')
			$(this)
				.find('a')
				.html("<ion-icon name='menu' class='logo'></ion-icon>")
		} else {
			$('.item').addClass('active')
			$(this)
				.find('a')
				.html("<ion-icon name='close' class='logo'></ion-icon>")
		}
	})
})
