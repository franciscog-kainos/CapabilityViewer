const request = require('request');
const log4js = require('log4js');
const chai = require('chai');

const should = chai.should();
const expect = chai.expect;

log4js.configure({
  appenders: { api_tests: { type: 'file', filename: 'api_tests.log' } },
  categories: { default: { appenders: ['api_tests'], level: 'error' } }
});

const logger = log4js.getLogger('api_tests');
const API_BASE_URL = 'http://localhost:8002/';

describe('Getting all role information', function() {

    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_BASE_URL + 'roles',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };
            expect(res.statusCode).to.equal(200);
        });
    });

    it('Should return columns with names and data for role_id and role_name', function() {
        request.get({
            uri: API_BASE_URL + 'roles', 
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };

            expect(body).to.include('{"role_id":1,"role_name":"Head Executive of Business Unit","band_id":1,"capability_id":1}');
            expect(body).to.include('{"role_id":2,"role_name":"Head Leader of Business Unit","band_id":1,"capability_id":1}');

        });
    });
});

describe('Getting all job familiy information', function() {

    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_BASE_URL + 'families',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };
            expect(res.statusCode).to.equal(200);
        });
    });

    it('Should return columns with names and data for job_family_id and job_family_name', function() {
        request.get({
            uri: API_BASE_URL + 'families', 
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };

            expect(body).to.include('{"job_family_id":1,"job_family_name":"Sales & Marketing"}');
            expect(body).to.include('{"job_family_id":2,"job_family_name":"Technical"}');

        });
    });
});

describe('Getting all band information', function() {

    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_BASE_URL + 'bands',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };
            expect(res.statusCode).to.equal(200);
        });
    });

    it('Should return columns with names and data for band_id and band_name', function() {
        request.get({
            uri: API_BASE_URL + 'bands', 
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };

            expect(body).to.include('{"band_id":1,"band_name":"Executive"}');
            expect(body).to.include('{"band_id":2,"band_name":"Leadership Community"}');

        });
    });
});

describe('Getting all capability information', function() {

    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_BASE_URL + 'capabilities',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };
            expect(res.statusCode).to.equal(200);
        });
    });

    it('Should return columns with names role_id and role_name', function() {
        request.get({
            uri: API_BASE_URL + 'capabilities', 
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };

            expect(body).to.include('{"capability_id":1,"capability_name":"Business Development Director","job_family_id":1}');
            expect(body).to.include('{"capability_id":2,"capability_name":"Account Director","job_family_id":1}');
            expect(body).to.include('{"capability_id":3,"capability_name":"Softare Engineering Manager","job_family_id":2}');

        });
    });
});


describe('Getting a specific band', function() {

    it('Should return 200 response with existing id', function() {
        request.get({
            uri: API_BASE_URL + 'bands/1',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };
            
            expect(res.statusCode).to.equal(200);

        });
    });

    it('Should return band name, band competency and band responsibilities', function() {
        request.get({
            uri: API_BASE_URL + 'bands/1',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
              };
            
            expect(body).to.include('{"band_name":"Executive","band_competency":"Executive Competency","band_responsibilities":"Executive Responsibilities"}');

        });
    });
});



