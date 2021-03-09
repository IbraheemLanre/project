drop database if exists superherodb;
create database superherodb;

create table superherodb.superhero(
    heroId integer not null primary key,
    name varchar(15) not null,
    yearOfBirth integer not null,
    superproperty varchar(29) not null,
    costume varchar(22) not null
);

drop user if exists 'luke'@'localhost';
create user 'luke'@'localhost' identified by 'JKeC980H';

grant all privileges on superherodb.* to 'luke'@'localhost';

insert into superherodb.superhero values(1, 'Debugger', 1945, 'Catchingbug', 'black');
insert into superherodb.superhero values(2, 'Antivirus', 1984, 'Blockingvirus', 'red');
