 var d = new Date();
 var n = d.getFullYear();
 document.getElementById("YearB").innerHTML = n;

 var options = {
     weekday: 'long',
     year: 'numeric',
     month: 'long',
     day: 'numeric'
 };
 var today = new Date();

 document.getElementById("dateToday").innerHTML = today.toLocaleDateString("en-US", options);

 $(function () {
     abbrop = $('.lastBtnelem').offset();
     disooff = abbrop.top - 1000;

     var topelemn = $('.buttonappear').offset();
     aTop = topelemn.top;

     $(window).scroll(function () {

         if ($(this).scrollTop() >= aTop) {
             $('.stickybtn').show();

         } else {
             $('.stickybtn').hide();
         }

         if ($(this).scrollTop() >= disooff) {
             $('.stickybtn').hide();

         }
     });
 });