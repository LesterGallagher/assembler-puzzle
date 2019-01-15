import { Heap } from "./Heap";
import { Stack } from "./Stack";
import ProcessorRegister from "./ProcessorRegister";
import InstructionSet from "./InstructionSet";

interface CPUConstructorOptions { 
    heapSize: number, 
    stackSize: number,
    registers: ProcessorRegister[],
    instructionSize: number
}

export default class CPU {
    heap: Heap;
    stack: Stack;
    instructionSet: InstructionSet;
    stackSize: number;
    heapSize: number;
    instructionSize: number;
    registers: ProcessorRegister[];

    constructor(options: CPUConstructorOptions) {
        this.stackSize = options.stackSize;
        this.heapSize = options.heapSize;
        this.instructionSize = options.instructionSize;
        this.heap = new Heap(options.heapSize);
        this.stack = new Stack(options.stackSize);
        this.instructionSet = new InstructionSet(options.instructionSize);
        this.registers = options.registers;
    }
}