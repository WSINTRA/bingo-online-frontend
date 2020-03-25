import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BigBingoBall from './components/BigBingoBall';
import AllPlayersInGame from './components/AllPlayersInGame';
import PlayerControls from './components/PlayerControls';
import BingoBooks from './components/BingoBooks';
import PlayedBalls from './components/PlayedBalls'

class App extends React.Component {

state = {
  player: {name:"Willy", wins: 23,},
  allPlayers: []
}
componentDidMount() {
  this.setState({
    player: {...this.props.user}
  })
}


  render(){
     return (
    <div className="App">
      <header id="welcome-header" className="App-header">
        Willy's Bingo Fun, welcome {this.state.player.name}<br/> since playing you have had {this.state.player.wins} wins
        <button onClick={()=>this.props.logout()} type="submit" className="btn btn-primary btn-block">logout</button>
        </header>
        <div className="Game-layout">
        <BigBingoBall/>
        <AllPlayersInGame allPlayers={this.state.allPlayers}/>
        <PlayerControls/>
        <BingoBooks/>
        <PlayedBalls/>
        </div>
    
      
    </div>
  );
  }
 
}

export default App;
