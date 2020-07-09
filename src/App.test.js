import React from "react";
import App, {
  checkIfGameIsOverHandler,
  checkIfAllSquaresFilledHandler,
  checkIfSymbolWon,
} from "./App";
import GameTable from "./components/GameTable/GameTable";
import { X, O } from "./components/GameSquare/GameSquare";
import { render, fireEvent } from "@testing-library/react";

describe("App component tests", () => {
  it("Should display current player in header", () => {
    const { getByTestId } = render(<App />);
    const header = getByTestId("header");
    expect(header.innerHTML).toBe(`It's ${X}'s turn`);
  });

  it("Should say that the game is over for full gamestate", () => {
    const gameState = [X, X, O, O, X, "", X, O, O];

    expect(checkIfGameIsOverHandler(gameState)).toBe(false);
  });

  it("Should say that the game is tied ", () => {
    const gameState = [X, X, O, O, X, X, X, O, O];

    expect(checkIfAllSquaresFilledHandler(gameState)).toBe(true);
  });

  it("Should say that X won on row ", () => {
    const gameState = [X, X, X, O, X, O, X, O, O];

    expect(checkIfSymbolWon(X, gameState)).toBe(true);
  });

  it("Should say that O won on column ", () => {
    const gameState = [O, X, '', O, X, X, O, "", ""];

    expect(checkIfSymbolWon(O, gameState)).toBe(true);
  });

  it("Should say that X won on diagonal ", () => {
    const gameState = [X, '', O, '', X, '', '', O, X];

    expect(checkIfSymbolWon(X, gameState)).toBe(true);
  });

  it("Should have correct gamestate after each click event on square", () => {
      const {getByTestId} = render(<App />);
      const gameTable = getByTestId("game-table");
      const header = getByTestId("header");

      expect(header.innerHTML).toBe(`It's ${X}'s turn`);

      const rows = gameTable.childNodes;
      fireEvent.click(rows[0].childNodes[0]);
      expect(header.innerHTML).toBe(`It's ${O}'s turn`);

      fireEvent.click(rows[0].childNodes[1]);
      fireEvent.click(rows[1].childNodes[0]);
      fireEvent.click(rows[1].childNodes[1]);
      fireEvent.click(rows[2].childNodes[0]);
      expect(header.innerHTML).toBe(`${X} won`);
      
  }) 

});
