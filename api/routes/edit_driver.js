'use strict';

const express = require('express');
const Driver = require('../model/Driver');

const router = express.Router();

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

module.exports = router;