import React from 'react';
import bingoBall from './images/bingoBall.png'
function bigBingoBall(){
	return (<div className='Bingo-ball'>
			<h1>THIS COMPONENT WILL HOUSE THE BALL</h1>
			<div className="Ball-container">
			<img src={bingoBall} alt="" />
			<div class="centered">23</div>
			</div>
	</div>);
}

export default bigBingoBall;