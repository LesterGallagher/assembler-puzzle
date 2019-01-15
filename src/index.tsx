/**
 * @class ExampleComponent
 */

import * as React from 'react'
import styles from './styles.css'
import App from './components/App/App';

// export type Props = { text: string }

export default class ExampleComponent extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <App />
      </div>
    )
  }
}
