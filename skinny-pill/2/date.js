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

var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December");

function printDate(d) {
    var mydate = new Date();
    var year = mydate.getYear();
    if (year < 1000)
        year += 1900;
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    if (daym < 10)
        daym = "0" + daym;

    document.write("" + dayarray[day] + ", " + montharray[month] + " " + daym + ", " + year + "")
}

function getCurrAndPrevMonth(d) {
    var t = new Date(d);
    document.write(montharray[t.getMonth() - 1] + ', ' + montharray[t.getMonth()]);
}