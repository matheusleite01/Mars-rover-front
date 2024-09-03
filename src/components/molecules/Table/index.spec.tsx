import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Table from ".";
import { Movement } from "@/types";
import moment from "moment";

jest.mock("moment", () => {
  return () => ({
    format: jest.fn(() => "2023/09/02"),
  });
});

describe("Table component", () => {
  const headerTable = [
    "ID",
    "Plateau",
    "Initial Position",
    "Commands",
    "Final Position",
    "Date",
  ];

  const data: Movement[] = [
    {
      _id: "1",
      commands: "LMLMLMLMM",
      createdAt: "2023-09-02T12:34:56Z",
      finalPosition: "1 3 N",
      initialPosition: "1 2 N",
      log: [],
      plateau: {
        maxX: 5,
        maxY: 5,
      },
      updateAt: "2023-09-02T12:34:56Z",
    },
  ];

  it("Should renders table headers", () => {
    render(<Table headerTable={headerTable} data={data} loading={false} />);
    headerTable.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it("Should renders loading spinner when loading is true", () => {
    render(<Table headerTable={headerTable} data={[]} loading={true} />);
    expect(screen.getByRole("spinSvg")).toHaveClass("animate-spin");
  });

  it("Should renders data rows correctly", () => {
    render(<Table headerTable={headerTable} data={data} loading={false} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("5, 5")).toBeInTheDocument();
    expect(screen.getByText("1 2 N")).toBeInTheDocument();
    expect(screen.getByText("LMLMLMLMM")).toBeInTheDocument();
    expect(screen.getByText("1 3 N")).toBeInTheDocument();
    expect(screen.getByText("2023/09/02")).toBeInTheDocument();
  });

  it("Should renders no data message when data is empty", () => {
    render(
      <Table headerTable={headerTable} data={undefined} loading={false} />,
    );
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });
});
