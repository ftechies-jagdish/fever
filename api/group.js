var express = require('express');
var mysql = require('mysql');
var crud = require('mysql-crud');
var bodyParser = require('body-parser');

var app = express();

exports.createNewgroup = function(req, res) {
  var groupname=req.body.groupname;
  var group=req.body.group;
  groupCrud.create({'groupname':groupname,'groupid' : groupid, }, function (err, vals) {
    if(parseInt(vals.affectedRows)>0){
      var resdata={status:true,
            message:'group successfully added'};
      res.jsonp(resdata);
      }else{
         var resdata={status:false,
            message:'record not added some thing wrong  '};
            res.jsonp(resdata);
           }
       });
    };

    exports.updateGroup = function(req, res) {
  groupname=req.body.groupname;
  group=req.body.group;
  groupid=req.body.groupid;
  groupCrud.update({'groupid':groupid}, {groupname:groupname}, function (err, vals) {
    if(parseInt(vals.affectedRows)>0){
      var resdata={status:true,
            message:'group successfully updated'};
      res.jsonp(resdata);
      }else{
         var resdata={status:false,
            message:'record not updated'};
            res.jsonp(resdata);
           }
      });
   };


exports.deleteGroup = function(req, res) {
  var groupid=parseInt(req.params.id);
  groupCrud.destroy({'groupid' : groupid}, function (err, vals) {
    console.log(vals.affectedRows);
    if(parseInt(vals.affectedRows)>0){
      var resdata={status:true,
            message:'group successfully deleted'};
      res.jsonp(resdata);
      }else{
         var resdata={status:false,
            message:'record not found '};
            res.jsonp(resdata);
           }
      });
   };



exports.createNewgroup = function(req, res) {
 	var groupname=req.body.groupname;
 	var group=req.body.user;
  groupCrud.create({'groupid' : 1, 'groupname' :family, }, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'group successfully added'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not added some thing wrong  '};
	  	      res.jsonp(resdata);
	  	     }
       });
    };

    exports.updateGroup = function(req, res) {
  groupname = req.body.groupname;
  group = req.body.group;
  groupid = req.body.groupid;
  groupCrud.update({'groupid':2}, {groupname:office,groupid:2}, function (err, vals) {
    if(parseInt(vals.affectedRows)>0){
      var resdata={status:true,
            message:'group successfully updated'};
      res.jsonp(resdata);
      }else{
         var resdata={status:false,
            message:'record not updated'};
            res.jsonp(resdata);
           }
      });
   };

exports.deleteGroup = function(req, res) {
	var groupid=parseInt(req.params.id);
  groupCrud.destroy({'groupid' :1}, function (err, vals) {
  	console.log(vals.affectedRows);
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'group successfully deleted'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not found '};
	  	      res.jsonp(resdata);
	  	     }
      });
   };

