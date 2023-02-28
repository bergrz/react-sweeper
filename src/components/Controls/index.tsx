import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { config } from "../../config";
import { TBoardState, TSetBoardState } from "../../types";
import { Box } from "@mui/material";
const matrixConfig = config.controls.matrix;

const validationSchema = z
  .object({
    matrixSize: z.number().positive().lte(matrixConfig.maxSize),
    bombsAmount: z.number().nonnegative(),
  })
  .refine((data) => data.bombsAmount <= data.matrixSize, {
    message: `Number of bombs should be equal or less than matrix size`,
    path: ["bombsAmount"],
  });

type ValidationSchema = z.infer<typeof validationSchema>;

export const Controls = ({ setBoardState }: TSetBoardState) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: TBoardState) => {
    setBoardState(data);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <form onChange={handleSubmit(onSubmit)}>
        <Box sx={{ mb: 2 }}>
          <label htmlFor="matrixSize">matrix </label>
          <input
            type="number"
            defaultValue="3"
            {...register("matrixSize", { valueAsNumber: true })}
          />
          {errors.matrixSize && <span> {errors.matrixSize.message}</span>}
        </Box>
        <Box>
          <label htmlFor="bombsAmount">bombs </label>
          <input
            type="number"
            defaultValue="1"
            {...register("bombsAmount", { valueAsNumber: true })}
          />
          {errors.bombsAmount && <span> {errors.bombsAmount.message}</span>}
        </Box>
      </form>
    </Box>
  );
};
