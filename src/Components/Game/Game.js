import React, { Component } from 'react';
import Gamelist from '../GameList/Gamelist';

const Game = props => (
  <div>
    <img width="200px" height="200px" src={props.pochette} />
  </div>
);
/*  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={game.pochette} />
      </div>
    )
  };
}*/

export default Game;
