import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  moverRoverSchema,
  MoverRoverSchemaProps,
} from "@/schema/moverRoverShema";
import api from "@/service/api";
import { toast } from "sonner";

const useMarsFormControl = () => {
  const [finalPositionRover1, setfinalPositionRover1] = useState(null);
  const [finalPositionRover2, setfinalPositionRover2] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MoverRoverSchemaProps>({
    resolver: zodResolver(moverRoverSchema),
  });

  const handleFormSubmit = async (data: MoverRoverSchemaProps) => {
    const { plateau, initialPosition, commands, initialPosition2, commands2 } =
      data;
    const [maxX, maxY] = plateau.split(" ").map(Number);
    const plateauObj = { maxX, maxY };
    const marsRover1 = { initialPosition, commands };
    const marsRover2 = {
      initialPosition: initialPosition2,
      commands: commands2,
    };

    try {
      setLoading(true);

      const plateauResponse = await api.post("/plateau", plateauObj);

      if (plateauResponse.status === 200) {
        const [rover1Response, rover2Response] = await Promise.all([
          api.post("/movement", marsRover1),
          api.post("/movement", marsRover2),
        ]);

        if (rover1Response.status === 200 && rover2Response.status === 200) {
          setfinalPositionRover1(rover1Response.data);
          setfinalPositionRover2(rover2Response.data);
          toast.success("Rovers moved successfully!");
        } else {
          throw new Error("Failed to move one or both rovers");
        }
      } else {
        throw new Error("Failed to create plateau");
      }
    } catch (error) {
      toast.error(`Failed to move one or both rovers. Please try again.`);
      console.log("Error in handleFormSubmit:", error);
    } finally {
      setLoading(false);
    }
  };

  const rover1 = {
    position: "initialPosition",
    command: "commands",
  };

  const rover2 = {
    position: "initialPosition2",
    command: "commands2",
  };

  return {
    register,
    handleSubmit,
    rover1,
    rover2,
    handleFormSubmit,
    errors,
    finalPositionRover1,
    finalPositionRover2,
    loading,
  };
};

export default useMarsFormControl;
