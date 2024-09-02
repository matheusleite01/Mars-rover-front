"use client";
import { useState, forwardRef, InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

import { RiQuestionFill } from "react-icons/ri";

type FormInputProps = {
  id?: string;
  name: string;
  type?: string;
  label: string;
  helpMessage?: string;
  error?: FieldErrors<FieldValues>;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ id, name, type = "text", label, helpMessage, error, ...props }, ref) => {
    const [helpMessageState, setHelpMessage] = useState(false);

    return (
      <div className="flex flex-col gap-[10px]">
        <label
          className="relative flex gap-1 font-Plus text-xs font-bold"
          htmlFor={id}
        >
          {label}
          {helpMessage && (
            <RiQuestionFill
              size={14}
              className="relative -top-2 cursor-pointer"
              onMouseEnter={() => setHelpMessage(true)}
              onMouseLeave={() => setHelpMessage(false)}
            />
          )}
          {helpMessageState && (
            <div className="absolute -top-12 right-20 max-w-52 bg-background border-[0.5px] border-border rounded-2xl p-2">
              <p className="text-xs">{helpMessage}</p>
            </div>
          )}
        </label>
        <input
          name={name}
          type={type}
          ref={ref}
          className={`${
            error && error[name] ? "border-erroColor" : "border-inputBorder"
          } font-Plus font-bold h-[37px] max-w-36 text-xs bg-inputColor rounded-lg p-2 outline-0 border-[0.5px]  placeholder:text-border placeholder:font-bold focus:border-white`}
          {...props}
        />
        {error && error[name] && (
          <div className=" text-xs text-left text-erroColor font-Plus font-bold truncate hover:text-clip">
            {error[name].message as string}
          </div>
        )}
      </div>
    );
  },
);

export default FormInput;
