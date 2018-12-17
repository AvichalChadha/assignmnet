const mongoose = require("mongoose")
const keys = require("../config/keys")
const data_model = require("../Models/model");



function user(first_name, last_name, company_name, city, state, zip, email, web, age) {
	return new Promise(function(resolve, reject){
		 let user_data = {
			"first_name": first_name,
			"last_name": last_name,
			"company_name": company_name,
			"city": city,
			"state": state,
			"zip": zip,
			"email": email,
			"web": web,
			"age": age
		}

		const instance = new data_model(user_data)
		instance.save(function(err){

			if (err){
				reject(err)
			}
			else{
				resolve()
			}
		})
	})

}



module.exports = user;