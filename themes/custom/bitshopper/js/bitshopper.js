(function($) {
  // $("div.input-group").addClass(classname, "single wow fadeInRight animated");
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
})(jQuery);
