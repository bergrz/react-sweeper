import { Grid, Typography } from "@mui/material";
import { TBoardState } from "../../types";
import { generateBoard } from "../../utils/generateBoard";
import "./index.css";

export const Board = ({ matrixSize, bombsAmount }: TBoardState) => {
  const generatedBoard = generateBoard({ matrixSize, bombsAmount });
  return (
    <Grid>
      {Array.isArray(generatedBoard) &&
        generatedBoard.map((cell) => (
          <Grid container wrap="nowrap">
            {cell.map((c) => {
              return (
                <Grid item className={`${c == 1 && "bombed"} square`}>
                  {c == 1 && "*"}
                </Grid>
              );
            })}
          </Grid>
        ))}
    </Grid>
  );
};
