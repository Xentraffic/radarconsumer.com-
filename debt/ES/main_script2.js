
$(document).ready(function() {
    // Hide all sections initially
    $('.question, .loading, #qualify').hide();
    $('#q1').show();

    function showNextQuestion(currentQuestionId, nextQuestionId) {
        $(currentQuestionId).hide();
        $(nextQuestionId).show();
    }

    $('.q1-btn, .q1-btn-bis').on('click', function() {
        showNextQuestion('#q1', '#q2');
    });

    $('.q2-btn-yes, .q2-btn-no').on('click', function() {
        showNextQuestion('#q2', '#q3');
    });

    $('.q3-btn-yes, .q3-btn-no').on('click', function() {
        showNextQuestion('#q3', '#q4');
    });

    $('.q4-btn-yes, .q4-btn-no').on('click', function() {
        $('#q4').hide();
        $('#loading1').show();

        // Simulate a delay before showing the qualify section
        setTimeout(function() {
            $('#loading1').hide();
            $('#qualify').show();
        }, 3000); // 3-second delay, adjust as needed
    });
});

function waitingInfo(param) {
    q2.style.display = "none";
    loading1.style.display = 'block';
    loading1.classList.add('fade-in');
    window.setTimeout(function () {
        loading1.classList.add('fade-out');
        window.setTimeout(function () {
            loading1.style.display = 'none';
            loading2.style.display = 'block';
            loading2.classList.add('fade-in');
            window.setTimeout(function () {
                loading2.classList.add('fade-out');
                window.setTimeout(function () {
                    loading2.style.display = 'none';
                    loading3.style.display =
                        'block';
                    loading3.classList.add(
                        'fade-in');
                    window.setTimeout(function () {
                        loading3.classList
                            .add(
                                'fade-out');
                        window.setTimeout(
                            function () {
                                loading3
                                    .style
                                    .display =
                                    'none';
                                qualify
                                    .style
                                    .display =
                                    'block';
                                qualify
                                    .classList
                                    .add(
                                        'fade-in'
                                    );
                                if (param === "yes") {
                                    $('#tab_call').css({ display: "none" })
                                    $('#click_to_call_btn').attr('href', 'https://intedure-virsoles.com/37fd44d5-7204-4476-8a87-01f0bd591a27?display={display}&source={source}&lastname={lastname}&email={email}&gender={gender}&phone={phone}&dob={dob}&creative={creative}&clickId={clickId}')
                                    $('#click_to_call_btn').text('Sign in now!')
                                }
                                if (param === "no") {
                                    $('#tab_call').css({ display: "block" })
                                    $('#click_to_call_btn').attr('href', 'tel:+18772300358')
                                    $('#click_to_call_btn').text('+1 (877) 230-0358')
                                }
                                countdown();
                            }, 500);
                    }, 1700);
                }, 500);
            }, 1700);
        }, 500);
    }, 1700);
}

function onMedicaid() {
    q2.style.display = "none";
    loading1.style.display = 'block';
    loading1.classList.add('fade-in');
    window.setTimeout(function () {
        loading1.classList.add('fade-out');
        window.setTimeout(function () {
            loading1.style.display = 'none';
            loading2.style.display = 'block';
            loading2.classList.add('fade-in');
            window.setTimeout(function () {
                loading2.classList.add('fade-out');
                window.setTimeout(function () {
                    loading2.style.display = 'none';
                    loading3.style.display =
                        'block';
                    loading3.classList.add(
                        'fade-in');
                    window.setTimeout(function () {
                        loading3.classList
                            .add(
                                'fade-out');
                        window.setTimeout(
                            function () {
                                cta();
                                countdown();
                            }, 500);
                    }, 1700);
                }, 500);
            }, 1700);
        }, 500);
    }, 1700);
}

var interval;

function countdown() {
    clearInterval(interval);
    interval = setInterval(function () {
        var timer = $('#countingItem').html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        } else if (seconds < 10 && length.seconds != 2) seconds = '0' +
            seconds;
        else if (minutes < 1) minutes = '00';

        $('#countingItem').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) clearInterval(interval);
    }, 1000);
}