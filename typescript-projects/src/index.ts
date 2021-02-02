import { ComputerOne } from "./classes/services/ComputerOne";
import { ComputerTwo } from "./classes/services/ComputerTwo";

let computerOne: ComputerOne = new ComputerOne(1)
let computerTwo = new ComputerTwo(computerOne)
computerTwo.printConversion(3)
