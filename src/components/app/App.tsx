import React, { useEffect, useRef, useState } from "react";
import { Cell, CellType } from "../cell/Cell";
import "./app.css";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const App = () => {
  const [snakeCells, setSnakeCells] = useState<{ [key: string]: boolean }>({
    "0:0": true,
  });
  const [direction, setDirection] = useState<"up" | "right" | "down" | "left">(
    "right"
  );
  const [snake, setSnake] = useState(["0:0", "0:1"]);
  const [tick, setTick] = useState(0);
  const [foodCell, setFoodCell] = useState("5:5");
  const [gameOver, setGameOver] = useState(false);
  const rows = 10;
  const columns = 10;
  const matrix: any = [];

  useEffect(() => {
    setInterval(() => {
      setTick((val) => val + 1);
    }, 500);

    document.onkeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setDirection("right");
      } else if (e.key === "ArrowLeft") {
        setDirection("left");
      } else if (e.key === "ArrowUp") {
        setDirection("up");
      } else if (e.key === "ArrowDown") {
        setDirection("down");
      }
    };
  }, []);

  useEffect(() => {
    if (gameOver) {
      return;
    }
    const [curRow, curCol] = snake[snake.length - 1].split(":");
    let nextRow = Number(curRow);
    let nextCol = Number(curCol);
    if (direction === "up") {
      nextRow--;
    } else if (direction === "down") {
      nextRow++;
    } else if (direction === "right") {
      nextCol++;
    } else if (direction === "left") {
      nextCol--;
    }

    if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= columns) {
      setGameOver(true);
      return;
    }

    const nextHead = `${nextRow}:${nextCol}`;

    if (nextHead === foodCell) {
      setSnake([...snake, nextHead]);
      let randomPosition = null;

      while (!randomPosition) {
        const col = getRandomInt(columns);
        const row = getRandomInt(rows);
        if (!snakeCells[`${row}:${col}`]) {
          randomPosition = `${row}:${col}`;
        }
      }

      setFoodCell(randomPosition);
    } else if (snakeCells[nextHead]) {
      setGameOver(true);
    } else {
      setSnake([...snake.slice(1), nextHead]);
    }
  }, [tick]);

  useEffect(() => {
    const newSnakeCells: any = {};
    snake.forEach((node) => {
      newSnakeCells[node] = true;
    });
    setSnakeCells(newSnakeCells);
  }, [snake]);

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      let type: CellType = "empty";
      const key = `${i}:${j}`;
      if (snakeCells[key]) {
        if (gameOver) {
          type = "dead-snake";
        } else {
          type = "snake";
        }
      } else if (key === foodCell) {
        type = "food";
      }
      row.push(<Cell type={type} key={key} />);
    }
    matrix.push(
      <div className="row" key={i}>
        {row}
      </div>
    );
  }
  return <div className="field">{matrix}</div>;
};
