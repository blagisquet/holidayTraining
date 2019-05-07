import React, { Component } from 'react';
import Game from './Components/Game/Game';
import Gamelist from './Components/GameList/Gamelist';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    fetch('http://www.campus-bordeaux.ovh:3002/joysticks/api/games')
    .then(result => result.json())
    .then((result) => {
      this.setState({
        games: result
      })
    })
  }
  render() {
    return (
      <div>
        {this.state.games.length > 0 ? <Game games={this.state.games} /> : null}
      </div>
    );
  }
}

export default App;
