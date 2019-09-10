INSERT INTO `Job_Family`(`job_family_name`) 
    VALUES 
    ('Sales & Marketing'), 
    ('Technical');
 
INSERT INTO `Capability`(`capability_name`, `job_family_id`) 
    VALUES 
    ('Business Development Director',  1), 
    ('Account Director',  1), 
    ('Softare Engineering Manager',  2), 
    ('Data Engineering Manager',  2);
 
INSERT INTO `Band`(`band_name`, `band_competency`) 
    VALUES ('Executive', 'Competency'), ('Leadership Community', 'Competency');
 
INSERT INTO `Role`(`role_name`, `role_summary`, `role_training`, `role_responsibilities`, `capability_id`, `band_id`)
    VALUES 
    ('Head Executive of Business Unit', 'Summary', 'Training', 'Responsibility', 1, 1),
    ('Head Leader of Business Unit', 'Summary', 'Training', 'Responsibility', 1, 1), 
    ('Sales Executive Director', 'Summary', 'Training', 'Responsibility', 2, 2),
    ('Sales Leadership Director', 'Summary', 'Training', 'Responsibility', 2, 1);
 
INSERT INTO `User`(`user_f_name`, `user_l_name`, `role_id`)
    VALUES 
    ('Jane One', 'Doe', 1),
    ('Jane Two', 'Doe', 2),
    ('Jane Three', 'Doe', 3);
