import React from "react";

type FinalPositionProps = {
  valueRover1: string | null;
  valueRover2: string | null;
};

const FinalPosition = ({ valueRover1, valueRover2 }: FinalPositionProps) => {
  return (
    <div className="flex flex-col gap-3 text-center">
      <p className="font-Plus text-xs font-bold">Final Position</p>
      <div
        className={`flex gap-2 justify-center font-bold border-[0.5px] border-border border-opacity-50 w-60 self-center p-4 rounded-lg transition-all`}
      >
        {valueRover1 && valueRover2 ? (
          <>
            <p className="bg-gradient-custom rounded-lg px-2">{valueRover1.finalPosition}</p>-
            <p className="bg-gradient-custom rounded-lg px-2">{valueRover2.finalPosition}</p>
          </>
        ) : (
          "- - -"
        )}
      </div>
    </div>
  );
};

export default FinalPosition;
