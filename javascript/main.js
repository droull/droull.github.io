			function toggleweek(day) {
				if (day==1) {
					$(".mon").toggleClass("show hide");
					$(".monday").toggleClass("backlight");
				}else if (day==2) {
					$(".tue").toggleClass("show hide");
					$(".thuesday").toggleClass("backlight");
				}else if (day==3) {
					$(".wed").toggleClass("show hide");
					$(".wednesday").toggleClass("backlight");
				}else if (day==4) {
					$(".tuer").toggleClass("show hide");
					$(".thuersday").toggleClass("backlight");
				}else if (day==5) {
					$(".F").toggleClass("show hide");
					$(".friday").toggleClass("backlight");
				}
			}

			if ($("html").hasClass("week3")||$("html").hasClass("week1")) {
				$(".up").addClass("underline");
			}else if ($("html").hasClass("week4")||$("html").hasClass("week2")) {
				$(".down").addClass("underline");
			}

			function hide_all(argument) {
				$(".wrapper,.allready_be").toggleClass("hide show");
				
				/* On future
				if (argument==1) {
					$(".lorem").removeClass("hide");
				}else if (argument==2) {
					$(".rus").removeClass("hide")
				}else if (argument==3) {
					$(".lorem,.rus").addClass("hide");
				}*/
			}
