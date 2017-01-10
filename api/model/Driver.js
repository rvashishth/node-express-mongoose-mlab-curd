'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DriverSchema = new Schema(
	{
		first_name: {type: String, required: true},
		last_name: {type: String, required: true},
		email: {type: String, required: true},
		website: {type: String, required: true}
	},
	{ 
		collection: 'Driver' 
	}
);

module.exports = mongoose.model('Driver',DriverSchema);