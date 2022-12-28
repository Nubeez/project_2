$(function () {
  $(".bgfood").hover(
    function () {
      // bgfood 마우스 호버 하면 시작
      $(this)
        .children(".details_menubox")
        .stop()
        .animate({ opacity: "1", top: "1.5%" }, 400);
    },
    function () {
      $(this)
        .children(".details_menubox")
        .stop()
        .animate({ opacity: "0", top: "-5%" }, 400);
    }
  );
  // 음식 메뉴박스 end

  $(".foodnav>ul>li")
    .eq(0)
    .click(function () {
      $(".gall_img").fadeIn();
    });
  $(".foodnav>ul>li")
    .eq(1)
    .click(function () {
      $(".gall_img").hide();
      $(".BREAKFAST").fadeIn(500);
    });
  $(".foodnav>ul>li")
    .eq(2)
    .click(function () {
      $(".gall_img").hide();
      $(".LUNCH").fadeIn(500);
    });
  $(".foodnav>ul>li")
    .eq(3)
    .click(function () {
      $(".gall_img").hide();
      $(".DINNER").fadeIn(500);
    });
  $(".foodnav>ul>li")
    .eq(4)
    .click(function () {
      $(".gall_img").hide();
      $(".DESSERT").fadeIn(500);
    });
  $(".foodnav>ul>li")
    .eq(5)
    .click(function () {
      $(".gall_img").hide();
      $(".DRINKS").fadeIn(500);
    });
  // 푸드 태그아닌건 숨기고 해당 태그는 페이드인

  var resize = window.matchMedia("(min-width: 1200px)");

  if (resize.matches) {
    $(".prev").click(function () {
      $(".review_slider li:last").prependTo(".review_slider");
      $(".review_slider").css("margin-left", -1000);
      $(".review_slider").stop().animate({ marginLeft: 0 }, 500);
    });
    $(".next").click(function () {
      $(".review_slider")
        .stop()
        .animate({ marginLeft: -1000 }, 500, function () {
          $(".review_slider li:first").appendTo(".review_slider");
          $(".review_slider").css({ marginLeft: 0 });
        });
    });
  } else {
    $(".prev").click(function () {
      $(".review_slider li:last").prependTo(".review_slider");
      $(".review_slider").css("margin-left", "-100%");
      $(".review_slider").stop().animate({ marginLeft: 0 }, 500);
    });
    $(".next").click(function () {
      $(".review_slider")
        .stop()
        .animate({ marginLeft: "-100%" }, 500, function () {
          $(".review_slider li:first").appendTo(".review_slider");
          $(".review_slider").css({ marginLeft: 0 });
        });
    });
  }
  // 슬라이드 리뷰 end

  $(".chefbox").hover(
    function () {
      $(this)
        .children(".anibox")
        .stop()
        .animate({ opacity: "1", bottom: "10%" }, 400);
    },
    function () {
      $(this)
        .children(".anibox")
        .stop()
        .animate({ opacity: "0", bottom: "0%" }, 400);
    }
  );
  //셰프 소개글 박스 end

  var startHeight = $("header").height();
  //시작할 Height 의 높이

  $("#scrollTop").hide();
  //스크롤전 scrollTop 숨기기

  $(window).scroll(function () {
    // 윈도우 스크롤 기능 작동
    var roll = $(this).scrollTop() >= startHeight;
    // 스크롤이 startHeight 의 값을 넘었을 때
    //윈도우 스크롤의 값이 startHeight 의 높이와 같거나 크다
    //scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위 의미로 해석
    //스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐

    if (roll) {
      //윈도우 스크롤 값이 startHeight 의 높이와 같거나 크면
      $("#scrollTop").show().css({ position: "fixed" });
    } else {
      $("#scrollTop").hide();
    }
    //스크롤값이 아닐 시 scrollTop 숨긴다
  });

  $("#scrollTop").click(function () {
    $("html, body").animate({ scrollTop: "0" }, 1500);
  });
  //   1.5초동안 top 0으로 이동

  $("#logo_toggle").click(function () {
    $("#menubar_ul").slideToggle();
  });
  $(window).resize(function () {
    if (window.innerWidth > 1200) {
      $("#menubar_ul").show();
    } else {
      $("#menubar_ul").hide();
    }
  });
  //  nav 토글
});
