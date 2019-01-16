import * as React from 'react'
import styles from './styles.css'
import Game from '../../domain/Game';
import InstructionFactory from '../../domain/InstructionFactory';

export type Props = { game: Game, instructionFactory: InstructionFactory };

export default class CPUInstruction extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    onDragStart = (e: React.DragEvent<HTMLButtonElement>) => {
        const factory = this.props.instructionFactory;
        console.log('on drag start', factory);
        e.dataTransfer.setData('text/plain', `CPUInstruction ${factory.name}`);
    }

    render() {
        const factory = this.props.instructionFactory;
        return (
            <button
                draggable
                onDragStart={this.onDragStart}
                className={styles.button}>

                {factory.name}
            </button>
        )
    }
}

