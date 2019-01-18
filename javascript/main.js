			function show_mon() {
				$(".mon").toggleClass("show hide");
			}
			function show_tue() {
				$(".tue").toggleClass("show hide");
			}
			function show_wed() {
				$(".wed").toggleClass("show hide");
			}
			function show_tuer() {
				$(".tuer").toggleClass("show hide");
			}
			function show_F() {
				$(".F").toggleClass("show hide");
			}

			if ($("html").hasClass("week3")||$("html").hasClass("week1")) {
				$(".up").addClass("underline");
			}else if ($("html").hasClass("week4")||$("html").hasClass("week2")) {
				$(".down").addClass("underline");
			}