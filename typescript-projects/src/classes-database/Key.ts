import { IKey } from '../interfaces/IKey.interfaces';

export class Key implements IKey{
    id: number

    constructor(anyId:number){
        this.id = anyId
    }

    equals(id: number):boolean{
        if(this.id != id ){
            return false
        }else{
            return true
        }
    }

    getNumber():number{
        return this.id
    }
}