'use strict';

const mongoose = require('mongoose');
const express = require('express');
const Driver = require('../model/Driver');

const router = express.Router();

router.route('/').get((request,response)=>{
	Driver.find({},(err,drivers)=>{
		if(err){
			response.status(404).json(err);
		}
		response.json(drivers);
	});
});

module.exports = router;