import FormInput from "@/components/atoms/FormInput";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type RoverSectionProps = {
  label: string;
  register: UseFormRegister<any>;
  roverCommand: {
    position: string;
    command: string;
  };
  error?: FieldErrors<FieldValues>;
};

const RoverSection = ({
  label,
  register,
  roverCommand,
  error,
}: RoverSectionProps) => {
  return (
    <div className="flex flex-col gap-5 max-w-44 border-[0.5px] border-border px-3 py-3 rounded-2xl text-center">
      <span className="font-bold">{label}</span>
      <div className="flex flex-col gap-4">
        <FormInput
          label="Initial Position"
          placeholder="1 2 N"
          helpMessage="Enter 'x y D' where D is N, S, E, or W (e.g., '1 2 N')"
          error={error}
          {...register(roverCommand.position)}
        />
        <FormInput
          label="Command"
          placeholder="LMLMLMLMM"
          helpMessage="Enter a sequence of L, R, and M (e.g., 'LMLMLMM')."
          error={error}
          {...register(roverCommand.command)}
        />
      </div>
    </div>
  );
};

export default RoverSection;
