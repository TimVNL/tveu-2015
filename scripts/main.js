$(function() {
	// Set Start background images
	$(".banner-image").backstretch([
      "https://images.unsplash.com/38/awhCbhLqRceCdjcPQUnn_IMG_0249.jpg?q=80&fm=jpg&s=293cce57f99e5d60745e1da9da9db675"
    , "img/banner-bg-2.jpg"
  ], {duration: 4000, fade: 850});
	 // Skill Charts
	$('#skills .chart').easyPieChart({
		trackColor: '#eee',
		barColor: '#357ebd',
		scaleColor: false,
		lineWidth: 10,
		size: 150,
    onStep: function(from, to, percent) {
  	$(this.el).find('.percent').text(Math.round(percent));
  	}
  })
	// portfolio filter
	if ($('.isotope-container').length>0) {
				$(window).load(function() {
					$('.isotope-container').fadeIn();
					var $container = $('.isotope-container').isotope({
						itemSelector: '.isotope-item',
						layoutMode: 'fitRows',
						transitionDuration: '0',
						filter: "*"
					});
					// filter items on button click
					$('.portfolio-filter').on( 'click', 'ul.nav li a', function() {
						var filterValue = $(this).attr('data-filter');
						$(".portfolio-filter").find("li.active").removeClass("active");
						$(this).parent().addClass("active");
						$container.isotope({filter: filterValue,});
						return false;
					});
				});
			};
  });
