import React from "react";

const FinalPorition = ({ value }: { value: string }) => {
  return (
    <div className="flex flex-col gap-3 text-center">
      <p className="font-Plus text-xs font-bold">Final Position</p>
      <div className=" font-bold border-[0.5px] border-border border-opacity-50 w-60 self-center p-4 rounded-lg">
        {value}
      </div>
    </div>
  );
};

export default FinalPorition;
