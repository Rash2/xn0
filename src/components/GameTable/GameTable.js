import React from "react";

import classes from "./GameTable.module.css";

import GameSquare from "../GameSquare/GameSquare";

const gameTable = ({ gameState, squareClicked }) => {
  return (
    <div>
      <div className={classes.GameTableRow}>
        {gameState.slice(0, 3).map((squareSymbol, index) => (
          <GameSquare symbol={squareSymbol} squareClicked={squareClicked} squareId={index}/>
        ))}
      </div>
      <div className={classes.GameTableRow}>
        {gameState.slice(3, 6).map((squareSymbol, index) => (
          <GameSquare symbol={squareSymbol} squareClicked={squareClicked} squareId={index + 3}/>
        ))}
      </div>
      <div className={classes.GameTableRow}>
        {gameState.slice(6, 9).map((squareSymbol, index) => (
          <GameSquare symbol={squareSymbol} squareClicked={squareClicked} squareId={index + 6}/>
        ))}
      </div>
    </div>
  );
};

export default gameTable;
