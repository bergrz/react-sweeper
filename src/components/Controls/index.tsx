import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { config } from "../../config";
import { TBoardState, TSetBoardState } from "../../types";
const matrixConfig = config.controls.matrix;

const validationSchema = z.object({
  matrixSize: z.number().positive().lte(matrixConfig.maxSize),
  bombsAmount: z.number().nonnegative().lte(40),
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
    <form onChange={handleSubmit(onSubmit)}>
      <input
        type="number"
        defaultValue="3"
        {...register("matrixSize", { valueAsNumber: true })}
      />
      {errors.matrixSize && <span>{errors.matrixSize.message}</span>}
      <input
        type="number"
        defaultValue="1"
        {...register("bombsAmount", { valueAsNumber: true })}
      />
      {errors.bombsAmount && <span>{errors.bombsAmount.message}</span>}
    </form>
  );
};
