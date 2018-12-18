(function($) {
  // $("div.input-group").addClass(classname, "single wow fadeInRight animated");//
  // logo responsiveness for mobile
  $(window)
    .on("resize", function() {
      var viewportWidth =
        window.innerWidth || document.documentElement.clientWidth;

      if ($(".logo").hasClass("pull-left")) {
        if (viewportWidth < 767) {
          $(".logo").removeClass("pull-left");
          console.log("small");
        }
      } else if (viewportWidth > 767) {
        if (!$(".logo").hasClass("pull-left")) {
          $(".logo").addClass("pull-left");
          console.log("large");
        }
      }
    })
    .resize();
  // $(window).on("resize", OnResizePull);
  $(".block-views-blockabout-us-block-1").addClass("col-md-3");
  $("#block-views-block-about-us-block-2").addClass("col-md-3");
  $("#block-views-block-social-media-block-1").addClass('col-md-3');
})(jQuery);
