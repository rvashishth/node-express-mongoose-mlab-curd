'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Driver = require('../model/Driver');

const router = express.Router();


router.route('/').post((request,response)=>{
	const driver = new Driver(request.body);

	driver.save((err,driver)=>{
		if(err){
			response.status(400).json(err);
		}
		response.json(driver);
	});
});

router.route('/').get((request,response)=>{
	Driver.find({},(err,drivers)=>{
		if(err){
			response.status(404).json(err);
		}
		response.json(drivers);
	});
});

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

router.route('/:id').put((request,response)=>{
	const _id = request.params.id;
	Driver.findOneAndUpdate({ _id },
		request.body,
		{new:true},
		(err,driver)=>{
			if(err){
				response.status(400).json(err);
			}
			response.json(driver);
		}
		);
});

router.route('/:id').delete((request,response)=>{
	const _id = request.params.id;
	Driver.findOneAndRemove({ _id },(err,driver)=>{
		if(err){
			response.status(400).json(err);
		}
		if(!driver){
			response.status(404).json({message:'Driver not found to be deleted'});
		}else{
			response.json({message:`Driver ${driver.id} deleted`});
		}
	});
});

module.exports = router;

