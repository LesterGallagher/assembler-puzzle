import * as React from 'react'
import styles from './styles.css'
import { withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";

export type Props = { location: any };

// Your component own properties
type PropsType = RouteComponentProps<Props> & {
    someString: string,
}

class NotFound extends React.Component<PropsType> {
    render() {
        console.log(this.props.location);
        return (
            <div className={styles.root}>
                <button className="button" onClick={() => this.props.history.goBack()}>Back</button>
            </div>
        )
    }
}

export default withRouter(NotFound);

