// Fallback JS config and init file
fallback.config({
  "base": {
    "js": "scripts/"
  },
  "libs": {
    "modernizr": {
      "exports": "Modernizr",
      "urls": [
        "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min",
        "vendor/modernizr.min",
      ],
    },
    "jquery": {
      "alias": "$",
      "exports": "jQuery",
      "urls": [
        "//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min",
        "vendor/jquery.min.js"
      ],
    },
    "bootstrap": {
      "deps": [
        "modernizr",
        "$",
      ],
      "urls": [
        "//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min",
        "vendor/bootstrap.min",
      ],
    },
    "backstretch": {
      "deps": "$",
      "urls": [
        "https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js",
        "vendor/backstretch.min",
      ],
    },
    "isotope": {
      "deps": "$",
      "exports": "isotope",
      "urls": [
        "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/2.2.2/isotope.pkgd.min.js",
        "vendor/isotope.min"
      ],
    },
  },
});

// Load Twitter Bootstrap!
fallback.require(function(bootstrap) {
});
// backstretch
fallback.require(function(backstretch) {
  $(".banner-image").backstretch([
    "img/banner-bg-1.jpg", "img/banner-bg-2.jpg"
  ], {
    duration: 4000,
    fade: 850
  });
});
// portfolio filter
fallback.require(function(isotope) {
  if ($('.isotope-container').length > 0) {
    $(window).load(function() {
      $('.isotope-container').fadeIn();
      var $container = $('.isotope-container').isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
        transitionDuration: '0',
        filter: "*"
      });
      // filter items on button click
      $('.portfolio-filter').on('click', 'ul.nav li a', function() {
        var filterValue = $(this).attr('data-filter');
        $(".portfolio-filter").find("li.active").removeClass("active");
        $(this).parent().addClass("active");
        $container.isotope({
          filter: filterValue,
        });
        return false;
      });
    });
  };
});
