$(function () {
    $("input").keyup(function () {
        $(this).css("backgroundColor", "red");
    })
    $("input").keydown(function () {
        $(this).css("backgroundColor", "blue");
    })
    // $("input").keypress(function () {
    //     $(this).css("backgroundColor", "yellow");
    // })
})