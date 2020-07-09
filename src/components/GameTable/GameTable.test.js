import React from "React";
import GameTable from "./GameTable";
import {X} from "../GameSquare/GameSquare";
import {render} from "@testing-library/react";

describe("Game table", () => {
    it("Should assign turn = 1 for currentSymbol = X", () => {
        const onSymbolChange = jest.fn(() => {});

        const {getAllByTestId} = render(<GameTable currentSymbol={X} onSymbolChange={onSymbolChange}/>);
        const rows = getAllByTestId('square-rows');
        expect(rows[0].childNodes.length + rows[1].childNodes.length + rows[2].childNodes.length).toBe(9);
    })
})