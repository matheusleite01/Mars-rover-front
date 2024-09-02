"use client";
import Button from "@/components/atoms/Button";
import FinalPorition from "@/components/atoms/FinalPosition";
import FormInput from "@/components/atoms/FormInput";
import RoverSection from "@/components/molecules/RoverSection/inde";
import useMarsFormControl from "@/hooks/useMarsFormControl";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

const MarsFormControl = () => {
  const {
    handleSubmit,
    register,
    newRoverSection,
    rover1,
    rover2,
    setNewRoverSection,
    handleFormSubmit,
    errors,
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="h-[0.5px] bg-border opacity-50"></div>

      <div className="flex flex-col gap-5">
        <FormInput
          label="Plateau Size"
          helpMessage="pede ded eeeee eeded edeadad"
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
          {newRoverSection ? (
            <>
              {" "}
              <FaCircleMinus
                className="cursor-pointer"
                onClick={() => setNewRoverSection(false)}
              />
              <RoverSection
                label="Rover 2"
                register={register}
                error={errors}
                roverCommand={rover2}
              />
            </>
          ) : (
            <FaCirclePlus
              className="cursor-pointer"
              onClick={() => setNewRoverSection(true)}
            />
          )}
        </div>
      </div>

      <Button>Submit</Button>

      <div className="h-[0.5px] bg-border opacity-50"></div>
      <FinalPorition value="- - -" />
    </form>
  );
};

export default MarsFormControl;
