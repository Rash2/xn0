import React, { useState, useEffect} from "react";
import "./App.css";

import GameTable from "./components/GameTable/GameTable";
import { Empty, X, O } from "./components/GameSquare/GameSquare";

export const checkIfSymbolWon = (symbol, gameState) => {
  // check rows
  if (
    (gameState[0] === symbol &&
      gameState[1] === symbol &&
      gameState[2] === symbol) ||
    (gameState[3] === symbol &&
      gameState[4] === symbol &&
      gameState[5] === symbol) ||
    (gameState[6] === symbol &&
      gameState[7] === symbol &&
      gameState[8] === symbol)
  ) return true;

  // check columns
  if (
    (gameState[0] === symbol &&
      gameState[3] === symbol &&
      gameState[6] === symbol) ||
    (gameState[1] === symbol &&
      gameState[4] === symbol &&
      gameState[7] === symbol) ||
    (gameState[2] === symbol &&
      gameState[5] === symbol &&
      gameState[8] === symbol)
  ) return true;

  // check diagonals
  if (
    (gameState[0] === symbol &&
      gameState[4] === symbol &&
      gameState[8] === symbol) ||
    (gameState[2] === symbol &&
      gameState[4] === symbol &&
      gameState[6] === symbol) 
  ) return true;

    return false;
};

export const checkIfAllSquaresFilledHandler = (gameState) => {
  for(let square of gameState) {
    if (square === '') return false;
  }

  return true;
}

export const checkIfGameIsOverHandler = (gameState) => {
  return checkIfAllSquaresFilledHandler(gameState) || checkIfSymbolWon(X, gameState) || checkIfSymbolWon(O, gameState);
}

const App = () => {
  const [gameState, setGameState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [currentSymbol, setCurrentSymbol] = useState(Empty);
  const [endMessage, setEndMessage] = useState('');

  console.log(gameState)

  useEffect(() => {
    if( checkIfGameIsOverHandler(gameState)) {
      if ( checkIfSymbolWon(X, gameState) || checkIfSymbolWon(O, gameState) ) {
      setEndMessage(`${checkIfSymbolWon(X, gameState) ? X : O} won`);
      } else {
        setEndMessage('Tie')
      }
    } 
  }, [gameState]);

  const squareClickedHandler = (squareIndex, symbol) => {
    setGameState(
      gameState.map((square, index) =>
        index === squareIndex ? currentSymbol : square
      )
    );
    setCurrentSymbol(symbol);
      toggleCurrentSymbolHandler();
  };

  const toggleCurrentSymbolHandler = () => {
    setCurrentSymbol(currentSymbol === X ? O : X);
  };

  return (
    <div className="App">
      {!endMessage ? <h1 data-testid="header">It's {currentSymbol}'s turn</h1> : <h1 data-testid="header">{endMessage}</h1>}
      <GameTable
        currentSymbol={currentSymbol}
        onSymbolChange={squareClickedHandler}
      />
    </div>
  );
};

export default App;
