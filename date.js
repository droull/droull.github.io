			//Отображение недели (верхняя, нижняя)
	        var calStartDOW = 1;

	        function getWeekNum (day,month,year) { //Корректно определяем номер недели в году
	         if (calStartDOW == 0) day++; //Чтоб работало и для САЩ :)
	         month++; //в JS месяцы нумеруются с нуля!
	         var a = Math.floor((14-month) / 12);
	         var y = year + 4800 - a;
	         var m = month + 12 * a - 3;
	         var J = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y/4) - 
	          Math.floor(y/100) + Math.floor(y/400) - 32045;
	         d4 = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461;
	         var L = Math.floor(d4 / 1460);
	         var d1 = ((d4 - L) % 365) + L;
	         var week = Math.floor(d1/7) + 1;
	         if (week<10) week='0'+week; //Лидирующий ноль для недель 1-9
	         return week;
	        }
	        
	        var date = new Date();
	        var Y = date.getFullYear();
	        var M = date.getMonth();
	        var D = date.getDate();
	        var NW = getWeekNum(D,M,Y);
	        var week_number = NW%2;
	        