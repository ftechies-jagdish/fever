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

api.post('./signup',function(req, res){

 	var user = new User({
 		name: req.body.name,
 		username: req.body.username,
 		password: req.body.password
	
	});

 	user.save(function(err){
 		if(err){
 			res.send(err);
 			return;
 		}
 		res.json({message: 'User has been created'});
 	});
api.get('./users' function(req, res){

	user.find({}, function (err, users){

		if(err){
			res.send(err);
			return;
		}
	res.json(users);
	});
});

api.post('/login',function(req, res){

	User.findone({

		username: req.body.username;


	}).select('password').exec(function(err, user){

		if(err) throw err;

		if(!user){
			res.send({message:"user doesnt exist"});

		} else if(user){
			var (!validPassword){
				res.send({message:"Invalid Password"});
			}
		}
	})
})

return api

}