$(function () {
  $(".bgfood").hover(
    function () {
      // bgfood 마우스 호버 하면 시작
      $(this)
        .children(".details_menubox")
        .stop()
        .animate({ opacity: "1", top: "6%" }, 400);
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

  $(".clicked li").click(function () {
    if ($(".clicked li").hasClass("linebot")) {
      //  clicked li 클릭 시 linebot 클래스를 찾고
      $(".clicked li").removeClass("linebot"); // linebot 클래스가 있으면 지우고
      $(this).addClass("linebot"); // clicked li에 추가한다
    }
    // 메뉴 리스트 클릭 시 하단 선택표시
  });

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
      //윈도우 스크롤 값이 startHeight 의 높이와 같거나 크면 보여지고
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
  $(".btn1").click(function () {
    $("#popbox").show();
  });
  $("#x").click(function () {
    $("#popbox").hide();
  });
  $("#Cancel").click(function () {
    $("#popbox").hide();
  });
  $(".listbtn").click(function () {
    $("#popbox").show();
  });

  //   플러그인 datetimepicker
  $(".datetimepicker").datetimepicker({
    format: "Y-m-d H:i",
  });
  //   플러그인 datetimepicker
  $("#Reservation").change(function () {
    $(".choi").css("display", "block");
  });
  $("#Reservation2").change(function () {
    $(".choi2").css("display", "block");
  });
  $("#Resbtn").click(function () {
    alert("예약완료");
    location.reload();
  });
  // 윈두오 스크롤하여 50위치에 다다르면 header에 클래스추가
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("visible");
    } else {
      $("header").removeClass("visible");
    }
  });
  //   메인 타이틀 제목 등장
  $(".main_title h1")
    .delay(1000)
    .animate({ opacity: 0.9, bottom: 150 }, 1000, "swing");

  // 호버 시 애니메이션 이동 시도중...미구현
  $("#Roomlist li a").mouseenter(function () {
    $("#Room_wrap span");
    $(this).animate({ opacity: 0.9, left: 150 }, 500, "linear");
  });
});
