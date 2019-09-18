const assert = require('assert');
const request = require('request');
const log4js = require('log4js');

log4js.configure({
  appenders: { api_tests: { type: 'file', filename: 'api_tests.log' } },
  categories: { default: { appenders: ['api_tests'], level: 'error' } }
});

const logger = log4js.getLogger('api_tests');
const API_BASE_URL = 'http://localhost:8002/';

describe('Getting all roles', function() {
    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_BASE_URL + 'roles',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };
            assert.equal(res.statusCode, 200);
        });
    });
});

describe('Getting all job families', function() {

    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_BASE_URL + 'families',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };
            assert.equal(res.statusCode, 200);
        });
    });
});

describe('Getting all bands', function() {

    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_BASE_URL + 'bands',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };
            assert.equal(res.statusCode, 200);
        });
    });
});

describe('Getting all capabilities', function() {

    it('Should return status 200 with valid endpoint', function() {
        request.get({
            uri: API_BASE_URL + 'capabilities',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };
            assert.equal(res.statusCode, 200);
        });
    });
});

describe('Getting a specific role', function(){
    it("Should get training details for a specific role", function(){
            request.get({
                uri: API_BASE_URL + 'roles/1/training',
            }, (err, res, body) => {
                if (err) {
                    logger.error(err);
                };
                body = JSON.parse(body);
                assert.deepEqual(Object.keys(body), ['training_name', 'training_link', 'training_category']);
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
                      assert.equal(res.statusCode, 200);
                  });

    });
    it('Should return band name, band competency and band responsibilities', function() {
        request.get({
            uri: API_BASE_URL + 'bands/1',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
              };
            body = JSON.parse(body);
            assert.deepEqual(Object.keys(body), ['band_name','band_competency','band_responsibilities']);
        });
    });
    it("Should get training details for a specific band", function(){
        request.get({
            uri: API_BASE_URL + 'bands/1/training',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };
            body = JSON.parse(body);
            assert.deepEqual(Object.keys(body), ['training_name', 'training_link', 'training_category']);
        });
    });

});



