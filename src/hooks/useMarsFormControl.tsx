import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  moverRoverSchema,
  MoverRoverSchemaProps,
} from "@/schema/moverRoverShema";

const useMarsFormControl = () => {
  const [newRoverSection, setNewRoverSection] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(moverRoverSchema),
  });

  const handleFormSubmit = (data: MoverRoverSchemaProps) => {
    console.log(data);
  };

  const rover1 = {
    position: "initialPosition",
    command: "commands",
  };

  const rover2 = {
    position: "initialPosition",
    command: "commands",
  };

  return {
    newRoverSection,
    setNewRoverSection,
    register,
    handleSubmit,
    rover1,
    rover2,
    handleFormSubmit,
    errors,
  };
};

export default useMarsFormControl;
