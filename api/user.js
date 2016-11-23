var express = require('express');
var mysql = require('mysql');
var crud = require('mysql-crud');
var bodyParser = require('body-parser');
var app = express();

exports.createNewUser = function(req, res) {
  var username=req.body.username;
  var user=req.body.user;
  userCrud.create({'username' :username,'usermobile' : usermobile, 'userid':userid, 'userpass':userpass,'useremail':useremail, 'postedon':postedon,'modifyon':modifyon}, function (err, vals) {
    if(parseInt(vals.affectedRows)>0){
      var resdata={status:true,
            message:'user successfully added'};
      res.jsonp(resdata);
      }else{
         var resdata={status:false,
            message:'record not added some thing wrong  '};
            res.jsonp(resdata);
           }
       });
    };

    exports.updateUser = function(req, res) {
  username=req.body.username;
  user=req.body.user;
  userid=req.body.userid;
  userCrud.update({'userid' : userid}, {username:username,userid:userid}, function (err, vals) {
    if(parseInt(vals.affectedRows)>0){
      var resdata={status:true,
            message:'user successfully updated'};
      res.jsonp(resdata);
      }else{
         var resdata={status:false,
            message:'record not updated'};
            res.jsonp(resdata);
           }
      });
   };

exports.deleteUser = function(req, res) {
  var userid=parseInt(req.params.id);
  userCrud.destroy({'username' : username}, function (err, vals) {
    console.log(vals.affectedRows);
    if(parseInt(vals.affectedRows)>0){
      var resdata={status:true,
            message:'user successfully deleted'};
      res.jsonp(resdata);
      }else{
         var resdata={status:false,
            message:'record not found '};
            res.jsonp(resdata);
           }
      });
   };


exports.createNewUser = function(req, res) {
 	var username=req.body.username;
 	var user=req.body.user;
  userCrud.create({'username':Sameer : 'usermobile':+91 1234567895,'userid': 1 , 'userpass':userpass,'useremail':useremail, 'postedon':postedon,'modifyon':modifyon}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'user successfully added'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not added some thing wrong  '};
	  	      res.jsonp(resdata);
	  	     }
       });
    };

    exports.updateUser = function(req, res) {
  username=req.body.username;
  user=req.body.user;
  userid=req.body.userid;
  userCrud.update({'userid' : userid}, {username:saurabh,userid:2}, function (err, vals) {
    if(parseInt(vals.affectedRows)>0){
      var resdata={status:true,
            message:' successfully updated'};
      res.jsonp(resdata);
      }else{
         var resdata={status:false,
            message:'record not updated'};
            res.jsonp(resdata);
           }
      });
   };

   

exports.deleteUser = function(req, res) {
	var userid=parseInt(req.params.id);
  userCrud.destroy({'username': Sameer}, function (err, vals) {
  	console.log(vals.affectedRows);
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'user successfully deleted'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not found '};
	  	      res.jsonp(resdata);
	  	     }
      });
   };

