const assert = require('assert');
const request = require('request');

const API_URL = 'http://localhost:8002/roles';

describe('Getting all roles', function() {

    it('Should return status 200 with valid courses', function() {
        request.get({
            uri: API_URL,
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

            assert.equal(res.statusCode, 200);
        });
    });
});
