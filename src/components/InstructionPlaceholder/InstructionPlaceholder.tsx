/**
 * @class App
 */

import * as React from 'react'
import styles from './styles.css'
import Game from '../../domain/Game';
import InstructionDomain from '../../domain/Instruction';

export type Props = { game: Game };

type State = { instruction?: InstructionDomain };

export default class InstructionPlaceholder extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            instruction: InstructionDomain
        }
    }

    onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        const instructionFactories = this.props.game.cpu.allowedInstructions;
        const [type, name] = e.dataTransfer.getData('text/plain').split(' ');
        if (type !== 'CPUInstruction') {
            e.preventDefault();
            return false;
        }
        const factory = instructionFactories.find(f => f.name === name);
        if (factory === undefined) throw 'Cannot find factory by name';
        const instruction = factory.createInstruction();
        this.setState({ instruction });
        return true;
    }

    render() {
        const className = [styles.root];
        if (this.state.instruction !== null) {
            className.push(styles.populated);
        } else {
            className.push(styles.empty);
        }
        return (
            <div onDragOver={this.onDragOver} className={className.join(' ')}>
                
            </div>
        );
    }
}

