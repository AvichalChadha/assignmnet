const express = require('express')
const mongoose = require('mongoose');
//const autoIncrement = require('mongoose-auto-increment');


const  mySchema = mongoose.Schema({
                first_name: { type: String, required:true },
                last_name: { type: String, required:true  },
                company_name: {type: String, required:true },
                city: {type: String, required:true },
                state: {type: String, required:true },
                zip: {type: Number, required:true  },
                email: { type: String, required:true  },
                web: { type: String, required:true },
                age:{ type: Number, required:true }
});



//const ObjectId = Schema.ObjectId;
let User = mongoose.model('datapeace', mySchema);

module.exports = User;


