export const stackSize = 8 * 20;
export const heapSize = 8 * 100;
export const instructionSize = 20;

export const getGames = () => new Array(12).fill(null).map((t, i) => {
    t = t;
    return {
        mode: 'easy',
        title: 'Intro',
        index: i,
        stackSize,
        heapSize,
        instructionSize
    }
});
