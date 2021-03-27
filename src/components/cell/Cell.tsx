import React from "react";
import "./cell.css";

export type CellType = "snake" | "dead-snake" | "food" | "empty";
export const Cell = ({
  type,
  children,
}: {
  type: CellType;
  children?: any;
}) => {
  return <div className={`cell cell--${type}`}>{children} </div>;
};
