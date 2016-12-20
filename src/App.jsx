/**
 * Created by Chris D on 17/12/2016.
 * Application Entrypoint
 */

import React from 'react';
import verge from 'verge';
import Window from './components/Window/Window';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    // https://www.npmjs.com/package/verge
    this.setState(verge.viewport());
  }

  render() {
    return (
      <Window />
    );
  }
}

export default App;
