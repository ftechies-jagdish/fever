var express = require('express');
var mysql = require('mysql');
var crud = require('mysql-crud');
var bodyParser = require('body-parser');
var connection = mysql.createPool({
        database : 'fever',
        user : 'ftdev',
        password : '10gXWOqeaf',
        host :'apps.fountaintechies.com',
 });
var app = express();  

 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyparser.json());
 app.use(morgan('dev'));

 var api = require('./user/api')(app, express);
 app.use('/api', api);
 limit: '90mb',
 extended: true
 app.use(bodyParser.json());


   var server = app.listen(8082, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Fever app listening", host, port);
});
		