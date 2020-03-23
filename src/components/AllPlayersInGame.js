import React from 'react';

function allPlayersInGame(props){
	return (<div className="Player-list">
		
			<h1>CURRENT PLAYERS</h1>
			{props.allPlayers.map(player=>(<h2 key={player.id}> {player.name} </h2> ))}
			
	</div>);
}

export default allPlayersInGame;