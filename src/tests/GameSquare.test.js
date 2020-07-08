import React from "react";
import renderer from 'react-test-renderer';
import GameSquare from "../components/GameTable/GameSquare/GameSquare";

const tempState = {gameState: ['','','','','','','','',''], currentSymbol: '💡'};
// <GameSquare symbol={squareSymbol} squareClicked={squareClicked} squareId={index}/>

const squareClickedHandler = (squareIndex) => {
  setGameState(gameState.map((square, index) => index === squareIndex ? currentSymbol : square));
  toggleCurrentSymbolHandler();
}

describe("gameSquare", () => {
  test("square clicked", () => {
    const tree = renderer.create(<GameSquare symbol='💡' squareClicked={squareClickedHandler} squareId={0} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
