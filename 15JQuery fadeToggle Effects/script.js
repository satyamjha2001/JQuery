$(function () {
  $("#btnfadetoggle").click(function () {
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });
});
