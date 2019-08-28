import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gameBoard: new Minesweeper.Board(9, 10)
    };

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flag) {
    if (flag) {
      tile.flagged = Minesweeper.Board.toggleFlag();
    } else {
      tile.explore();
      tile.explored = true;
    }
    this.setState({
      gameBoard: this.state.gameBoard
    });
  }

  render(){
    console.log(this.state.gameBoard.grid);
    return (
      <div>
        <h1>Minesweeper</h1>

        <Board gameBoard={this.state.gameBoard} updateGame={this.updateGame}/>
      </div>
    );
  }


}

export default Game;