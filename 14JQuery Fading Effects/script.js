$(function () {
    $('#btnfadeout').click(function () {
        $('#div1').fadeOut();
        $('#div2').fadeOut('slow');
        $('#div3').fadeOut(3000);
    })
    $('#btnfadein').click(function () {
        $('#div1').fadeIn();
        $('#div2').fadeIn('slow');
        $('#div3').fadeIn(3000);
    })
})