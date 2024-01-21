create database if not exists test;
use test;
create table if not exists t1 (
	id int primary key auto_increment,
	title varchar(30)
);
create table if not exists t2 (
	id int primary key,
	description varchar(200),
	foreign key (id) references t1(id)
);
