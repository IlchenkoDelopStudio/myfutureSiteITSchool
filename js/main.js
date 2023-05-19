$(document).ready(function () {
  $("#toogle-Profoser-on").click(function () {
    $(".blur-block").hide();
    $(".Proffesor").slideToggle(300, function () {
      if ($(this).is(":hidden")) {
        $("#toogle-Profoser-on").show();
      } 
    });
    return false;
  });

  $("#open-moreInfo").click(function () {

    $("#open-moreInfo").slideToggle(300, function () {
      if ($(this).is(":hidden")) {
        $(".cardProffesor").hide();
        $(".moreInfo").show();
      }
    });
  
    return false;
  });




  $("#toogle-Lernes-on").click(function () {
    $(".blur-block").hide();
    $(".Lernes").slideToggle(300, function () {
      if ($(this).is(":hidden")) {
        $("toogle-Lernes-on").show();
      } else {
        $(".close").html("Скрыть текст");
      }
    });
    return false;
  });
  $(".Lernes").click(function () {
    $(".blur-block").show();
    $(".Lernes").slideToggle(300, function () {
      if ($(this).is(":hidden")) {
        $(".Lernes").hide();
      } else {
        $(".close").html("Скрыть текст");
      }
    });
    return false;
  });
  $("#toogle-contacts-on").click(function () {
    $(".contacts").hide();
    $(".blur-block").hide();
    $(".contacts").slideToggle(300, function () {
      if ($(this).is(":hidden")) {
        $("toogle-contacts-on").show();
      } else {
        $(".close").html("Скрыть текст");
      }
    });
    return false;
  });
   //контакты
  $(".contacts").click(function () {
    $(".blur-block").show();
    $(".WrapperNews").hide();
    $(".contacts").slideToggle(300, function () {
      if ($(this).is(":hidden")) {
        $(".contacts").hide();
      } else {
        $(".close").html("Скрыть текст");
      }
    });
    return false;
  });
  //открытие больше информации о преподавадетиля
  $("#open-moreInfo").click(function () {
    $(".card").hide();
    $(".contacts").hide();
    $(".blur-block").hide();
    $(".button").hide();
    $(".moreInfo").slideToggle(300, function () {
      if ($(this).is(":hidden")) {
        $(".open-moreInfo").show();
      }
    });
    return false;
  });

  //открытие информации о школе
  $("#open-Info-school").click(function () {
    $(".blur-block").hide();
    $(".school").slideToggle(300, function () {
      if ($(this).is(":hidden")) {
        $(".school").hide();
        $(".WrapperNews").hide();
      }
    });

    return false;
  });
//кнопка назад
  $("#back4").click(function () {
    $(".blur-block").show();
    $(".school").hide();
  });
});

$("#backFormTeacher").click(function () {
  $(".blur-block").show();
  $(".Proffesor").hide();
});

//открытие формы 
$("#sendMe").click(function () {
  $(".blur-block").hide();
  $(".formSend").slideToggle(300, function () {
    if ($(this).is(":hidden")) {
      $(".formSend").hide();
      $(".card").hide();
      $(".WrapperNews").hide();
    }
  });

  return false;
});

$("#backForm").click(function () {
	$(".formSend").hide();
    $(".blur-block").show();
    $(".card").show();

  });
