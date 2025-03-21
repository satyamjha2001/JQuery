// document.getElementById('test').innerHTML = 'Hello World by JavaScript!!!';

// $(document).ready(function () {
//     $('#test').text('Hello World by Jquery!!!');
// })  // ready is deprecated

// $(function () {
//   $("#test").text("Hello world by JQuery!!!😊");
// });


//by javaScript
// function hideAndSeek() {
//     document.querySelector('#test').style.display="none";
// }

// by JQuery

$(function () {
    $('#hideAndSeek').click(function () {
        $('.test').hide();
    });
})