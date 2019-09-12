require('dotenv').config({ path: 'mysql.env' });
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

db.connect(function(err) {
    if (err) throw err;
    console.log('Connected to mysql');
});

exports.getRoleNames = function(callback) {

    db.query('SELECT role_id, role_name,band_id,capability_id FROM Role ORDER BY band_id', function(err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

exports.getCapabilityNames = function(callback) {
	
    db.query('SELECT capability_id, capability_name FROM Capability ORDER BY job_family_id', function(err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

exports.getBandNames = function(callback) {
	
    db.query('SELECT band_id, band_name FROM Band', function(err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

exports.getJobFamiliyNames = function(callback) {
	
    db.query('SELECT job_family_id, job_family_name FROM Job_Family', function(err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};