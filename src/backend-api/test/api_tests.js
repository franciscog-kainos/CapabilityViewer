const request = require('request');
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

const API_URL = 'http://localhost:8002/';

describe('Getting all roles', function() {

    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_URL + 'roles',
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

            expect(res.statusCode).to.equal(200);
        });
    });

    it('Should return columns with names role_id and role_name', function() {
    request.get({
        uri: API_URL + 'roles', 
    }, (err, res, body) => {
        if (err) console.log(err);
        if (body) console.log(body);

        expect(body).to.include('role_id');
        expect(body).to.include('role_name');
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

            expect(res.statusCode).to.equal(200);
        });
    });

    it('Should return columns with names job_family_id and job_family_name', function() {
    request.get({
        uri: API_URL + 'families', 
    }, (err, res, body) => {
        if (err) console.log(err);
        if (body) console.log(body);

        expect(body).to.include('job_family_id');
        expect(body).to.include('job_family_name');
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

            expect(res.statusCode).to.equal(200);
        });
    });

    it('Should return columns with names band_id and band_name', function() {
        request.get({
            uri: API_URL + 'bands', 
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

        expect(body).to.include('band_id');
        expect(body).to.include('band_name');
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

            expect(res.statusCode).to.equal(200);
        });
    });

    it('Should return columns with names capability_id and capability_name', function() {
        request.get({
            uri: API_URL + 'capabilities', 
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

        expect(body).to.include('capability_id');
        expect(body).to.include('capability_name');
        });
    });
});




