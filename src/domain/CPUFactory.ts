import EAXRegister from "./EAXRegister";
import EBXRegister from "./EBXRegister";
import ECXRegister from "./ECXRegister";
import EDXRegister from "./EDXRegister";
import CPU from './CPU';
import ProcessorRegister from "./ProcessorRegister";
import InstructionFactory from "./InstructionFactory";

export default class CPUFactory {
    heapSize: number;
    stackSize: number;
    instructionSize: number;
    registers: ProcessorRegister[];
    allowedInstructions: InstructionFactory[];
    
    constructor() {
        this.heapSize = 0;
        this.stackSize = 0;
        this.registers = [];
        this.allowedInstructions = [];
    }

    setInstructionSize = (instructionSize: number) => {
        this.instructionSize = instructionSize;
        return this;
    }

    setHeapSize = (heapSize: number) => {
        this.heapSize = heapSize;
        return this;
    }

    setStackSize = (stackSize: number) => {
        this.stackSize = stackSize;
        return this;
    }

    addRegister = (register: ProcessorRegister) => {
        this.registers.push(register);
        return this;
    }

    addAllowedInstruction = (name: string) => {
        const factory = new InstructionFactory(name);
        this.allowedInstructions.push(factory);
        return this;
    }

    addEasyModeRegisters = () => {
        const eax = new EAXRegister();
        const ebx = new EBXRegister();
        const ecx = new ECXRegister();
        const edx = new EDXRegister();

        this.addRegister(eax);
        this.addRegister(ebx);
        this.addRegister(ecx);
        this.addRegister(edx);

        return this;
    }

    addEasyModeInstructions = () => {
        this.addAllowedInstruction('mov');
        return this;
    }

    addIntermediateModeRegisters = () => {
        throw new Error('Not yet implemented');
        return this;
    }

    addHardModeRegisters = () => {
        throw new Error('Not yet implemented');
        return this;
    }

    getOptions = () => {
        return {
            registers: this.registers,
            heapSize: this.heapSize,
            stackSize: this.stackSize,
            instructionSize: this.instructionSize,
            allowedInstructions: this.allowedInstructions
        };
    } 

    createCPU = () => {
        return new CPU(this.getOptions());
    }
}