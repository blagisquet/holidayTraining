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
    })
  }

  render() {
    return (
      <div>
        <Game />
      </div>
    )
  }
}

export default Gamelist;