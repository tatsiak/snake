import React, { useEffect, useRef, useState } from "react";
import { Cell, CellType } from "../cell/Cell";
import "./app.css";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const storedBestResult = localStorage.getItem("best");
export const App = () => {
  const [tick, setTick] = useState(0);
  const [bestScore, _setBestScore] = useState(Number(storedBestResult));

  const setBestScore = (val: number) => {
    localStorage.setItem("best", String(val));
    _setBestScore(val);
  };
  const [snakeCells, setSnakeCells] = useState<{ [key: string]: boolean }>({
    "0:0": true,
    "0:1": true,
    "0:2": true,
  });
  const [direction, setDirection] = useState<"up" | "right" | "down" | "left">(
    "right"
  );
  const [snake, setSnake] = useState(["0:0", "0:1", "0:2"]);
  const [foodCell, setFoodCell] = useState("5:5");
  const [gameOver, setGameOver] = useState(false);
  const rows = 10;
  const columns = 10;
  const matrix: any = [];

  useEffect(() => {
    setInterval(() => {
      setTick((cur) => cur + 1);
    }, 200);

    document.onkeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setDirection((cur) => (cur === "left" ? "left" : "right"));
      } else if (e.key === "ArrowLeft") {
        setDirection((cur) => (cur === "right" ? "right" : "left"));
      } else if (e.key === "ArrowUp") {
        setDirection((cur) => (cur === "down" ? "down" : "up"));
      } else if (e.key === "ArrowDown") {
        setDirection((cur) => (cur === "up" ? "up" : "down"));
      }
    };
  }, []);

  const move = () => {
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
  };

  useEffect(move, [tick]);

  useEffect(() => {
    const newSnakeCells: any = {};
    snake.forEach((node) => {
      newSnakeCells[node] = true;
    });
    setSnakeCells(newSnakeCells);
    if (snake.length > bestScore) {
      setBestScore(snake.length);
    }
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
      if (type === "food") {
        row.push(
          <Cell type={"empty"} key={key}>
            <Cell type={"food"} key={key} />
          </Cell>
        );
      } else {
        row.push(<Cell type={type} key={key} />);
      }
    }
    matrix.push(
      <div className="row" key={i}>
        {row}
      </div>
    );
  }
  return (
    <section className="page">
      <span className="score">Current score: {snake.length}</span>
      <span className="score">Best score: {bestScore}</span>
      <div className="field">{matrix}</div>
    </section>
  );
};
