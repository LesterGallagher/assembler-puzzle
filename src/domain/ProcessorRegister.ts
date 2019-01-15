import ValueLocation from "./MemoryLocation";

const registerByteSize = 8;

export default class ProcessorRegister extends ValueLocation {
    registerName: string;
    byteSize: number;

    constructor(registerName: string) {
        super();
        
        this.registerName = registerName;
        this.byteSize = registerByteSize;
    }
}
