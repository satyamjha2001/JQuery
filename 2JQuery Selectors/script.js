//hide all p by clicking button
//element selector

// $(function () {
//   $("#hideAndSeek").click(function () {
//     $("p").hide();
//   });
// });

//hide li by clicking button

// $(function () {
//   $("#hideAndSeek").click(function () {
//     $("li").hide();
//   });
// });

//Id selector

// $(function () {
//   $("#hideAndSeek").click(function () {
//     $("#test2").hide();
//   });
// });

//Class selector

// $(function () {
//   $("#hideAndSeek").click(function () {
//     $(".test").hide();
//   });
// });

//Custom JQuery Selector

//hide first li
// $(function () {
//   $("#hideAndSeek").click(function () {
//     $("li:first").hide();
//   });
// });
//hide last li
$(function () {
  $("#hideAndSeek").click(function () {
    $("li:last").hide();
  });
});
