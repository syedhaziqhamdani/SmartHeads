/* dribbble widget */ 
		$.jribbble.getShotsByPlayerId('creativemints', function(playerShots){
			"use strict";
		   	var content = [];

			$.each(playerShots.shots, function (i, shot) {
				content.push('<div class="slide"><a href="' + shot.url + '" class="shot"><img src="' + shot.image_teaser_url + '" ');
				content.push('alt="' + shot.title + '"></a></div>');
			});

		$('.widget-content .dribbble-wrapper .slider .slides').html(content.join(''));
		}, { per_page: 4 , page: 1 });