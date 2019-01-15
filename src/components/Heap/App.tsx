/**
 * @class App
 */

import * as React from 'react'
import styles from './styles.css'
import { HashRouter, Switch, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import NotFound from '../NotFound/NotFound';
import Game from '../Game/Game';

export default class ExampleComponent extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Menu} />                        
                        <Route exact path="/games/:index" component={Game}></Route>
                        <Route component={NotFound} />
                    </Switch>  
                </HashRouter>                
            </div>
        )
    }
}

