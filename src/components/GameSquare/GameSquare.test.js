import React from 'react';
import Square, {Empty, O, X} from './GameSquare';
import {fireEvent, render} from '@testing-library/react';

describe('Game square tests', () => {
  it('Should render an empty square', () => {
    const symbolChange = jest.fn(() => {
    });
    const {getByTestId} = render(<Square turn={1} onSymbolChange={symbolChange}/>);
    const symbol = getByTestId('square-text');
    expect(symbol.innerHTML).toBe(Empty);
    expect(symbolChange.mock.calls.length).toEqual(1);
  });

  it('Should render X when X taps on an empty square', () => {
    const symbolChange = jest.fn(() => {
    });
    const {getByTestId} = render(<Square turn={1} onSymbolChange={symbolChange}/>);

    const square = getByTestId('square');
    fireEvent.click(square);

    const symbol = getByTestId('square-text');
    expect(symbol.innerHTML).toBe(X);
    expect(symbolChange.mock.calls.length).toEqual(2);
  })

  it('Should render O when O taps on an empty square', () => {
    const symbolChange = jest.fn(() => {
    });
    const {getByTestId} = render(<Square turn={2} onSymbolChange={symbolChange}/>);

    const square = getByTestId('square');
    fireEvent.click(square);

    const symbol = getByTestId('square-text');
    expect(symbol.innerHTML).toBe(O);
    expect(symbolChange.mock.calls.length).toEqual(2);
  })

  it('Should not be able to overwrite a completed square', () => {
    const symbolChange = jest.fn(() => {
    });
    const {getByTestId} = render(<Square turn={2} onSymbolChange={symbolChange}/>);

    const square = getByTestId('square');
    fireEvent.click(square);

    const symbol = getByTestId('square-text');
    expect(symbol.innerHTML).toBe(O);
    expect(symbolChange.mock.calls.length).toEqual(2);

    fireEvent.click(square);
    expect(symbol.innerHTML).toBe(O);
    expect(symbolChange.mock.calls.length).toEqual(2);
  })
})
