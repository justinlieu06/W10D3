import Game from './game';
import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';

class Minesweeper extends React.Component{
  render(){
    return(
      <div>
        <Game />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  console.log("React is Working");
  ReactDOM.render( <Minesweeper />, root );
});