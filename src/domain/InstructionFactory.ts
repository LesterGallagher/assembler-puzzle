import { MovInstruction } from "./MovInstruction";

export default class InstructionFactory {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    createInstruction = () => {
        switch(this.name) {
            case 'mov': 
            return new MovInstruction();
            default: throw new Error(`No instruction exists with the name ${this.name}.`);
        }
    }
}