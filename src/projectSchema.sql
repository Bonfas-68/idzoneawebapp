--Create The database
    drop database idzoneadb
    CREATE DATABASE idzoneadb;
    USE idzoneadb;
--Create Tables for the database
    CREATE TABLE users(
        user_id int IDENTITY(1,1) Primary key,
        username VARCHAR(25),
        user_domain VARCHAR(50),
        user_image VARCHAR(50),
        user_email VARCHAR(20),
        user_phone VARCHAR(10),
        user_location VARCHAR(255),
        user_password VARCHAR(255)
    );
--Query OK, 0 rows affected (0.89 sec)
    insert into users (
        user_id,
        username,
        user_domain,
        user_email,
        user_phone,
        user_location) VALUES
    (1,'bonfas oluoch', 'technology', 'oluoch@gmail.com', '0797914242', 'kenya'),
    (2,'Calos Menjor', 'Humanty', 'calorM@gmail.com', '0711213644', 'uganda');

--Read data
    SELECT * FROM users;


--FOLLOW TABLE
    --------------------------
    CREATE TABLE follow(
        follow_id int IDENTITY(1,1) Primary key, 
        user_id int, 
        Foreign key(user_id) REFerences users(user_id)
    );
    -- add data
    insert into 
    follow(follow_id, user_id)
    VALUES
    (1,1),
    (2,2);

    --Read data
    SELECT * FROM follow;

    --Query OK, 0 rows affected (0.89 sec)

--iDEA TABLE
    -------------------------
    CREATE TABLE ideas (
        idea_id int IDENTITY(1,1) Primary key,
        user_id int,
        idea_text VARCHAR(255),
        idea_img VARCHAR(255),
        idea_video VARCHAR(255),
        idea_file VARCHAR(255),
        votes int DEFAULT 0,
        likes int DEFAULT 0,
        Foreign key(user_id) REFERENCES users(user_id) on delete no action
    );
    insert into 
    ideas
    (idea_id, user_id, idea_text)
    VALUES
    (1,16,'Show love to all help as you can and get busy atleast for others at once!!!'),
    (2,17,'The way to solve for any float challenge is by clear both');

    --Read data
    SELECT * FROM ideas;

    --Query OK, 0 rows affected (0.89 sec)
--COMMENT TABLE
    ------------------------
    CREATE TABLE comment(
        comment_id int IDENTITY(1,1) Primary key,
        comment VARCHAR(255),
        user_id int,
        idea_id int, 
        Foreign key(user_id) REFERENCES users(user_id) on delete no action,
        Foreign key(idea_id) REFERENCES ideas(idea_id) on delete cascade
    );
    --add data
    insert into 
    comment(comment_id, comment, user_id, idea_id)
    VALUES
    (1 ,'Cool man love that people show love',16 ,1),
    (2 ,'Better to apply for clarity',17 ,2);

    --Read data
    SELECT * FROM comment;

    --Query OK, 0 rows affected (1.14 sec)
--TESTiMONiAL TABLE
    ------------------------
    CREATE TABLE testimony(
        testimony_id int IDENTITY(1,1) Primary key,
        testimony VARCHAR(255),
        user_id  int,
        idea_id  int,
        created_at DateTiME,
        Foreign key(user_id) REFERENCES  users(user_id) on delete no action,
        Foreign key(idea_id) REFERENCES ideas(idea_id) on delete no action
    );
    --add data 
    insert into 
    testimony(testimony_id, testimony, user_id, idea_id)
    VALUES
    (1,'Best of all platform here i find best way to solve many problems in a simple way ' ,17 ,1),
    (2,'Willing to show you ways out solve is the best of all compassion ever seen in this platform' ,16 ,1);

    --Read data
    SELECT * FROM testimony;

    --Query OK, 0 rows affected (0.41 sec)
--DOMAin TABLE
    ------------------------
    CREATE TABLE domain(
        domain_id int IDENTITY(1,1) Primary key,
        domain_name VARCHAR(255), 
        added_on DateTiME
    ); 
    --add data
    insert into 
    domain(domain_id, domain_name)
    VALUES
    (1, 'Technology'),
    (2, 'Humanity');

    --Read data
    SELECT * FROM domain;

    --Query OK, 0 rows affected (0.40 sec)
