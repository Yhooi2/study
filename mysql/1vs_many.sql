create database if not exists test;
use test;
create table if not exists t11 (
	id int primary key auto_increment,
	title varchar(30)
);
create table if not exists t22 (
	id int primary key auto_increment,
	description varchar(200),
	title_id int,
	foreign key(title_id) references t11(id)
);
