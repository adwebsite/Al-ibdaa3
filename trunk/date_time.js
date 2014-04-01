		jQuery.noConflict()(function($){
			$(document).ready(function() {

		function atlantic_get_time() {
		  	now=new Date();
	 	
		 	hour=now.getHours();
		 	min=now.getMinutes();
		 	sec=now.getSeconds();

			if (min<=9) { min="0"+min; }
			if (sec<=9) { sec="0"+sec; }

			if (hour>12) { hour=hour-12; add="pm"; }
				else { hour=hour; add="am"; }

			if (hour==12) { add="pm"; }
	
			time = ((hour<=9) ? "0"+hour : hour) + ":" + min + ":" + sec + " " + add;

			if (document.getElementById) { document.getElementById('timeNow').innerHTML = time; }
				else if (document.layers) {
					 document.layers.theTime.document.write(time);
					 document.layers.theTime.document.close(); }
		 
					 setTimeout(atlantic_get_time, 1000);
			}
			window.onload = atlantic_get_time;
		});
	});

