import { useState } from "react";
import { Board } from "./components/Board";
import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { config } from "./config";
import { TBoardState } from "./types";
import "./index.css";

export default function App() {
  const [boardState, setBoardState] = useState<TBoardState>({
    matrixSize: 3,
    bombsAmount: 1,
  });
  return (
    <>
      <Header headerConfig={config.header} />
      <Controls setBoardState={setBoardState} />
      <Board {...boardState} />
    </>
  );
}
