import { Convertable } from './../../interfaces/Computer.interfaces';

export class ComputerTwo {
    converter:Convertable;
    
    constructor(c: Convertable){
        this.converter = c
    }

    printConversion(x: number):void{
        const result = this.converter.convert(x)
        console.log(result)
    }
}