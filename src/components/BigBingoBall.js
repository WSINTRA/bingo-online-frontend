import React from 'react';
import bingoBall from '../images/bingoBall.png'
import bingoQuotes from '../data/bingoQuotes.js'

function bigBingoBall(){
	let ballNumber = 23
	return (<div className='Bingo-ball'>
			<div className="Ball-container">
			<img src={bingoBall} alt="" />
			<div className="centered">{ballNumber}</div>
			</div>
			<h3>{bingoQuotes[`${ballNumber}`]}</h3>
	</div>);
}

export default bigBingoBall;