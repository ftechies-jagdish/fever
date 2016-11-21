var express = require('express');
var mysql = require('mysql');
var crud = require('mysql-crud');
var bodyParser = require('body-parser');
var connection = mysql.createPool({
       database : 'demodb',
   user : 'ftdev',
       password : '10gXWOqeaf',
   host :'apps.fountaintechies.com',
});
var app = express();

 app.use(bodyParser.urlencoded({
   limit: '50mb',
   extended: true
}));
app.use(bodyParser.json());
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header("Access-Control-Allow-Headers", "Content-Type");
   next();
});
   var server = app.listen(8082, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Hackton app listening", host, port);
});
			app.use(express.static(__dirname + '/public'));

			app.get('/userlist', function (req, res) {
  
   			connection.query('select * from user', function(err, val) {
       			res.jsonp({
       				userinfo: val
       			});
         	});
				});