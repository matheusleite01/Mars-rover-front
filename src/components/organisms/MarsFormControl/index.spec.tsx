import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import MarsFormControl from ".";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import moment from "moment";

jest.mock("react-hook-form", () => ({
  useForm: jest.fn(),
  Controller: jest.fn(({ render }) => render()),
}));

jest.mock("@hookform/resolvers/zod", () => ({
  zodResolver: jest.fn(),
}));

jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock("moment", () => {
  return () => ({
    format: jest.fn(() => "2023/09/02"),
  });
});

describe("MarsFormControl component", () => {
  const mockHandleSubmit = jest.fn((fn) => (e: any) => {
    e.preventDefault();
    return fn();
  });

  const mockRegister = jest.fn();
  const mockErrors = {};

  beforeEach(() => {
    (useForm as jest.Mock).mockReturnValue({
      register: mockRegister,
      handleSubmit: mockHandleSubmit,
      formState: { errors: mockErrors },
    });
  });

  it("Should renders the form and elements correctly", () => {
    render(<MarsFormControl />);

    expect(screen.getByText("Mars Rover")).toBeInTheDocument();
    expect(screen.getByText("Controls")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Control the Mars Rover by setting the plateau size, initial position, and movement commands. Explore Mars with precise navigation!",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
