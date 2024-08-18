let x = $("#demo1").offset().top;
let y = $("nav").outerHeight();
$(window).scroll(function () {
  if ($(window).scrollTop() > x - y) {
    $("nav").css("backgroundColor", "black");
    $(".div_arrow").fadeIn(500);
  } else {
    $("nav").css("backgroundColor", "transparent");
    $(".div_arrow").fadeOut(500);
  }
});
$(".div_arrow").click(function () {
  $("html,body").animate({ scrollTop: "0" }, 2000);
});
$("ul a").click(function () {
  var show = $(this).attr("href");

  let space = $(show).offset().top;
  $("html,body").animate({ scrollTop: space }, 5000);
});
$(document).ready(function () {
  $(".loooding").fadeOut(3000, function () {
    $(document.body).css({ overflowY: "visible" }, 1000);
  });
});
