$(function () {
					$(window).scroll(function () {
						var scrollval = $(window).scrollTop();
						if(scrollval>=50)
						{
							$("#navBar").fadeOut();
						} else
						{
							$("#navBar").fadeIn();
						}
					});
				});
