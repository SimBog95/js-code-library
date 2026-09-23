// Elementor Image Carousel - Continually Animation Loop

<script>

(function ($) {
  function makeMarquee() {
    var $wrap = $('.logo-carousel .elementor-image-carousel');
    if (!$wrap.length || $wrap.data('gg-done')) return;

    // Grab only the real slides, ignore Slick's own clones
    var $original = $wrap.children(':not(.slick-cloned)').clone(true);

    if ($wrap.hasClass('slick-initialized')) {
      $wrap.slick('unslick');
    }

    $wrap.empty();
    $wrap.append($original.clone(true));
    $wrap.append($original.clone(true));

    $wrap.data('gg-done', true);
    $wrap.addClass('gg-marquee');
  }

  if (window.elementorFrontend && elementorFrontend.hooks) {
    elementorFrontend.hooks.addAction('frontend/element_ready/image-carousel.default', makeMarquee);
  }
  $(window).on('load', function () {
    setTimeout(makeMarquee, 700);
  });
})(jQuery);
	
</script>
