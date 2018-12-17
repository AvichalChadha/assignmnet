const mongoose = require("mongoose")
const keys = require("../config/keys")
const data_model = require("../Models/model");




function get_data(limit, skip, fname){
	console.log(fname)
	//if (isNaN(fname)){
	if (fname == undefined){	
		return new Promise(function(resolve, reject){
			data_model.find({}, function(err, users) {
			var userMap = {};
	    	users.forEach(function(user) {
	      	userMap[user._id] = user;
	      		resolve(userMap)
	    	});
		}).limit(limit).skip(skip)

		})
	}

	else {
		return new Promise(function(resolve, reject){
			data_model.find({ first_name: fname}, function(err, users){
				var userMap = {}
				users.forEach(function(user){
					userMap[user._id] = user
					resolve(userMap)
				})
			})

		})
	}

}


module.exports = get_data