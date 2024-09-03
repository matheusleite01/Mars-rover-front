import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { FieldErrorsImpl } from "react-hook-form";
import FormInput from ".";

describe("FormInput component", () => {
  it("Should render component", () => {
    render(<FormInput name="test" label="Label" />);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });
  it("Should renders input with label", () => {
    render(<FormInput name="test" label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("Should displays help message on hover", () => {
    render(
      <FormInput
        name="test"
        label="Test Label"
        helpMessage="This is a help message"
      />,
    );

    const helpIcon = screen.getByRole("helpSvg");
    fireEvent.mouseEnter(helpIcon);

    expect(screen.getByText("This is a help message")).toBeInTheDocument();
    fireEvent.mouseLeave(helpIcon);
    expect(
      screen.queryByText("This is a help message"),
    ).not.toBeInTheDocument();
  });

  it("Should applies correct border color on error", () => {
    const error = {
      test: {
        message: "Error message",
      },
    } as FieldErrorsImpl<{ test: string }>;

    render(<FormInput name="test" label="Test Label" error={error} />);
    const inputElement = screen.getByText("Test Label");
    expect(inputElement).toHaveClass(
      "relative flex gap-1 font-Plus text-xs font-bold",
    );
  });
});
