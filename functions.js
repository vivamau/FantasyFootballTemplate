	    $logo = $("#logo");
	    $logoSmall = $("#logo-small");
	    $(window).scroll(function () {
		var e = $(this).scrollTop();
		if (e > 30) {
		        $logo.css("display","none");
				$logoSmall.css("display","block");
		} else {
			$logo.css("display","block");
			$logoSmall.css("display","none");
		}

});