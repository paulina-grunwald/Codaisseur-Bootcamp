import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Scoreboard from './components/Scoreboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Title content="Scoreboard App" />
          <Scoreboard content= "Scoreboard" />

        </main>
      </div>
    );
  }
}

export default App;
