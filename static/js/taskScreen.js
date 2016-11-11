
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
    $("#confirm").click(function() {
        var taskName = $('#taskName').val();
        var dueDate = $('#dueDate').val();
        var hours = $('#hours').val();
        var minutes = $('#minutes').val();
        var notes = $('#notes').val();
        var number = document.getElementById("number").innerHTML;
        console.log(number);
        number = parseInt(number);
        console.log(taskName + "\n" + dueDate + "\n" + hours + "\n" + minutes + "\n" + notes + "\n" + number);
        data = {"title": taskName, "id": "id"+number, "number":number, 
        "dropDown": "detailDropdown"+number, "due_date":dueDate, "hours":hours, "minutes":minutes, "notes":notes}
        $.post('/taskDelete', data);
        $.post('/oldTaskAdd', data);
        
    });
}



