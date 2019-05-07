import React, { Component } from 'react';
import Gamelist from '../GameList/Gamelist';

class Game extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {Gamelist.games.map((game) => {
          return <img width="200px" heigth="200px" src={game.image1} />
        })}
      </div>
    )
  };
}

export default Game;
