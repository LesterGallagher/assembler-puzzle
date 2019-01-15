
export const arrayToMatrix = (arr: any[], rowLen: number) => {
    const matrix = new Array(Math.ceil(arr.length / rowLen));
    for(let i = 0; i < matrix.length; i++) {
       matrix[i] = arr.slice(rowLen * i, rowLen * (i + 1));
    }
    return matrix;
}

export const getNullStr = (len: number) => {
    return new Array(len).fill('\0').join('');
};

export const spliceNullStr = (dest: string, src: string, i: number = 0) => {
    if (src.length > dest.length) console.warn('new length is longer than old length. This may cause trouble');
    const ret = dest.split('');
    ret.splice(i, src.length, ...src.split(''));
    return ret.join('');
}

export const mkMem = (newMem: string, numberOfMemBytes: number) => {
    const nullStr = getNullStr(numberOfMemBytes);
    return spliceNullStr(nullStr, newMem);
}

export const mkMemRightAligned = (newMem: string, numberOfMemBytes: number) => {
    const nullStr = getNullStr(numberOfMemBytes);
    return spliceNullStr(nullStr, newMem, numberOfMemBytes - newMem.length);
}
