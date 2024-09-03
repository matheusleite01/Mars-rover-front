import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from ".";

describe("Header component", () => {
  it("Should render header component", () => {
    render(<Header />);
    expect(screen.getByText("Mars Rover")).toBeInTheDocument();
    expect(screen.getByText("in JavaScript")).toBeInTheDocument();
  });
});
