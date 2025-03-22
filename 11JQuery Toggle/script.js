$(function () {

    $(".red").css({
      backgroundColor: "red",
    });

    $(".blue").css({
      backgroundColor: "blue",
    });

  $("#btn_id").click(function () {
      $("main").toggle("slow");
  });
});
