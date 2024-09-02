"use client";
import Table from "@/components/molecules/Table";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllMovements } from "@/app/api/movement";

const TableHistory = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["movement"],
    queryFn: getAllMovements,
  });

  const header = [
    "ID",
    "Plateau Size",
    "Position",
    "Command",
    "FinalPosition",
    "Date",
  ];

  return (
    <div className="w-full relative max-xl:mb-8">
      <h3 className="flex gap-1 absolute -top-[5%] right-[50%] font-Plus font-bold max-xl:-top-[8%] max-xl:right-[45%]">
        History <span className="bg-gradient-custom rounded-md px-1">Logs</span>
      </h3>
      <Table
        headerTable={header}
        loading={isLoading}
        data={data ? data?.data : []}
      />
    </div>
  );
};

export default TableHistory;
