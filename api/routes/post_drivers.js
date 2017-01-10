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

module.exports = router;