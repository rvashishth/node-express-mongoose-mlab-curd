'use strict';

const mongoose = require('mongoose');
const express = require('express');
const Driver = require('../model/Driver');

const router = express.Router();

router.route('/:id').get((request,response)=>{
	const _id = request.params.id;
	Driver.findOne({ _id },(err,driver)=>{
		if(err){
			console.log("====1===="+err)
			response.status(400).json(err);
		}
		console.log("===driver==="+driver);
		if(!driver){
			response.status(404).json({message:'driver not found'});
		} else {
			response.json(driver);
		}
	});
});

module.exports = router;