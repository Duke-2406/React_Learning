import logo from './logo.svg';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className='App'>
        <Greet />
        <Welcome />
      </div>
    )
  }
}

export default App;
