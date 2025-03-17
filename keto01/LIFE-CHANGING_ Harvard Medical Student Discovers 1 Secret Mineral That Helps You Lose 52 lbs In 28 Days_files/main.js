$(function () {
    var wheel = document.querySelector('.wheel-img');
    var resultWrapper = document.querySelector('.spin-result-wrapper');
    $('.cursor-text').click(function () {
        $('.cursor-text').css('pointer-events', 'none');
        if (wheel.classList.contains('rotated')) {
            resultWrapper.style.display = "block";
        } else {
            wheel.classList.add('super-rotation');
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 8000);
            setTimeout(function () {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
            }, 10000);
            wheel.classList.add('rotated');
        }
    });

    $('a, .close-popup, .pop-up-button').not('#link_offer, #cert').click(function (e) {
        e.preventDefault();
        $('.spin-result-wrapper').fadeOut();
        var top = $('#toform').offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });
});
