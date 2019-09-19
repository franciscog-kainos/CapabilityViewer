require('dotenv').config({path: 'mysql.env'});
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

db.connect(function (err) {
    if (err) throw err;
    console.log('Connected to mysql');
});

exports.getRoleNames = function (callback) {

    db.query('SELECT role_id, role_name,band_id,capability_id FROM Role ORDER BY band_id', function (err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

exports.getRolesInBand = function (bandId, callback) {

    db.query('SELECT * FROM Role WHERE band_id=?',[bandId], function (err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

exports.getCapabilityNames = function (callback) {

    db.query('SELECT capability_id, capability_name, job_family_id FROM Capability ORDER BY job_family_id', function (err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

exports.getCapabilityById = function (capability_id, callback) {
    db.query('SELECT * FROM Capability WHERE capability_id=?', [capability_id],
        function (err, rows) {
            if (err) return callback(err, null);
            callback(err, rows);
        });
};

exports.getBandNames = function (callback) {

    db.query('SELECT band_id, band_name FROM Band', function (err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

exports.getJobFamiliyNames = function (callback) {

    db.query('SELECT job_family_id, job_family_name FROM Job_Family', function (err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

//Get details for a specific band
exports.getBand = function (band_id, callback) {
    db.query(
        'SELECT band_name, band_competency, band_responsibilities FROM Band WHERE band_id = ?',
        [band_id],
        function (err, rows) {
            if (err) {
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
}


//Get training for a specific band
exports.getBandTraining = function(band_id, callback){
    db.query(
    'SELECT Training.training_name AS `training_name`, Training.training_link AS `training_link`, Training_Category.training_category_name AS `training_category` ' +
    'FROM Training INNER JOIN Band_Training on Training.training_id = Band_Training.training_id ' +
    'INNER JOIN Band on Band.band_id = Band_Training.band_id ' +
    'INNER JOIN Training_Category on Training_Category.training_category_id = Training.training_category_id ' +
    'WHERE Band.band_id = ?',
        [band_id],
        function(err, rows){
            if(err){
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
}


//Get details for a specific role
exports.getRole = function (role_id, callback) {
    db.query(
        'SELECT * FROM Role WHERE role_id = ?',
        [role_id],
        function (err, rows) {
            if (err) {
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};

//Get details for a specific capability
exports.getCapability = function (capability_id, callback) {
    db.query(
        'SELECT Capability.capability_name, User.user_f_name, User.user_l_name, User.user_picture ' +
        'FROM capabilitiesDB_test.Capability, capabilitiesDB_test.User ' +
        'WHERE User.user_id = Capability.leader_id AND Capability.capability_id = ?;',
        [capability_id],
        function (err, rows) {
            if (err) {
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};

exports.getCapabilitiesInJobFamily = function (family_id, callback) {
    db.query(
        'select * from Capability where Capability.job_family_id = ' + family_id,
        [family_id],
        function (err, rows) {
            if (err) {
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};

exports.getJobFamily = function (family_id, callback) {
    db.query(
        'select * from Job_Family where job_family_id = ' + family_id,
        [family_id],
        function (err, rows) {
            if (err) {
                return callback(err, null);
            }
            callback(null, rows[0]);
        }
    )
};

exports.getRolesInCapabilityInJobFamily = function (family_id, capability_id, callback) {
    db.query(
        'select * from Role WHERE capability_id=? AND capability_id IN (select Role.capability_id FROM Role JOIN Capability ON Role.capability_id=Capability.capability_id WHERE job_family_id=?)',
        [capability_id, family_id],
        function (err, rows) {
            if (err) {
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};
