/*For dropdown, when clicked, show websites blocked*/



function showBlocked() {
	document.getElementById("blockDropdown").classList.toggle("show");

}

$(".checkBox").click(function() {
	if($(this).src == "../images/checkBox.png") {
		$(this).src = "../images/emptyCheckBox.jpg";
	}
	else {
		$(this).src = "../images/checkBox.png";
	}
});

$("#webAdd").click(function() {
	$('#websiteText').val("https://");
})


