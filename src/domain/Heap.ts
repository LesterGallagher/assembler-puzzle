import MemBlock from "./MemBlock";

export class Heap extends MemBlock {
    constructor(byteSize: number) {
        super(byteSize);
    }
}