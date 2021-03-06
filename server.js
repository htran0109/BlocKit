var PORT = 3000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Create the server instance
var app = express();

// Print logs to the console and compress pages we send
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'static/pages'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'static')));

// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.html
// maps to /static/index.html on this machine
app.use(express.static(__dirname + '/'));

app.get('/', index.view);
app.get('/runPage', index.runTask);
app.get('/runPage2', index.runTask2)
app.get('/taskScreen/:taskNumber', index.taskScreen);
app.get('/editScreen/:taskNumber', index.editScreen);
app.get('/editScreen2/:taskNumber', index.editScreen2);
app.get('/history', index.historyScreen);
app.get('/review/:taskNumber', index.taskReview);
app.get('/createTask', index.createTask);
app.get('/settings', index.settings);
app.get('/homepage', index.homepage);
app.get('/help', index.help);
app.get('/register', index.register);
app.post('/webAdd', index.webAdd);
app.post('/webCheck', index.webCheck);
app.post('/webDelete', index.webDelete);
app.post('/taskAdd', index.taskAdd);
app.post('/taskEdit', index.taskEdit);
app.post('/taskDelete', index.taskDelete);
app.post('/oldTaskAdd', index.oldTaskAdd);
app.post('/oldTaskDelete', index.oldTaskDelete);



// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});