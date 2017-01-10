'use strict';

let driverData = require('./driverData');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressApp = express();
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');

const hostName = 'localhost';
const port = 3002;
const mongodbUri = 'mongodb://rvashishth:mlab345@ds047666.mlab.com:47666/bestowcars';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({extended:true}));
expressApp.use(cors());

expressApp.use('/api/contacts',require('./api/routes/post_drivers'));
expressApp.use('/api/contacts',require('./api/routes/get_drivers'));
expressApp.use('/api/contacts',require('./api/routes/get_driver'));
expressApp.use('/api/contacts',require('./api/routes/delete_driver'));
expressApp.use('/api/contacts',require('./api/routes/edit_driver'));

// first value must be port, then host name and then callback function
expressApp.listen(port,hostName, ()=>{
	mongoose.connect(mongooseUri,dbOptions,(err)=>{
		if(err){
			console.log(err);
		}
		console.log(`Server is running at ${hostName}:${port}`);
	});
});