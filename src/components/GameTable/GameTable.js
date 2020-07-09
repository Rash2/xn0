import React from "react";

import classes from "./GameTable.module.css";

import GameSquare, {X} from "../GameSquare/GameSquare";

const gameTable = ({currentSymbol, onSymbolChange }) => {
  return (
    <div data-testid="game-table">
      <div data-testid="square-rows" className={classes.GameTableRow}>
        {[0, 1, 2].map((index) => (
          <GameSquare key={index} turn={currentSymbol === X ? 1 : 2} onSymbolChange={(symbol) => onSymbolChange(index, symbol)}/>
        ))}
      </div>
      <div data-testid="square-rows" className={classes.GameTableRow}>
        {[3, 4, 5].map((index) => (
          <GameSquare key={index} turn={currentSymbol === X ? 1 : 2} onSymbolChange={(symbol) => onSymbolChange(index, symbol)}/>
        ))}
      </div>
      <div data-testid="square-rows" className={classes.GameTableRow}>
        {[6, 7, 8].map((index) => (
          <GameSquare key={index} turn={currentSymbol === X ? 1 : 2} onSymbolChange={(symbol) => onSymbolChange(index, symbol)}/>
        ))}
      </div>
    </div>
  );
};

export default gameTable;
