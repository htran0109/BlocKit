
var timer = setInterval(timeTask, 60000);

$(document).ready(function() {
	initialize();
})

function showBlocked() {
	document.getElementById("blockDropdown").classList.toggle("show");

}



function timeTask() {
	

	var hours = $("#hours").val();
    var hoursInt = parseInt(hours);
    var minutes = $("#minutes").val();
    console.log(minutes);
    var minutesInt = parseInt(minutes);
    var totalMinutes = hoursInt * 60 + minutesInt;
    totalMinutes--;
    if(totalMinutes >= 0) {
      $('#hours').val(Math.floor(totalMinutes / 60));
      $('#minutes').val(totalMinutes % 60);
    }
}

function initialize() {


	$("#webAdd").click(function() {
	$('#websiteText').val("https://");
	});
}



