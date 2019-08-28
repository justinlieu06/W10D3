import React from 'react';

class Tile extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let tileObj = this.props.tileObj;
    let singleTile;

    if (tileObj.explored) {
      if (tileObj.bombed) {
        singleTile = '💣';
      } else {
        singleTile = tileObj.adjacentBombCount();
      }
    } else {
      if (tileObj.flagged) singleTile = '🚩';
      else singleTile = ' ';
    }

    let isFlagged = tileObj.flagged;
    // const turnFlag = () {
    //   isFlagged = true;
    // }
    return (
      <li className="tile" 
    onClick={ (e) => {this.props.updateGame(tileObj, tileObj.flagged)}}>{singleTile}
    </li>);
  }


}

export default Tile;