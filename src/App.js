import React, { useState } from 'react';
import './App.css';

import GameTable from "./components/GameTable/GameTable";

const App = () => {

  const [gameState, setGameState] = useState(['','','','','','','','','']);
  const [currentSymbol, setCurrentSymbol] = useState('💡');

  const squareClickedHandler = (squareIndex) => {
    setGameState(gameState.map((square, index) => index === squareIndex ? currentSymbol : square));
    toggleCurrentSymbolHandler();
  }

  const toggleCurrentSymbolHandler = () => {
    setCurrentSymbol(currentSymbol === '💡' ? '🏥' : '💡');
  }

  return (
    <div className="App">
     <h1>It's {currentSymbol}'s turn</h1>
     <GameTable gameState={gameState} squareClicked={squareClickedHandler}/>
    </div>
  );
}

export default App;
