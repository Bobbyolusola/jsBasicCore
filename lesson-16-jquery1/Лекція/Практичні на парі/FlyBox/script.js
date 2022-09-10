$(function () {
    $('div').animate({
        left: '+=600'
        , opacity: 0.70
        , backgroundColor: '#ccc'
        , top: '+=500'
    }, 5000, function () {
        console.log(this)
        $(this).text('I am done').addClass('buldge');
    });
});