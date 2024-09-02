import { Movement } from "@/types";
import moment from "moment";
import { CgSpinner } from "react-icons/cg";
import { GiMarsCuriosity } from "react-icons/gi";

type TableProps = {
  headerTable: string[];
  data: Movement[] | undefined;
  loading: boolean;
};
const Table = ({ headerTable, data, loading }: TableProps) => {
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
          {loading && (
            <tr>
              <td className="absolute top-[50%] right-[50%]">
                <CgSpinner className="animate-spin text-center" size={40} />
              </td>
            </tr>
          )}
          {data ? (
            data?.map(
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
            )
          ) : (
            <tr>
              <td
                colSpan={headerTable.length}
                className="flex flex-col items-center gap-3 absolute top-[50%] right-[45%]"
              >
                <GiMarsCuriosity size={70} />
                <span className="font-Plus font-bold">No data available</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
