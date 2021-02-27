/**
 * Computer class demo starts here, please uncomment to run the code
 */

// import { ComputerOne } from "./classes/services/ComputerOne";
// import { ComputerTwo } from "./classes/services/ComputerTwo";

// let computerOne: ComputerOne = new ComputerOne(1)
// let computerTwo = new ComputerTwo(computerOne)
// computerTwo.printConversion(3)


/**
 * BankAccount class demo starts here
 */

import { Database } from './classes-database/Database';
import { Key } from './classes-database/Key';
import { BankAccount } from './classes-database/BankAccount';

let key1 = new Key(1)
let key2 = new Key(2)
let key3 = new Key(3)

let bankAccountOne = new BankAccount(5000, key1)
bankAccountOne.deposit(4000)
console.log(bankAccountOne)
console.log(bankAccountOne.getBalance())

let bankAccountTwo = new BankAccount(6000, key2)
let bankAccountThree = new BankAccount(5000, key3)

let database = new Database(bankAccountOne)
database.insert(bankAccountOne)
database.insert(bankAccountTwo)
database.insert(bankAccountThree)

console.log('database is: ', database)

database.delete(key1)
console.log(database)

let search = database.find(key3)
console.log(search)


