// JavaScript Document<script>
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 275) {
      $(".bg-light").css("cssText", "background: 	white !important;");
      $(".nav-link").css("cssText", "color: 	#656565 !important;");
      $(".nr1").css("cssText", "border-bottom: 2px solid #656565")
    } else {
      $(".bg-light").css("cssText", "background: 	#0d0c0c !important;", "color:white");
      $(".nav-link").css("cssText", "color: white !important; ");
      $(".nr1").css("cssText", "border-bottom: 2px solid white")
    }
  })
})


$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 275) {
      $(".nav-link").mouseover(function () {
        $(this).css("cssText", "color: black !important");
      });
      $(".nav-link").mouseout(function () {
        $(this).css("cssText", "color: #656565 !important");
      });
      $(".nr1").mouseover(function () {
        $(this).css("cssText", "border-bottom: 2px solid black")
      });
      $(".nr1").mouseout(function () {
        $(this).css("cssText", "border-bottom: 2px solid #656565");
      });
    } else {
      $(".nav-link").mouseover(function () {
        $(this).css("cssText", "color: #dc0000 !important");
      });
      $(".nav-link").mouseout(function () {
        $(this).css("cssText", "color: white !important");
      });
      $(".nr1").mouseover(function () {
        $(this).css("cssText", "border-bottom: 2px solid #dc0000")
      });
      $(".nr1").mouseout(function () {
        $(this).css("cssText", "border-bottom: 2px solid white");
      });
    }
  });
});
