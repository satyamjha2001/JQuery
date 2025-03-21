$(function () {
  $(".red").css("backgroundColor", "red");
  $(".blue").css("backgroundColor", "blue");

    $("#btn_id").click(function () {
        $("main").hide("slow");
        $(this).text("Show");
        $("h1").text("Double Click to show");
  });

    $("#btn_id").dblclick(function () {
        $("main").show("slow");
        $(this).text("Hide");
        $("h1").text("Click to hide");
  });
});
