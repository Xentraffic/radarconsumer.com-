const dayNames = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
const monthNames = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
const now = new Date();
document.getElementById('dateHeader').innerHTML = dayNames[now.getDay()] +
    ', ' +
    monthNames[now.getMonth()] +
    ' ' +
    now.getDate() +
    ', ' +
    now.getFullYear();