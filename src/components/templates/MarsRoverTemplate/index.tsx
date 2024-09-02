import MarsFormControl from "@/components/organisms/MarsFormControl";
import TableHistory from "@/components/organisms/TableHistory";

const MarsRoverTemplate = () => {
  return (
    <div className="flex gap-4">
      <MarsFormControl />
      <TableHistory />
    </div>
  );
};

export default MarsRoverTemplate;
