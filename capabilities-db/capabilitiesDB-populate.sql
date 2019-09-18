INSERT INTO `Job_Family`(`job_family_name`)
    VALUES 
    ('Sales & Marketing'), 
    ('Technical'),
    ('Consulting'),
    ('Experience Design'),
    ('Management'),
    ('Central Services Teams');

INSERT INTO `Capability`(`capability_name`, `job_family_id`)
    VALUES
    ('Business Development', 1),
    ('Account Management', 1),
    ('Sales', 1),
    ('Inside Sales Development', 1),
    ('Pre Sales & Bid Management', 1),
    ('Marketing', 1),
	('Software Engineering', 2),
    ('Data Engineering', 2),
    ('Cyber Security', 2),
    ('Architect', 2),
	('Ops', 2),
	('Infrastructure', 2),
    ('Product', 3),
    ('Agile', 3),
    ('HCM', 3),
    ('Research', 4),
    ('UX Design', 4),
    ('Creative Design', 4),
    ('Service Design', 4),
    ('Project Management', 5),
    ('Support Management', 5);

INSERT INTO `Band`(`band_name`, `band_competency`, `band_responsibilities`)
    VALUES
    ('Executive', 'Executive Competency', 'Executive Responsibilities'),
    ('Leadership Community', 'Leadership Competency', 'Leadership Responsibilities'),
    ('Principal', 'Principal Competency', 'Principal Responsibilities'),
    ('Manager', 'Manager Competency', 'Manager Responsibilities'),
    ('Consultant', 'Consultant Competency', 'Consultant Responsibilities'),
    ('Senior Associate', 'Senior Competency', 'Senior Responsibilities'),
    ('Associate', 'Associate Competency', 'Associate Responsibilities'),
    ('Trainee', 'Trainee Competency', 'Trainee Responsibilities'),
    ('Apprentice', 'Apprentice Competency', 'Apprentice Responsibilities');

/* -------------------------- ROLES BEGIN ------------------------ */
INSERT INTO `Role`(`role_name`, `role_summary`, `role_responsibilities`, `capability_id`, `band_id`)
    VALUES
    /* --- Sales & Marketing --- */
    ('Head of Business Unit',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	1, 1),

    ('Head of Business Unit',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
    1, 2),

    ('Head of Business Unit',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	1, 3),

    ('Head of Business Unit',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	1, 4),

    ('Head of Business Unit',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	1, 5),

    ('Head of Business Unit',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	1, 6),

    ('Sales Director',
    '',
    '* ',
    2, 1),

    ('Sales Director',
    '',
    '* ',
    2, 2),

    ('Sales Director',
    '',
    '* ',
    3, 2),

    ('Sales Director',
    '',
    '* ',
    4, 2),

    ('Sales Director',
    '',
    '* ',
    5, 2),

    ('Marketing Leader',
    '',
    '* ',
    6, 2),

    ('Business Development Director',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	1, 3),

    /* --- Technical --- */
    ('Chief Technology Officer',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	10, 1),

    ('Technology Leader',
    '',
    '* ',
    10, 2),

    ('Infrastructure Leader',
    '',
    '* ',
    12, 2),

    /* --- Management --- */
    ('Head of Delivery',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	20, 1),

    ('Head of Support Services',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	21, 1),

    ('Infrastructure Leader',
    '',
    '* ',
    12, 2);

 /* -------------------------- ROLES END ------------------------ */

INSERT INTO `User`(`user_f_name`, `user_l_name`, `role_id`)
    VALUES
    ('Jane One', 'Doe', 1),
    ('Jane Two', 'Doe', 2),
    ('Jane Three', 'Doe', 3);

INSERT INTO `Training_Category`(`training_category_name`)
	VALUES
    ('Professional Skills'),
    ('Technical Skills'),
    ('Development Programmes');

INSERT INTO `Training`(`training_name`, `training_link`, `training_category_id`)
	VALUES
    ('Coaching - 3. Advanced', 'https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Coaching%20-%20Advanced.aspx', 1),
    ('People Manager Toolkit: Performance', 'https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Training%20Schedule%202017.aspx', 1),
	('Coaching - Intermediate', 'https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Crucial%20Conversations.aspx', 3),
	('Train the Trainer', 'https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/From%20Subject%20Matter%20Expert%20to%20Training%20Facilitator.aspx', 3),
	('Influencing Others', 'https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Influencing%20Others.aspx', 2),
	('Negotiating Successfully', 'https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/Wikis/Forms/AllItems.aspx?id=%2Fpeople.old%2FL%26D%2FWikis%2FSkills%20Training%2FNegotiating%20Successfully.docx&amp;parent=%2Fpeople.old%2FL%26D%2FWikis%2FSkills%20Training&amp;embed=%7B%22o%22%3A%22https%3A%2F%2Fkainossoftwareltd.sharepoint.com%22%2C%22id%22%3A%2247a5e74f-09ea-3383-486f-d35174df00ad%22%2C%22af%22%3Atrue%7D', 2);

INSERT INTO `Role_Training`(`role_id`, `training_id`)
	VALUES
    (1, 1),
    (3, 5),
	(2, 1);

INSERT INTO `Band_Training`(`band_id`, `training_id`)
	VALUES
    (1, 1),
    (5, 2),
    (2, 4);
