import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import logo from './logo.svg';
import './App.css';


@inject('EmailsStore')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
