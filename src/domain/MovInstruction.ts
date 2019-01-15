import Instruction from "./Instruction";
import InstructionArgument from "./InstructionArgument";

export class MovInstruction extends Instruction {
    name: string;
    arguments: InstructionArgument[];
    
    constructor() {
        super();
        this.name = 'mov';
        this.arguments = [new InstructionArgument(), new InstructionArgument()]
    }
}