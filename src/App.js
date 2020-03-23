import React from 'react';
import logo from './logo.svg';
import './App.css';
import BigBingoBall from './BigBingoBall';
import AllPlayersInGame from './AllPlayersInGame';
import PlayerControls from './PlayerControls';
import BingoBooks from './BingoBooks';

class App extends React.Component {

state = {
  player: {name:"Willy", wins: 23, admin:true}
}
  render(){
     return (
    <div className="App">
      <header className="App-header">
        Willy's Bingo Fun, welcome {this.state.player.name}<br/> since playing you have had {this.state.player.wins} wins
        </header>
        <div className="Game-layout">
        <BigBingoBall/>
        <AllPlayersInGame/>
        <PlayerControls/>
        <BingoBooks/>
        </div>
      
    </div>
  );
  }
 
}

export default App;
