
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
	data.tasks[taskNumber]['number'] = taskNumber;
	console.log(data.tasks[taskNumber].number);
	var newData = data.tasks[taskNumber];
	newData.websites = data.websites;
	res.render('editScreen', newData);
	
	
};

exports.editScreen2 = function(req, res){
	//grab the taskNumber to be shown
	console.log(req.params.taskNumber);
	var taskNumber = parseInt(req.params.taskNumber,10);
	console.log(taskNumber);
	console.log(data);
	console.log(data.tasks[taskNumber]);
	data.tasks[taskNumber]['number'] = taskNumber;
	console.log(data.tasks[taskNumber].number);
	var newData = data.tasks[taskNumber];
	newData.websites = data.websites;
	res.render('editScreen2', newData);
	
	
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
	console.log(data);
	console.log(data.oldTasks[taskNumber]);
	//data.oldTasks[taskNumber].number = data['oldTasks'].indexof(data.oldTasks[taskNumber]);
	console.log(data.oldTasks[taskNumber].number);
	var newData = data.oldTasks[taskNumber];
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
	data.tasks[taskNumber]['number'] = taskNumber;
	console.log(data.tasks[taskNumber].number);
	res.render('taskScreen', newData);
	
	
};

exports.homepage = function(req, res) {

	res.render('homepage');
}
exports.help = function(req, res) {

	res.render('help');
}

exports.register = function(req, res) {
	res.render('register');
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

exports.taskEdit = function(req, res) {
	console.log(req.body);
	console.log(req.body['number']);
	data['tasks'][req.body['number']] = req.body;

}

exports.taskDelete = function(req, res) {
	console.log(req.body);
	console.log(req.body['number']);
	data['tasks'].splice(req.body['number'], 1);// remove the element
	
}



