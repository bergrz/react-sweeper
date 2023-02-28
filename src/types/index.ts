export type TBoardState = {
  matrixSize: number;
  bombsAmount: number;
};

export type TSetBoardState = {
  setBoardState: React.Dispatch<React.SetStateAction<TBoardState>>;
};
