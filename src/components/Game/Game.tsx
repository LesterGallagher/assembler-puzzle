/**
 * @class App
 */

import * as React from 'react';
import styles from './styles.css';
import { getGames } from '../../data/games';
import GameToolbar from '../GameToolbar/GameToolbar';
import GameDomain from '../../domain/Game';
import MetaSection from '../MetaSection/MetaSection';
import Stack from '../Stack/Stack';
import Instruction from '../Instructions/Instruction';

export type Props = { match: any };

export default class Game extends React.Component<Props> {
    index: number;
    game: GameDomain;

    constructor(props: Props) {
        super(props);

        this.state = {};
        this.index = props.match.params.index;
        const game = getGames()[this.index];

        this.game = new GameDomain(game);
    }

    render() {
        return (
            <div className={styles.root}>
                <GameToolbar game={this.game} />
                <main className={styles.container}>
                    <div className={styles.col1}>
                        <Instruction game={this.game} />
                    </div>
                    <div className={styles.col2}>
                        <Stack />
                    </div>
                    <div className={styles.col3}>
                        <MetaSection />
                    </div>
                </main>
            </div>
        )
    }
}

