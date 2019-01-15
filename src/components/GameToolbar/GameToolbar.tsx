/**
 * @class App
 */

import * as React from 'react'
import styles from './styles.css'
import GameToolbarButtons from '../GameToolbarButtons/GameToolbarButtons';
import GameToolbarTabs from '../GameToolbarTabs/GameToolbarTabs';
import GameToolbarInstructions from '../GameToolbarInstructions/GameToolbarInstructions';
import Game from '../../domain/Game';

export type Props = { game: Game };

export default class GameToolbar extends React.Component<Props> {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <GameToolbarInstructions game={this.props.game} />
                    </div>
                    <div className={styles.right}>
                        <GameToolbarButtons />
                        <GameToolbarTabs />
                    </div>
                </div>
            </div>
        )
    }
}

