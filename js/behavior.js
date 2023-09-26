$(document).ready(function() {
  function trip(){
    $('body').css('background-color','#'+(Math.random()*0xFFFFFF<<0).toString(16));
  }
  setInterval(trip, 1200);
  trip();
});