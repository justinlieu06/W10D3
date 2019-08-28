import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props){
    console.log(props);
    super(props);
    this.updateGame = this.props.updateGame;
  }

  render(){
    
    let arr = this.props.gameBoard.grid.map((row, idx) => {
      return (<ul className="row" key={idx}>
        {
          row.map((ele, i) => <Tile tileObj={ele} updateGame={this.updateGame} key={i} />)
        }
    </ul> )});
    
    return(
    <div className="board">
      { arr }
    </div>
    );
  }
}

export default Board;