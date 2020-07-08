import React from "react";
import classes from "./GameSquare.module.css";

const gameSquare = ({ symbol, squareClicked, squareId }) => {
  return (
    <div onClick={() => symbol === '' ? squareClicked(squareId) : null} className={classes.GameSquare}>
      <p>{symbol}</p>
    </div>
  );
};

export default gameSquare;
