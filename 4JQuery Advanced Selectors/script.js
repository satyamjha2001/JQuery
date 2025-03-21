$(() => {
  $("#btn_id").click(() => {
    $("*").css({
      backgroundColor: "aqua",
    });
  });

  $("#btn_id").click(function () {
    $(this).css({
      backgroundColor: "orange",
    });
  });

  //   $("#btn_id").click(function () {
  //       $("[type]").hide("slow");
  //   });

  //EVEN (0-based indexing)

  //   $("#btn_id").click(function () {
  //       $("li:even").css("color", "red");
  //   });
  //ODD (0-based indexing)

  //   $("#btn_id").click(function () {
  //       $("li:odd").css("color", "red");
  //   });

  //first and last child selector
  // $("#btn_id").click(function () {
  //     //   $("li:first-child").css("color", "red");
  //       $("#satyam li:last-child").css("color", "red");
  // });

  //nth-child selector (1-based indexing)
  //   $("#btn_id").click(function () {
  //     $("#satyam li:nth-child(2)").css("color", "red");
  //   });

  //nth-last-child selector (1-based indexing)
  $("#btn_id").click(function () {
    $("#satyam li:nth-last-child(2)").css("color", "red");
  });
});
