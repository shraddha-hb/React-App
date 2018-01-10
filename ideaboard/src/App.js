import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Added components controller
import IdeasContainer from './components/IdeasContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1>Idea Board</h1>
        </header>

        <IdeasContainer />
      </div>
    );
  }
}

export default App;
