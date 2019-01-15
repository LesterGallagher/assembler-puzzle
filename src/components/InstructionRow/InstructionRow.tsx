/**
 * @class App
 */

import * as React from 'react'
import styles from './styles.css'
import Game from '../../domain/Game';
import InstructionPlaceholder from '../InstructionPlaceholder/InstructionPlaceholder';

export type Props = { game: Game };

export default class InstructionRow extends React.Component<Props> {
    render() {
        const game = this.props.game;
        return (
            <div className={styles.root}>
                <InstructionPlaceholder game={game} />
            </div>
        )
    }
}

