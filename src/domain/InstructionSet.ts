import Instruction from "./Instruction";
import { EventEmitter } from "events";

export default class InstructionSet extends EventEmitter {
    instructionSize: number;
    instructions: Instruction[];

    constructor(instructionSize: number) {
        super();
        this.instructionSize = instructionSize;
        this.instructions = new Array(instructionSize).fill(null);
    }
}
