const assert = require('assert');
const request = require('request');

const API_URL = 'http://localhost:8002/';

describe('Getting all roles', function() {

    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_URL + 'roles',
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

            assert.equal(res.statusCode, 200);
        });
    });
});

describe('Getting all job families', function() {

    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_URL + 'families',
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

            assert.equal(res.statusCode, 200);
        });
    });
});

describe('Getting all bands', function() {

    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_URL + 'bands',
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

            assert.equal(res.statusCode, 200);
        });
    });
});

describe('Getting all capabilities', function() {

    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_URL + 'capabilities',
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

            assert.equal(res.statusCode, 200);
        });
    });
});




