'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Driver = require('../model/Driver');

const router = express.Router();

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

