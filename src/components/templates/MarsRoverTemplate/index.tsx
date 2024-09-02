import MarsFormControl from "@/components/organisms/MarsFormControl";
import TableHistory from "@/components/organisms/TableHistory";

const MarsRoverTemplate = () => {
  return (
    <div className="flex gap-4 justify-center max-xl:flex-wrap max-xl:gap-20">
      <MarsFormControl />
      <TableHistory />
    </div>
  );
};

export default MarsRoverTemplate;
