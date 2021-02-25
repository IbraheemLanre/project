drop database if exists analyticsdb;
create database analyticsdb;
use analyticsdb;

create table analytics (
    CountryCode char(3) not null foreign key,
    Views integer not null,
    LastViewedDate datetime() not null
);

drop user if exists 'aremu'@'localhost';
create user 'aremu'@'localhost' identified by 'welcome';

grant all privileges on analyticsdb.* to 'aremu'@'localhost';
