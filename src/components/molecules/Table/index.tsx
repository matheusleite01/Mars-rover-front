import { Movement } from "@/types";
import moment from "moment";

type TableProps = {
  headerTable: string[];
  data: Movement[] | undefined;
};
const Table = ({ headerTable, data }: TableProps) => {
  return (
    <div className=" w-full h-full relative overflow-x-auto border-[0.5px] border-border border-opacity-50 rounded-xl e">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="font-Plus text-xs text-gray-700 border-b-[0.5px] border-border border-opacity-50">
          <tr>
            {headerTable?.map((item) => (
              <th key={item} scope="col" className="px-6 py-3">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map(
            ({
              _id,
              finalPosition,
              commands,
              createdAt,
              initialPosition,
              plateau,
            }) => (
              <tr
                key={_id}
                className="font-Plus text-xs bg-background border-b-[0.5px] border-border border-opacity-50"
              >
                <td scope="row" className="px-6 py-4">
                  {_id}
                </td>
                <td className="px-6 py-3">{`${plateau.maxX}, ${plateau.maxY}`}</td>
                <td className="px-6 py-3">{initialPosition}</td>
                <td className="px-6 py-3">{commands}</td>
                <td className="px-6 py-3">
                  <span className="font-bold bg-gradient-custom rounded-lg px-2 py-1">
                    {finalPosition}
                  </span>
                </td>
                <td className="px-6 py-3">
                  {moment(createdAt).format("YYYY/MM/DD")}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
