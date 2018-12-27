import React, { Component } from 'react';
import { observer } from 'mobx-react';

import EmailPage from './components/EmailPage';


@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <EmailPage />
      </div>
    );
  }
}

export default App;
