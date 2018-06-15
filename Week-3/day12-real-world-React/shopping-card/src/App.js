import React, { Component } from 'react';
import CheckoutButton from './components/CheckoutButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to The Shop</h1>
        </header>
        <main>
          <CheckoutButton />
        </main>
      </div>
    );
  }
}

export default App;