--CORRECTiON iDEAS TABLE
    ------------------------
    CREATE TABLE corrected_idea(
        corrected_id int IDENTITY(1,1) Primary key,
        idea_id int,
        user_id int,
        new_idea_text varchar(255),
        domain_id int,
        created_at DateTiME,
        foreign key(domain_id) REFERENCES domain(domain_id) on delete no action,
        foreign key(user_id) REFERENCES users(user_id) on delete no action,
        foreign key(idea_id) REFERENCES ideas(idea_id) on delete no action
    );
    --add data
    insert into corrected_idea(
        corrected_id,
        idea_id,
        new_idea_text,
        domain_id,
        user_id
    )
    VALUES
    (1,2 ,'Depends from how your environment defines love but from relgious way its good and holy to love no matter who they are because God loves us.' , 2,16),
    (2,1 ,'Depends when you use ether both the left and right is when you use clear both' , 1,17);
    --Read data
    SELECT * FROM corrected_idea;

    --Query OK, 0 rows affected (0.64 sec)
--COLLECTiON /SAVED iDEAS TABLE
    ------------------------
    CREATE TABLE collection_table(
        collect_id int IDENTITY(1,1) Primary key,
        idea_id int,
        created_at DateTiME,
        user_id int,
        domain_id int,
        Foreign key(domain_id) REFERENCES domain(domain_id) on delete no action,
        Foreign key(user_id) REFERENCES users(user_id) on delete no action ,
        Foreign key(idea_id) REFERENCES ideas(idea_id) on delete no action
    );
    --add data
    insert into collection_table(
        collect_id,
        idea_id,
        user_id,
        domain_id
    )
    VALUES
    (1,1,17 ,2),
    (2,2 ,16 ,1);
    --Read data
    SELECT * FROM collection_table;

    --Query OK, 0 rows affected (0.91 sec)
--PROFiLE  TABLE
    ------------------------
    CREATE TABLE profile(
        profile_id int IDENTITY(1,1) Primary key,
        bio varchar(1000),
        user_id int,
        idea_id int,
        comment_id int,
        domain_id int,
        follow_id int,
        collect_id int,
        Foreign key(user_id) REFERENCES users(user_id),
        Foreign key(idea_id) REFERENCES ideas(idea_id),
        Foreign key(domain_id) REFERENCES domain(domain_id),
        Foreign key(follow_id) REFERENCES follow(follow_id), 
        Foreign key(comment_id) REFERENCES comment(comment_id),
        Foreign key(collect_id) REFERENCES collection_table(collect_id)
    );
    --add data
    insert into profile(
        profile_id,
        user_id,
        idea_id,
        comment_id,
        domain_id,
        follow_id,
        collect_id
    )
    VALUES
    (1, 16, 1, 2, 1, 2,1),
    (2, 17, 2, 1, 1, 2,1);
    --Read data
    SELECT * FROM profile;

    --Query OK, 0 rows affected (0.45 sec)
--ADVERTS  TABLE
    ------------------------
    CREATE TABLE adverts(
        ad_id int IDENTITY(1,1) Primary key, 
        created_at DateTiME,
        user_id int NOT NULL,
        ad_image VARCHAR(255) NOT NULL,
        ad_message VARCHAR(255) NOT NULL,
        ad_source VARCHAR(255) NOT NULL,
        ad_clicks int DEFAULT 0,
        Foreign key(user_id) REFERENCES users(user_id) on delete no action  
    );
    --add data
    insert into adverts(
        ad_id,
        user_id,
        ad_image,
        ad_message,
        ad_source
    ) 
    VALUES
    (1,17 ,'my_ad.png' , 'Get connected to our annual bootcamp start from june 25th 2023', 'bonlu-bootcamp.com'),
    (2,16 ,'may_ad.jpg' , 'May for majors in getting the most to be an influencer of love ', 'lovers-hub.com/get-involved');
    --Read data
    SELECT * FROM adverts
    --Query OK, 0 rows affected (0.96 sec)