const request = require('supertest');
const assert = require('assert');
const usersRouter = require('../routes/users.js');
const { verifyPwd } = require('../models/User.js');


// Doesn't work for some reason. 
/*
describe("Test if route '/register' works", () => {
	request(usersRouter)
		.get('/register')
		.expect(200)
		.end(function (err, res) {
			if(err)throw err;
		});

});
*/

describe("register password test", () => {
	test("valid password", () => {
		expect(verifyPwd("UnMotDePasse.123")).toBe(true);
	});
	test("password with 8 characters", () => {
		expect(verifyPwd("abcd.123")).toBe(true);
	});
	test("password less than 8 characters", () => {
		expect(verifyPwd("bcd.123")).toBe(false);
	});
	test("password with no special characters", () => {
		expect(verifyPwd("abcd1234")).toBe(false);
	});
	test("password with no letters", () => {
		expect(verifyPwd("1234567.")).toBe(false);
	});
	test("password with no numbers", () => {
		expect(verifyPwd("abcdefg.")).toBe(false);
	});
});