import React, { Component } from 'react';
import './App.css';
import CongressContainer from './components/CongressContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
       <div style={{height:50, backgroundColor: 'black'}}></div>
       <CongressContainer />
      </div>
    );
  }
}

export default App;
