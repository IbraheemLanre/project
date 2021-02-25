drop database if exists analyticsdb;
create database analyticsdb;
use analyticsdb;

create table analytics (
    CountryCode char(3) not null foreign key,
    Views integer default null,
    LastViewedDate datetime default null
);

drop user if exists 'aremu'@'localhost';
create user 'aremu'@'localhost' identified by 'welcome';

grant all privileges on analyticsdb.* to 'aremu'@'localhost';
