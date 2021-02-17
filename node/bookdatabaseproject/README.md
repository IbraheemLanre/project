# NODE AND MARIADB(MYSQL) PART I

This is a book project created using **Node** and **MariaDB**. The idea is keeping every code logic separate for readability and maintainability.

## Dependencies
-   **mariadb**
-   **dotenv**


## Files

*bookcreatestatement.sql* is used to create a database and set user rights and privileges.

*sqlstatement.json* is used to store the sql query statements.

*parameters.js* is an array used to store values that are given as placeholders in the sql statements.

*database.js* has the class containing logics for connecting to mariadb from local station.

*datastoragelayer.js* has the backend codes for implementing persistent storage of data to and fro the database.

*main.js* contains code for communicating between the server, database and client.


### TODO
The PART II will contain codes for rendering data to webpages using **Express** and **Ejs**.



