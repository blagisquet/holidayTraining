import React, { Component } from 'react';
import Game from '../Game/Game';

class Gamelist extends Component {
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
      console.log(result)
    })
  }

  render() {
    return (
      <div>
        {this.state.games.length > 0 ? this.state.games.map((game) => (
          <Game image={game.pochette} name={game.name} description={game.description}/>
        )) : null}       
      </div>
    )
  }
}

export default Gamelist;