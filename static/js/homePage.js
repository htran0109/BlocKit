'use strict';
$(document).ready(function() {
	initialize();
})

function initialize() {

	$("#createText").on({
		"mouseover": function() {
			document.getElementById("createText").style.fontSize = "30px";
		},
		"mouseleave": function() {
			document.getElementById("createText").style.fontSize = "26px";
		}
	});
	$("#runText").on({
		"click" : function() {
			runPage.runPage();
		},
		"mouseover": function() {
			document.getElementById("runText").style.fontSize = "30px";
		},
		"mouseleave": function() {
			document.getElementById("runText").style.fontSize = "26px";
		}
	});
	$("#settingsText").on({
		"mouseover": function() {
			document.getElementById("settingsText").style.fontSize = "30px";
		},
		"mouseleave": function() {
			document.getElementById("settingsText").style.fontSize = "26px";
		}
	});
	$("#historyText").on({
		"mouseover": function() {
			document.getElementById("historyText").style.fontSize = "30px";
		},
		"mouseleave": function() {
			document.getElementById("historyText").style.fontSize = "26px";
		}
	});
	$("#helpText").on({
		"mouseover": function() {
			document.getElementById("helpText").style.fontSize = "30px";
		},
		"mouseleave": function() {
			document.getElementById("helpText").style.fontSize = "26px";
		}
	});
	$("#loginText").on({
		"mouseover": function() {
			document.getElementById("loginText").style.fontSize = "30px";
		},
		"mouseleave": function() {
			document.getElementById("loginText").style.fontSize = "26px";
		}
	});
}