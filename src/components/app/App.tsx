import React from "react";
import { Cell } from "../cell/Cell";
import "./app.css";

export const App = () => {
  const row = 10;
  const col = 10;
  const matrix: any = [];

  const snake = new Set();
  snake.add("0:0")
  snake.add("0:1")
  snake.add("0:2")
  const food = new Set();
  food.add('5:5')

  for (let i = 0; i < row; i++) {
    const row = [];
    for (let j = 0; j < col; j++) {
      let type: "empty" | "snake" | "food" = "empty";
      const key = `${i}:${j}`;
      if (snake.has(key)) {
        type = "snake";
      } else if (food.has(key)) {
        type = "food";
      }
      row.push(<Cell type={type} key={key}/>);
    }
    matrix.push(<div className="row" key={i}>{row}</div>);
  }
  return <div className="field">{matrix}</div>;
};
