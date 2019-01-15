import { EventEmitter } from "events";
import LiteralValue from "./LiteralValue";

class MemBlockSetEventArgs {
    address: number;
    value: LiteralValue;
    constructor(address: number, value: LiteralValue) {
        this.address = address;
        this.value = value;
    }
}

export default class MemBlock extends EventEmitter {
    byteSize: number;
    mem: string[];

    constructor(byteSize: number) {
        super();
        this.byteSize = byteSize;
        this.mem = new Array(byteSize).fill(0);
    }

    setValue = (address: number, value: LiteralValue) => {
        const byteString = value.getValueAsByteString();
        for(let i = 0; i < value.byteSize; i++) {
            this.mem[address + i] = byteString[i] || '\0';
        }
        this.emit('valueset', new MemBlockSetEventArgs(address, value));
    }

    getValue = (adress: number, byteSize = 8) => {
        const byteString = this.mem.slice(adress, adress + byteSize).join()
        return new LiteralValue(byteSize)
            .setValueAsByteString(byteString);
    }
}