$(function() {
	// Set Jumbotron to window height
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	$('#banner').css({
		'height' : windowHeight - "52",
		'width' : windowWidth - "0"
	});
	// stick navbar to top when past jumbotron
	$(window).scroll(function() {
		if ($(window).scrollTop() > $('#banner').outerHeight()) {
			$('.navbar').addClass("navbar-fixed-top");
		} else {
			$('.navbar').removeClass("navbar-fixed-top");
		}
	});
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
  	$('#portfolio .nav-tabs a').click(function(e) {
  		e.preventDefault();
  		$(this).tab('show');
  	});
  });
