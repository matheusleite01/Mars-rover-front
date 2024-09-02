import FormInput from "@/components/atoms/FormInput";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type RoverSectionProps = {
  label: string;
  register: UseFormRegister<FieldValues>;
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
          placeholder="Label"
          helpMessage="pede ded eeeee eeded edeadad"
          error={error}
          {...register(roverCommand.position)}
        />
        <FormInput
          label="Command"
          placeholder="Label"
          helpMessage="pede ded eeeee eeded edeadad"
          error={error}
          {...register(roverCommand.command)}
        />
      </div>
    </div>
  );
};

export default RoverSection;
