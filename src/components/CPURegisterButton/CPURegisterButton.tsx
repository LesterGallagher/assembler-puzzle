/**
 * @class App
 */

import * as React from 'react'
import styles from './styles.css'
import ProcessorRegister from '../../domain/ProcessorRegister';

export type Props = { register: ProcessorRegister };

export default class CPURegisterButton extends React.Component<Props> {
    render() {
        return (
            <button className={styles.button}>{this.props.register.registerName}</button>
        )
    }
}

