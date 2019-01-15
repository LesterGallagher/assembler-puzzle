/**
 * @class App
 */

import * as React from 'react'
import styles from './styles.css'
import Game from '../../domain/Game';
import CPURegisterButton from '../CPURegisterButton/CPURegisterButton';


export type Props = { game: Game };

export default class GameToolbarInstructions extends React.Component<Props> {
    render() {
        const registers = this.props.game.cpu.registers.map(register => {
            return (
                <CPURegisterButton
                    key={register.registerName}
                    register={register} />
            );
        });

        return (
            <div className={styles.root}>
                {registers}
            </div>
        )
    }
}

