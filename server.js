'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressApp = express();
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');
const morgan = require('morgan');

const hostName = 'localhost';
const port = process.env.PORT || 3002;
const mongodbUri = 'mongodb://rvashishth:mlab345@ds047666.mlab.com:47666/bestowcars';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({extended:false}));
expressApp.use(cors());
expressApp.use(morgan('dev'));
// add morgan middleware here 

expressApp.use('/api/driver',require('./api/routes/driver'));

// first value must be port, then host name and then callback function
expressApp.listen(port, ()=>{
	mongoose.connect(mongooseUri,dbOptions,(err)=>{
		if(err){
			console.log(err);
		}
		console.log(`Server is running at ${hostName}:${port}`);
	});
});