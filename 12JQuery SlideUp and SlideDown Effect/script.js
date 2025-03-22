$(function () {
    $('#flip').click(function () {
        $('#panel').slideDown('slow');
    })
    $('#flip').dblclick(function () {
        $('#panel').slideUp('slow');
    })
})