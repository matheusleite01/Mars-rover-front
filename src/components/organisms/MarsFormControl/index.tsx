"use client";
import Button from "@/components/atoms/Button";
import FinalPosition from "@/components/atoms/FinalPositionValue";
import FormInput from "@/components/atoms/FormInput";
import RoverSection from "@/components/molecules/RoverSection/inde";
import useMarsFormControl from "@/hooks/useMarsFormControl";
import { FaCircleMinus } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";

const MarsFormControl = () => {
  const {
    handleSubmit,
    register,
    rover1,
    rover2,
    handleFormSubmit,
    errors,
    finalPositionRover1,
    finalPositionRover2,
    loading,
  } = useMarsFormControl();

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-8 border-[0.5px] border-border border-opacity-50 max-w-[28.75rem] rounded-2xl py-5 px-8"
    >
      <div className="flex flex-col gap-2">
        <h3 className=" text-xl font-bold text-center">
          Mars Rover{" "}
          <span className="bg-gradient-custom h-96 rounded-md px-1">
            Controls
          </span>
        </h3>
        <p className="text-xs text-gray leading-4 font-Plus">
          Control the Mars Rover by setting the plateau size, initial position,
          and movement commands. Explore Mars with precise navigation!
        </p>
      </div>

      <div className="h-[0.5px] bg-border opacity-50"></div>

      <div className="flex flex-col gap-5">
        <FormInput
          label="Plateau Size"
          placeholder="1 2"
          helpMessage="Enter two integers separated by space (e.g., '1 2')."
          error={errors}
          {...register("plateau")}
        />
        <div className="flex items-center gap-3">
          <RoverSection
            label="Rover 1"
            register={register}
            error={errors}
            roverCommand={rover1}
          />

          <>
            {" "}
            <FaCircleMinus />
            <RoverSection
              label="Rover 2"
              register={register}
              error={errors}
              roverCommand={rover2}
            />
          </>
        </div>
      </div>

      <Button disabled={loading}>
        {loading ? (
          <CgSpinner className="animate-spin mx-auto" size={25} />
        ) : (
          "Submit"
        )}
      </Button>

      <div className="h-[0.5px] bg-border opacity-50"></div>
      <FinalPosition
        valueRover1={finalPositionRover1}
        valueRover2={finalPositionRover2}
      />
    </form>
  );
};

export default MarsFormControl;
