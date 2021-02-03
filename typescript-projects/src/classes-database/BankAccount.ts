import { IKey } from './../interfaces/IKey.interfaces';
import { Key } from "./Key";

export class BankAccount {
balance:number
key:Key

constructor(balance: number, key:Key){
    this.balance = balance
    this.key= key
}

deposit(amount:number):void{
this.balance += amount
}

getBalance():number{
    return this.balance
}

getKey():Key{
    return this.key
}
}