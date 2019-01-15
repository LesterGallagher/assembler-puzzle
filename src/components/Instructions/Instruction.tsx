/**
 * @class App
 */

import * as React from 'react'
import styles from './styles.css'
import Game from '../../domain/Game';
import InstructionRow from '../InstructionRow/InstructionRow';
import InstructionPlaceholder from '../InstructionPlaceholder/InstructionPlaceholder';

export type Props = { game: Game };

export default class Instruction extends React.Component<Props> {
    render() {
        const game = this.props.game;
        const rows = game.cpu.instructionSet.instructions.map((instruction, i) => {
            instruction = instruction;
            return <InstructionRow key={i} game={game}>
                <InstructionPlaceholder game={game} />
            </InstructionRow>
        });
        return (
            <div className={styles.root}>
                <h2>Instruction</h2>  
                {rows}             
            </div>
        )
    }
}

