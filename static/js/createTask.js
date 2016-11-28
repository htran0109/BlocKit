
var data = {};
$(document).ready(function() {
	initialize();
})

function errorCreate() {
	$("#errMessage").addClass("show");
	console.log("error");
}

function showBlocked() {
	document.getElementById("blockDropdown").classList.toggle("show");
}

function webCheck(number) {
	
    var checkId = "checkBox" + number;
    console.log(checkId);
	var html = $('#blockDropdown').html();
	data = {"number":number};
	if(!$('#' + checkId).is(":checked")) {
		$.ajax({
			type: 'POST',
			url: '/webDelete',
			data: data,
			success: function(reply) {
				//html = html.substring(0, html.length - 6);
				/*html = html + 	'<div class = "inner-content" id = "websiteOne">'+ reply.websites[reply['websites'].length-1]['title'];
				html = html + '<input class = "checkBox" type = "checkbox" checked = "checked">';
				html = html + '</input>';
				html = html + '</div>';*/
				$('#webDropDown').html('<button onclick = "showBlocked()"' +
					'class = "dropbtn">' + reply['websiteNumber']+' Blocked' +
					'<img src = "../images/dropDown.png" style = "width:20;height:20px;">' +
					'</img>');
				$('#website'+number).html('');
				$('#website'+number).removeClass('inner-content');
				$('.inner-content').each(function(index) {
			      console.log(index);
                  $(this).attr("id","website" + index);
                  console.log($(this).attr('id'));
				});
				$('.checkBox').each(function(index){
				  console.log($(this).attr("id"));
				  console.log($(this).attr("onclick"));
                  //$(this).html('<input class = "checkBox" id = "checkBox' + index + '"type = "checkbox" {{checked}} onclick = "webCheck(' +index+')">');
                  $(this).attr("onclick","webCheck(" + index + ")");
                  $(this).attr("id","checkBox"+index);
                  console.log($(this).attr("id"));
				  console.log(index);
				});
			}
		//$.post('/webAdd', data);
	});
	}
	else {
		$.ajax({
			type: 'POST',
			url: '/webCheck',
			data: data,
			success: function(reply) {
				//html = html.substring(0, html.length - 6);
				/*html = html + 	'<div class = "inner-content" id = "websiteOne">'+ reply.websites[reply['websites'].length-1]['title'];
				html = html + '<input class = "checkBox" type = "checkbox" checked = "checked">';
				html = html + '</input>';
				html = html + '</div>';*/
				$('#webDropDown').html('<button onclick = "showBlocked()"' +
					'class = "dropbtn">' + reply['websiteNumber']+' Blocked' +
					'<img src = "../images/dropDown.png" style = "width:20;height:20px;">' +
					'</img>');
			}
		//$.post('/webAdd', data);
		});
	}

}
function initialize() {
	$(document).click(function(event) { 
    if(!$(event.target).closest('#errMessage').length) {
    	if($("#errMessage").hasClass("show")) {
    	  $("#errMessage").removeClass("show");
        }
    }        
	});
	$("#webAdd").click(function() {
		var webString = $('#websiteText').val();
		var html = $('#blockDropdown').html();
		console.log(html);
		console.log(webString);
		console.log(data);
		data = {"title": webString};
		$.ajax({
			type: 'POST',
			url: '/webAdd',
			data: data,
			success: function(reply) {
				//html = html.substring(0, html.length - 6);
				html = html + 	'<div class = "inner-content" id = "websiteOne">'+ reply.websites[reply['websites'].length-1]['title'];
				html = html + '<input class = "checkBox" id = "checkBox' + reply.websiteNumber +'" type = "checkbox" checked onclick = "webCheck(' + reply.websiteNumber +')">';
				html = html + '</input>';
				html = html + '</div>';
				$('#blockDropdown').html(html); 
				$('#webDropDown').html('<button onclick = "showBlocked()"' +
					'class = "dropbtn">' + reply['websiteNumber']+' Blocked' +
					'<img src = "../images/dropDown.png" style = "width:20;height:20px;">' +
					'</img>');
				
		//$.post('/webAdd', data);
	}
});

	$('#websiteText').val("https://");
});

	$("#create").click(function() {
		var taskName = $('#taskName').val();
		var dueDate = $('#dueDate').val();
		var hours = $('#hours').val();
		var minutes = $('#minutes').val();
		var notes = $('#notes').val();
		var number = document.getElementById("number").innerHTML;
		if(taskName && dueDate && hours && minutes
		    &&parseInt(hours) && parseInt(minutes)) {
			console.log(number);
			number = parseInt(number);
			console.log(taskName + "\n" + dueDate + "\n" + hours + "\n" + minutes + "\n" + notes + "\n" + number);
			data = {"title": taskName, "id": "id"+number, "number":number, 
			"dropDown": "detailDropdown"+number, "due_date":dueDate, "hours":hours, "minutes":minutes, "notes":notes}
			$.post('/taskAdd', data);
			document.location.href = '/runPage';
		}
		else {

			setTimeout( errorCreate, 50);
		}
	});

}


