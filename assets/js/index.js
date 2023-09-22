$('.open__gallery').click(function (e) {
    e.preventDefault();
    $('.consultorio__gallery').addClass('consultorio__gallery--visible')
})

$('.consultorio__gallery__mask').click(function () {
    $('.consultorio__gallery').removeClass('consultorio__gallery--visible')
})