drop database if exists test;
create database if not exists test;
use test;
create table if not exists users
(id int,
username varchar(30),
email varchar(40),
password_hash varchar(200),
age tinyint,
index (username, email));

insert into users values
(0, 'user1', 'user1@mail.com', '123', 34),
(1, 'user2', 'user2@mail.com', '456', 23);

insert into users (username, email) values
('user3', 'user3@mail.com'),
('user4', 'user4@mail.com'),
('user5', 'user5@mail.com');
-- update users set id = 0;
update users set username = 'user55' where username = 'user5';
select * from users;


