drop database if exists bookdb;
create database bookdb;
use bookdb;

create table book(
    bookId integer not null primary key,
    name varchar(62) not null,
    author varchar(12) not null,
    type varchar(26) not null,
    year integer not null
);

drop user if exists 'adrian'@'localhost';
create user 'adrian'@'localhost' identified by 'tN5LKSaK';

grant all privileges on bookdb.* to 'adrian'@'localhost';

insert into book values(1,'The beautiful ones are not yet born', 'Ayi Kwei Armah', 'novel', 1968);
insert into book values(2, 'The gods are not to blame', 'Ola Rotimi', 'novel', 1971);