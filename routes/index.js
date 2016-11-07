
var data = require('../static/json_data/data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index');
};

exports.historyScreen = function(req, res){
	console.log(data);
	res.render('history', data);
};

exports.editScreen = function(req, res){
	//grab the taskNumber to be shown
		console.log(req.params.taskNumber);
	var taskNumber = parseInt(req.params.taskNumber,10);
	console.log(taskNumber);
	console.log(data);
	console.log(data.tasks[taskNumber]);
	var newData = data.tasks[taskNumber];
	newData.websites = data.websites;
	res.render('editScreen', newData);
	
	
};

exports.createTask = function(req, res){
	console.log(data);
	res.render('createTask', data);
};

exports.taskReview = function(req, res){
	//grab the taskNumber to be shown
	console.log(req.params.taskNumber);
	var taskNumber = parseInt(req.params.taskNumber,10);
	console.log(taskNumber);
	console.log(olddata);
	console.log(olddata.tasks[taskNumber]);
	var newData = olddata.tasks[taskNumber];
	newData.websites = data.websites;
	res.render('taskReview', newData);
	
	
};

exports.runTask = function(req, res){
	console.log(data);
	res.render('runTask', data);
};

exports.settings = function(req, res){
	console.log(data);
	res.render('settings', data);
};

exports.taskScreen = function(req, res){
	//grab the taskNumber to be shown
	console.log(req.params.taskNumber);
	var taskNumber = parseInt(req.params.taskNumber,10);
	console.log(taskNumber);
	console.log(data);
	console.log(data.tasks[taskNumber]);
	var newData = data.tasks[taskNumber];
	newData.websites = data.websites;
	res.render('taskScreen', newData);
	
	
};

exports.homepage = function(req, res) {

	res.render('homepage');
}
exports.help = function(req, res) {

	res.render('help');
}

exports.webAdd = function(req, res) {

	console.log(req.body);
	data['websites'].push(req.body);
	console.log(data);
	res.json(data);
}

exports.taskAdd = function(req, res) {
	console.log(req.body);
	data['tasks'].push(req.body);
	console.log(data);
}



