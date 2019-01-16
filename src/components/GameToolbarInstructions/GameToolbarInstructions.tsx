/**
 * @class App
 */

import * as React from 'react'
import styles from './styles.css'
import Game from '../../domain/Game';
import CPUInstruction from '../CPUInstruction/CPUInstruction';


export type Props = { game: Game };

export default class GameToolbarInstructions extends React.Component<Props> {
    render() {
        const game = this.props.game;
        const factories = this.props.game.cpu.allowedInstructions.map(factory => {
            return (
                <CPUInstruction
                    key={factory.name}
                    game={game}
                    instructionFactory={factory} />
            );
        });

        return (
            <div className={styles.root}>
                {factories}
            </div>
        )
    }
}

