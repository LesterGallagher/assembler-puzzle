/**
 * @class App
 */

import * as React from 'react'
import styles from './styles.css'
import { Link } from 'react-router-dom';

export type Props = { game: any }

export default class MenuItem extends React.Component<Props> {
    render() {
        return (
            <Link className={styles.anchor} to={`/games/${this.props.game.index}`}>
                <div className={styles.root}>
                    <h2>{this.props.game.title}</h2>
                    <p></p>
                </div>
            </Link>
        )
    }
}

