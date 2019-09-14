USE capabilitiesDB_prod;

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
	('Infrstructure', 2),
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
INSERT INTO `Role`(`role_name`, `role_summary`, `role_training`, `role_responsibilities`, `capability_id`, `band_id`)
    VALUES
    /* --- Sales & Marketing --- */
    ('Head of Business Unit',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* [Coaching - 3. Advanced](https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Coaching%20-%20Advanced.aspx)',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	1, 1),

    ('Head of Business Unit',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* [Coaching - 3. Advanced](https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Coaching%20-%20Advanced.aspx)',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
    2, 1),

    ('Head of Business Unit',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* [Coaching - 3. Advanced](https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Coaching%20-%20Advanced.aspx)',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	3, 1),

    ('Head of Business Unit',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* [Coaching - 3. Advanced](https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Coaching%20-%20Advanced.aspx)',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	4, 1),

    ('Head of Business Unit',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* [Coaching - 3. Advanced](https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Coaching%20-%20Advanced.aspx)',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	5, 1),

    ('Head of Business Unit',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* [Coaching - 3. Advanced](https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Coaching%20-%20Advanced.aspx)',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	6, 1),

    ('Sales Director',
    '',
    '* ',
    '* ',
    1, 2),

    ('Business Development Director',
    '',
    '* ',
    '* ',
    1, 3),

    ('Business Development Manager',
    '',
    '* ',
    '* ',
    1, 4),

    ('Junior Business Development Manager',
    '',
    '* ',
    '* ',
    1, 5),

    ('',
    '',
    '* ',
    '* ',
    1, 6),

    ('',
    '',
    '* ',
    '* ',
    2, 6),

    ('',
    '',
    '* ',
    '* ',
    1, 7),

    ('',
    '',
    '* ',
    '* ',
    2, 7),

    ('Sales Associate',
    '',
    '* ',
    '* ',
    3, 6),

    ('Sales Associate',
    '',
    '* ',
    '* ',
    3, 7),

    ('Sales Director',
    '',
    '* ',
    '* ',
    2, 2),

    ('Sales Director',
    '',
    '* ',
    '* ',
    3, 2),

    ('Sales Director',
    '',
    '* ',
    '* ',
    4, 2),

    ('Sales Director',
    '',
    '* ',
    '* ',
    5, 2),

    ('Marketing Leader',
    '',
    '* ',
    '* ',
    6, 2),

    ('Business Development Director',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* [Coaching - 3. Advanced](https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Coaching%20-%20Advanced.aspx)',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	6, 1),

    /* --- Technical --- */
    ('Chief Technology Officer',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* [Coaching - 3. Advanced](https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Coaching%20-%20Advanced.aspx)',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	10, 1),

    ('Technology Leader',
    '',
    '* ',
    '* ',
    10, 2),

    ('Infrastructure Leader',
    '',
    '* ',
    '* ',
    12, 2),

    /* --- Management --- */
    ('Head of Delivery',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* [Coaching - 3. Advanced](https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Coaching%20-%20Advanced.aspx)',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	20, 1),

    ('Head of Support Services',
    'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.',
    '* [Coaching - 3. Advanced](https://kainossoftwareltd.sharepoint.com/people.old/L&amp;D/SitePages/Coaching%20-%20Advanced.aspx)',
    '* Deliver training as part of MAP
* Encourage collaboration across BUs
* Identify and actively develop talent at all levels within your area of responsibility',
	21, 1),

    ('Infrastructure Leader',
    '',
    '* ',
    '* ',
	12, 2);

 /* -------------------------- ROLES END ------------------------ */

INSERT INTO `User`(`user_f_name`, `user_l_name`, `role_id`)
    VALUES
    ('Jane One', 'Doe', 1),
    ('Jane Two', 'Doe', 2),
    ('Jane Three', 'Doe', 3);
