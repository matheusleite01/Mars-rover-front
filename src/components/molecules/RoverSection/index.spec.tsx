import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import RoverSection from '.';
import { useForm } from 'react-hook-form';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn(),
}));

describe('RoverSection component', () => {
  const register = jest.fn();
  const errors = {};

  beforeEach(() => {
    (useForm as jest.Mock).mockReturnValue({
      register,
      formState: { errors },
    });
  });

  it('Should renders label', () => {
    render(
      <RoverSection
        label="Rover 1"
        register={register}
        roverCommand={{ position: 'position', command: 'command' }}
        error={errors}
      />
    );
    expect(screen.getByText('Rover 1')).toBeInTheDocument();
  });

  it('Should renders FormInput components with correct labels and placeholders', () => {
    render(
      <RoverSection
        label="Rover 1"
        register={register}
        roverCommand={{ position: 'position', command: 'command' }}
        error={errors}
      />
    );

    expect(screen.getByText('Initial Position')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('1 2 N')).toBeInTheDocument();
    expect(screen.getByText('Command')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('LMLMLMLMM')).toBeInTheDocument();
  });

});