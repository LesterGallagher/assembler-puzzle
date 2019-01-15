import LiteralValue from "./LiteralValue";

export default abstract class MemoryLocation {
    value?: LiteralValue;
    constructor(value?: LiteralValue) {
        this.value = value;
    }

    setValue = (value: LiteralValue) => {
        this.value = value;
    }
}
