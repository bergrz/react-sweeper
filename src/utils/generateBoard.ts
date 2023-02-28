import { TBoardState } from "../types";

export const generateBoard = ({ matrixSize, bombsAmount }: TBoardState) => {
  if (bombsAmount > matrixSize * matrixSize) return;

  const matrix = Array.from({ length: matrixSize }, () =>
    Array(matrixSize).fill(0)
  );

  let bombsPlaced = 0;
  while (bombsPlaced < bombsAmount) {
    const x = Math.floor(Math.random() * matrixSize);
    const y = Math.floor(Math.random() * matrixSize);

    if (matrix[x][y] === 1) continue;

    matrix[x][y] = 1;
    bombsPlaced++;
  }

  return matrix;
};
