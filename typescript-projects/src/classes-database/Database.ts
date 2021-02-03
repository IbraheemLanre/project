import { Key } from './Key';
import { BankAccount } from './BankAccount'

export class Database{
account: BankAccount
db: Array<BankAccount> = []

constructor(account: BankAccount){
    this.account = account
}

insert(account:BankAccount):boolean{
    if(!account.getBalance && !account.getKey){
        return false
    }else{
        this.db.push(account)
        return true
    }
}

find(key:Key):BankAccount{
    if(!key.equals){
        return null
    }else{
        let searchedRecord = this.db.find(key=> key.getKey == this.account.getKey)
        return searchedRecord
    }
    
}

delete(key:Key):boolean{
    if(!key.equals){
        return false
    }else{
        let accountIndex = this.db.findIndex(key => key.getKey == this.account.getKey)
        this.db.splice(accountIndex, 1)
        return true
    }
}
}