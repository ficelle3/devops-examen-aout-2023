const request = require('supertest');
const assert = require('assert');
const usersRouter = require('../routes/users.js');

request(usersRouter)
	.get('/register')
	.expect(200)
	.end(function (err, res) {
		if(err)throw err;
	});


	// WHY DOES NOTHING EVER WORK !!!!!
	// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHH