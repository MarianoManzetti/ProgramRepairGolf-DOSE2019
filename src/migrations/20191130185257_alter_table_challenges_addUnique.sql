alter table challenges
    modify user_id integer not null,
    modify class_name varchar(30) not null unique,
    modify title varchar (50) not null unique,
    modify description varchar(50),
    modify source varchar(10000) not null,
    modify point integer not null,
    modify owner_solution_id integer not null;