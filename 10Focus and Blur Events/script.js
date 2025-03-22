//By show and hide
// $(function () {
//     $('span').hide();
//     $('#textbox').focus(function () {
//         $('#ShowData').show(3000);
//     })
//     $('#textbox').blur(function () {
//         $("#ShowData").hide();
//         $('#ShowDataForBlur').show(3000);
//     })
// })

//By css

$(function () {
  $("span").css("display", "none");
  $("#textbox").focus(function () {
    $("#ShowData").css("display", "inline").fadeOut(4000);
  });
  $("#textbox").blur(function () {
    $("#ShowDataForBlur").css("display", "inline").fadeOut(4000);
  });
});
