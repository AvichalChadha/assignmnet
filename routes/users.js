const router = require('express').Router()
const savedata = require('../controllers/save_data')
const data_model = require("../Models/model");
const get_data = require("../controllers/get_data")


router.post('/user', function(req, res){
	const data = req.body
	//add validation
	console.log(data)

	try{
		savedata(data.first_name, data.last_name, data.company_name, data.city, data.state, data.zip, data.email, data.web, data.age).then(function(){
			
			res.json({msg:"Data suscessfuly saved"})
		})
		.catch(function(){
			res.json({msg:"Email all ready exist"})
		})
    	
    }
    catch(error){
    	res.json({key:"error"})
    }
})





router.get('/user', function(req, res){
	try{
		const page =  parseInt(req.query.page)
		var limit = req.query.limit
		var first_name = req.query.first_name
		console.log(limit)
		console.log(first_name)

		console.log(first_name)
		if (isNaN(limit)){
			var limit_int = 5
		}
		else{
			var limit_int = parseInt(limit)
		}

		skip = page*limit_int
		get_data(limit_int, skip, first_name).then(function(x){res.send(x)})
	}
	catch(_){
		console.log(_)
		res.json({msg:"Invalid input"})
	}
		
})






router.delete('/user/:id', function(req, res){
	var id = req.params.id;
	console.log(id)
	data_model.findByIdAndRemove(id, function(err, user){
		if(err){
			console.log(err)
			res.json({msg:"Some error happened"})
		}
		else{
			res.send(`User with ${id} deleted`)
		}
	})
})

module.exports = router;
