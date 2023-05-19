//закрытие больше информации о преподавадетиля
$("#close-moreInfo").click(function () {
    $(".moreInfo").slideToggle(300, function () {
      if ($(this).is(":hidden")) {
        $(".moreInfo").hide();
        $(".cardProffesor").show();
        $(".button").show();
      }
    });

    return false;
  });


//кнопка назад
$("#back4").click(function () {
    $(".blur-block").show();
    $(".school").hide();
  });

  $("#backFormTeacher").click(function () {
    $(".blur-block").show();
    $(".Proffesor").hide();
  });


  $("#backForm").click(function () {
	$(".formSend").hide();
    $(".blur-block").show();
    $(".card").show();

  });


  $("#backbuttonT").click(function () {
    $(".cardProffesor").hide();
    $(".blur-block").show();

  });

