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

    db.query('SELECT Role.role_id, Role.role_name, Role.band_id, Role.capability_id ' +
        'FROM capabilitiesDB_test.Role ' +
        'ORDER BY Role.band_id',
        function(err, rows) {
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

exports.getCapabilityNames = function(callback) {

    db.query('SELECT Capability.capability_id, Capability.capability_name ' +
        'FROM capabilitiesDB_test.Capability ' +
        'ORDER BY Capability.job_family_id',
        function(err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

exports.getBandNames = function(callback) {

    db.query('SELECT Band.band_id, Band.band_name ' +
        'FROM capabilitiesDB_test.Band',
        function(err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

exports.getJobFamiliyNames = function(callback) {

    db.query('SELECT Job_Family.job_family_id, Job_Family.job_family_name ' +
        'FROM capabilitiesDB_test.Job_Family',
        function(err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

//Get details for a specific band
exports.getBand = function(band_id, callback) {
    db.query(
        'SELECT Band.band_name, Band.band_competency, Band.band_responsibilities ' +
        'FROM capabilitiesDB_test.Band ' +
        'WHERE Band.band_id = ?',
        [band_id],
        function(err, rows){
            if(err){
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};

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


//Update a specific job family with a new name
exports.editFamily = function(data, callback) {
    console.log("This should be here")
    var id = data.job_family_id;
    var newName = data.job_family_name;
    db.query(
        'update Job_Family set Job_Family.job_family_name = "' +
         newName  + '" where Job_Family.job_family_id = "' + id +'"',
        function(err, rows){
            console.log("Executed")
            if(err){
                console.log("Executed")
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};

//Get details for a specific role
exports.getRole = function(role_id, callback) {
    db.query(
        'SELECT Role.role_name, Role.role_summary, Role.role_training, Role.role_responsibilities ' +
        'FROM capabilitiesDB_test.Role ' +
        'WHERE Role.role_id = ?',
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
        function (err, rows) {
            if (err) {
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};

//Get all job families with no associated entities
exports.getDeletableJobFamilies = function(callback){
    db.query(
        'SELECT job_family_name, job_family_id ' +
         'FROM Job_Family ' +
         'WHERE job_family_id NOT IN ' +
         '( ' +
         	'SELECT job_family_id ' +
             'FROM Capability ' +
         ')',
        function(err, rows){
            if(err){
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};

//Delete a specific job family
exports.deleteJobFamily = function(job_family_id, callback){
    db.query(
        'DELETE FROM Job_Family ' +
         'WHERE job_family_id = ?',
        [job_family_id],
        function(err, rows){
            if(err){
                return callback(err, null);
            }
            callback(null, rows);
        }

    )
}

// Adds a new job family to the database
exports.insertFamily = function(data, callback) {
    db.query('INSERT INTO Job_Family SET ?', data, function(err, results, fields) {
        console.log(data);
        if (err) return callback(err, null);
        callback(err, results.insertId);
    });
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

exports.getUser = (id, callback) => {
    db.query(
        'select * from User WHERE user_id=?',
        [id],
        function (err, rows) {
            if (err) {
                return callback(err, null);
            }
            callback(null, rows[0]);
        }
    )
};
