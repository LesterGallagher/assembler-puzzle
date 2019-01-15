import { encode, decode } from 'num-encode';
import { getNullStr, mkMemRightAligned, mkMem } from "../helpers/util";

enum ValuePresentation {
    Bytes,
    String,
    Integer
}

export default class LiteralValue {
    value: string;
    byteSize: number;
    valuePresentation: ValuePresentation;
    
    constructor(byteSize: number) {
        this.value = getNullStr(byteSize);
        this.byteSize = byteSize;
        this.valuePresentation = ValuePresentation.Bytes;
    }

    setValueAsString = (value: string) => {
        this.value = mkMem(value, this.byteSize);
        this.valuePresentation = ValuePresentation.String;
        return this;
    }

    getValueAsString = () => {
        return this.value.split('\0')[0];
    }

    setValueAsByteString = (value: string) => {
        this.value = mkMem(value, this.byteSize);
        this.valuePresentation = ValuePresentation.Bytes;
        return this;
    }

    getValueAsByteString = () => {
        return this.value.slice(0);
    }

    setValueAsBytes = (value: number[]) => {
        const inputAsStr = value.map(x => String.fromCharCode(x)).join('');
        this.value = mkMem(inputAsStr, this.byteSize);
        return this;
    }

    getValueAsBytes = () => {
        return this.value.split('').map(x => x.charCodeAt(0));
    }

    setValueAsInt = (value: number) => {
        const encodedByteStr = encode(value, 256);
        this.value = mkMemRightAligned(encodedByteStr, this.byteSize);
        this.valuePresentation = ValuePresentation.Integer;
        return this;
    }

    getValueAsInt = () => {
        const encodedByteStr = this.getValueAsByteString()
        const encodedNum = encodedByteStr.split('\0').slice(-1)[0];
        return decode(encodedNum, 256);
    }
}