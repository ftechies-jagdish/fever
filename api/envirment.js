//for database connection
var mysql = require('mysql');
var http = require('http');

var enviroment = {
	Dbconnection : mysql.createPool({
			database : 'fever',
		    user : 'ftdev',
			password : '10gXWOqeaf',
		    host :'apps.fountaintechies.com',
		    
	}),

	timestamp: function() {
      var UTCtimestamp = new Date();
      return UTCtimestamp.getTime();
    }   

}


module.exports = enviroment;
 

