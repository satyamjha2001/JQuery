//single css style
$(function () {
  $("#jqueryCSS").click(function () {
    $("#anchor").css("textDecoration", "none");
  });
});

//multiple css style

$(function () {
  $("#jqueryCSS").click(function () {
    $("#anchor").css({
      textDecoration: "none",
      backgroundColor: "yellow",
      color: "red"
    });
  });
});
