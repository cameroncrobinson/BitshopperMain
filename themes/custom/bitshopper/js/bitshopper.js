(function($) {
  // $("div.input-group").addClass(classname, "single wow fadeInRight animated");
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  function OnResizePull() {
    $(document).ready(function() {
      if (viewportWidth < 767) {
        $(".logo").removeClass("pull-left");
        console.log("small");
      } else if (viewportWidth > 767) {
        if (!$(".logo").hasClass("pull-left")) {
          $(".logo").addClass("pull-left");
          console.log("large");
        }
      }
    });
  }

  $(window).on("resize", OnResizePull);
})(jQuery);
