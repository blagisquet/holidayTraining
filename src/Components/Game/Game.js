import React, { Component } from 'react';
import Gamelist from '../GameList/Gamelist';
import '../../App.css';

const Game = props => (
  <div className="orga">
    <h2>{props.name}</h2>
    <img width="200px" height="200px" src={props.image} alt={props.name}/>
    <p>{props.description}</p>
    <button>Supprime</button>
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
