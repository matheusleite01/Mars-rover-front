import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  it("Should render component", () => {
    render(<Button>Submit</Button>);

    const button = screen.getByRole("button", {
      name: /submit/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("Should render component with disabled false", () => {
    render(<Button>Submit</Button>);

    const button = screen.getByRole("button", {
      name: /submit/i,
    });

    expect(button).toBeInTheDocument();
    expect(button).not.toHaveAttribute("disabled");
  });

  it("Should render component with disabled true when is passed", () => {
    render(<Button disabled={true}>Submit</Button>);

    const button = screen.getByRole("button", {
      name: /submit/i,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("disabled");
  });
});
