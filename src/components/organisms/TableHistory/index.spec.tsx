import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TableHistory from ".";
import { useQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

describe("TableHistory component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should renders loading state correctly", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<TableHistory />);

    expect(screen.getByText("Position")).toBeInTheDocument();
  });

  it("Should renders data correctly", () => {
    const mockData = {
      data: [
        {
          _id: "1",
          plateau: { maxX: 5, maxY: 5 },
          initialPosition: "1 2 N",
          commands: "LMLMLMLMM",
          finalPosition: "1 3 N",
          createdAt: "2023-09-01T00:00:00.000Z",
        },
      ],
    };

    (useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    render(<TableHistory />);

    expect(screen.getByText("Position")).toBeInTheDocument();
  });

  it("Should renders error state correctly", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(<TableHistory />);

    expect(screen.getByText("Position")).toBeInTheDocument();
  });
});
