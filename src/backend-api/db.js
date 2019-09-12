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

//Get details for a specific band
exports.getBand = function(band_id, callback) {
    db.query(
        'SELECT band_name, band_competency, band_responsibilities FROM Band WHERE band_id = ?',
        [band_id],
        function(err, rows){
            if(err){
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};

//Get details for a specific role
exports.getRole = function(role_id, callback) {
    db.query(
        'SELECT role_name, role_summary, role_training, role_responsibilities FROM Role WHERE role_id = ?',
        [role_id],
        function(err, rows){
            if(err){
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};

//Get details for a specific capability
exports.getCapability = function(capability_id, callback) {
    db.query(
        'SELECT Capability.capability_name, User.user_f_name, User.user_l_name ' +
        'FROM capabilitiesDB_test.Capability, capabilitiesDB_test.User ' +
        'WHERE User.user_id = Capability.leader_id AND Capability.capability_id = ?;',
        [capability_id],
        function(err, rows){
            if(err){
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};
