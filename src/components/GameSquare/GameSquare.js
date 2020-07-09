import React, {useEffect, useState} from "react";
import classes from "./GameSquare.module.css";

export const X = '💡';
export const O = '🏥';
export const Empty = '';
// turn 1 | 2
// 1 <=> X | 2 <=> O
const gameSquare = ({turn, onSymbolChange}) => {
  const [symbol, setSymbol] = useState(Empty);

  const onClick = () => {
    if (symbol === Empty) {
      if (turn === 1) {
        setSymbol(X);
      }
      if (turn === 2) {
        setSymbol(O);
      }
    }
  }

  useEffect(() => {
    if (typeof onSymbolChange === 'function') {
      onSymbolChange(symbol);
    }
  }, [symbol])

  return (
    <div data-testid='square' onClick={onClick} className={classes.GameSquare}>
      <p data-testid='square-text'>{symbol}</p>
    </div>
  );
};

export default gameSquare;
