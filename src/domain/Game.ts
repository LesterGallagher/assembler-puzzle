import CPU from "./CPU";
import CPUFactory from "./CPUFactory";
import { stackSize, heapSize, instructionSize } from "../data/games";

export default class Game {
    cpu: CPU

    constructor(game: any) {
        const cpuFactory = new CPUFactory()
            .setStackSize(stackSize)
            .setHeapSize(heapSize)
            .setInstructionSize(instructionSize);
        switch (game.mode) {
            case 'easy':
                cpuFactory.addEasyModeRegisters();
            break;
            default: throw Error('Game mode ' + game.mode + ' does not exist');
        }
        this.cpu = cpuFactory.createCPU();
    }
}