import React, { Component } from 'react';
import Game from './Components/Game/Game';
import Gamelist from './Components/GameList/Gamelist';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Gamelist  />
      </div>
    );
  }
}

export default App;
