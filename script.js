// Set the date we're counting down to
var countDownDate = new Date("June 02, 2018 13:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var weeks = Math.floor(distance/ (1000 * 60 * 60 * 24 * 7));
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)) - (weeks * 7);
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = weeks + "w " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


function myMap() {
var mapProp= {
    center:new google.maps.LatLng(48.859680, 13.828522),
    zoom:17,
    mapTypeId:google.maps.MapTypeId.SATELLITE,
};

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({
    position: mapProp.center,
    map: map,
    title: "Penzion u Mauritzů"
    });
}





// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3sNIwgziURt_aRyfJEtCsoOhT7g3PmkQ
// &callback=myMap"