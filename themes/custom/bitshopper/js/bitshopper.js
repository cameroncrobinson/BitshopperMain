(function ($) {
// $("div.input-group").addClass(classname, "single wow fadeInRight animated");
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

$(document).ready(function() {

  if (viewportWidth < 767) {
    $(".logo").removeClass("pull-left");
    console.log("small");
  }
  else {
    $(".logo").addClass("pull-left");
    console.log("large");
  }
});

$(window).resize(function(){
  if (viewportWidth < 767) {
    $(".logo").toggleClass("pull-left",addOrRemove);
    console.log("small");
  }
  else if (viewportWidth > 767) {
    $(".logo").toggleClass("pull-left",addOrRemove);
    console.log("large");
  }
});
}(jQuery));
