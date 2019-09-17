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

});


describe('Deleting a job family', function(){
    before(function() {
        //add test record to the database when add job band functionality has been completed
        //job_family_id: 100, job_family_name: 'Deletable job family'
    });

    it.only('should delete a job family by a given id', function(){
        request.get({
            uri: API_BASE_URL + 'families',
        }, (err, res, body) => {
        if (err) {
           logger.error(err);
        };
           body = JSON.parse(body);
           assert.deepEqual(body[6], { job_family_id: 100, job_family_name: 'Deletable job family' }, 'job family exists before test');
           assert.equal(body.length, 7);
        });


        request.delete({
            uri: API_BASE_URL + 'deleteJobFamily/100'
        }, (err, res, body) => {
            if(err) {
                logger.error(err);
            }
            body = JSON.parse(body);
            assert.equal(body['affectedRows'], 1);

            //Get families to check job family has been successfully deleted
            request.get({
                uri: API_BASE_URL + 'families',
            }, (getErr, getRes, allFamilies) => {
                if (getErr) {
                    logger.error(getErr);
                };
                allFamilies = JSON.parse(allFamilies);
                assert.equal(body.length, 6);
                assert.equal(false, JSON.stringify(body).contains({ job_family_id: 100, job_family_name: 'Deletable job family' }), 'job family has been deleted from database')

            });

        })
    });

});


describe('Updating a Job Family name', function() {
    it('Should return status 200 with valid endpoint', function() {
        request.put({
            uri: API_BASE_URL + 'families',
        }, (err, res, body) => {
            if (err) {
                logger.error(err);
            };
            assert.equal(res.statusCode, 200);
        });
    });
});
