import InstructionArgument from "./InstructionArgument";

export default abstract class Instruction {
    name: string;
    arguments: InstructionArgument[];
    
    constructor() {
        
    }
}