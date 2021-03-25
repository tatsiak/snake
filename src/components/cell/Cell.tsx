import React from "react";
import "./cell.css";

export type CellType = "snake" | "food" | "empty";
export const Cell = ({ type }: { type: CellType }) => {
  return <div className={`cell cell--${type}`} />;
};
