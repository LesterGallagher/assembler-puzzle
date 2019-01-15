/**
 * @class App
 */

import * as React from 'react'
import styles from './styles.css'
import Game from '../../domain/Game';

export type Props = { game: Game };

export default class InstructionPlaceholder extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.root}>
                                             
            </div>
        )
    }
}

