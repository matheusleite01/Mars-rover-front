import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FinalPositionValue from ".";
import { FinalPosition } from "@/types";

describe("FinalPositionValue component", () => {
  it('Should renders "Final Position" text', () => {
    render(<FinalPositionValue valueRover1={null} valueRover2={null} />);
    expect(screen.getByText("Final Position")).toBeInTheDocument();
  });

  it("Should  renders default text when both values are null", () => {
    render(<FinalPositionValue valueRover1={null} valueRover2={null} />);
    expect(screen.getByText("- - -")).toBeInTheDocument();
  });

  it("Should  renders final positions when values are provided", () => {
    const rover1: FinalPosition = { finalPosition: "1 2 N" };
    const rover2: FinalPosition = { finalPosition: "3 4 E" };
    render(<FinalPositionValue valueRover1={rover1} valueRover2={rover2} />);

    expect(screen.getByText(rover1.finalPosition)).toBeInTheDocument();
    expect(screen.getByText(rover2.finalPosition)).toBeInTheDocument();
  });

  it("Should renders the correct elements and styles", () => {
    const rover1: FinalPosition = { finalPosition: "1 2 N" };
    const rover2: FinalPosition = { finalPosition: "3 4 E" };
    render(<FinalPositionValue valueRover1={rover1} valueRover2={rover2} />);

    const rover1Element = screen.getByText(rover1.finalPosition);
    const rover2Element = screen.getByText(rover2.finalPosition);

    expect(rover1Element).toHaveClass("bg-gradient-custom rounded-lg px-2");
    expect(rover2Element).toHaveClass("bg-gradient-custom rounded-lg px-2");
  });
});
