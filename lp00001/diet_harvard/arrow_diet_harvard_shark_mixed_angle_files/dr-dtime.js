
function dtimes(d) {
    //g is the number of the day [1..7]
    var g = 5;

    if (g == 1 || g == 4 || g == 6) {

        var now = new Date();
        now.setDate(now.getDate() + d + 1);
        document.write((now.getDate()) + " " + months_localized[lang_locale][now.getMonth()]);
    } else if (g == 2 || g == 5 || g == 7) {
        var now = new Date();
        now.setDate(now.getDate() + d + 1 - 1);
        document.write((now.getDate()) + " " + months_localized[lang_locale][now.getMonth()]);
    } else if (g == 3) {
        var now = new Date();
        now.setDate(now.getDate() + d + 1 - 2);
        document.write((now.getDate()) + " " + months_localized[lang_locale][now.getMonth()]);
    }
}

function dtime(d) {
    var now = new Date();
    now.setDate(now.getDate() + d + 1);
    document.write(days_localized[lang_locale][now.getDay()] + " " + (now.getDate()) + ", " + " " + months_localized[lang_locale][now.getMonth()] + " " + now.getFullYear());
}

function dtime_nums(d, like_eu) {
    var now = new Date();
    now.setDate(now.getDate() + d + 1);

    var dayNum = '';
    if (now.getDate() < 10) {
        dayNum = '0';
    }
    dayNum += now.getDate();

    var monthNum = '';
    if (now.getMonth() + 1 < 10) {
        monthNum = '0';
    }
    monthNum += now.getMonth() + 1;

    if (like_eu === true) {
        document.write(dayNum + "." + monthNum + "." + (now.getFullYear()));
    } else {
        document.write(monthNum + "." + dayNum + "." + (now.getFullYear()));
    }

}