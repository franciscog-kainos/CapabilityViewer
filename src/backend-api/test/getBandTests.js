const assert = require('assert');
const request = require('request');

const API_URL = 'http://localhost:8002/bands/responsibilities';

describe('Getting responsibilities for a band', function() {

    it('Should return status 200 with valid band id', function() {
        request.get({
            uri: API_URL + '/1',
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

            assert.equal(res.statusCode, 200);
        });
    });
});
