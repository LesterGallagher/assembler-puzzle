/**
 * @class App
 */

import * as React from 'react'
import styles from './styles.css'
import { getGames } from '../../data/games';
import MenuItem from '../MenuItem/MenuItem';

export default class Menu extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.container}>
                    <div className={styles.menuItemsWrapper}>
                        {getGames().map((game, i) => (
                            <div key={i} className={styles.menuItem}>
                                <MenuItem game={game} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

