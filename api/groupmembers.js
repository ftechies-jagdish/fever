var express = require('express');
var mysql = require('mysql');
var crud = require('mysql-crud');
var bodyParser = require('body-parser');
var app = express();

exports.createNewGroupmember = function(req, res) {
 	var groupmembername=req.body.groupmembername;
 	var group=req.body.groupmembername;
  groupCrud.create({'groupmembername' :groupmembername,'groupmemberid' : groupmemberid, }, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'groupmember successfully added'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not added some thing wrong  '};
	  	      res.jsonp(resdata);
	  	     }
       });
    };

    
exports.updateGroupmember = function(req, res) {
  groupmembername=req.body.groupmembername;
  groupmember=req.body.groupmember;
  groupmemberid=req.body.groupmemberid;
  groupCrud.update({'groupmemberid' : groupmemberid}, {groupmembername:groupmembername,groupmemberid:groupmemberid}, function (err, vals) {
    if(parseInt(vals.affectedRows)>0){
      var resdata={status:true,
            message:'groupmember successfully updated'};
      res.jsonp(resdata);
      }else{
         var resdata={status:false,
            message:'record not updated'};
            res.jsonp(resdata);
           }
      });
   };

exports.deleteGroupmember = function(req, res) {
	var groupid=parseInt(req.params.id);
  groupCrud.destroy({'groupmemberid' : groupmemberid}, function (err, vals) {
  	console.log(vals.affectedRows);
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'groupmember successfully deleted'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not found '};
	  	      res.jsonp(resdata);
	  	     }
      });
   };
