import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputSelect } from './inputSelect';

const mockOptions = [
  { id: 1, label: 'Option 1', value: 'option1', deal_breaker: false },
  { id: 2, label: 'Option 2', value: 'option2', deal_breaker: true },
];

const mockFields = {
    id: 1,
    position: 1,
    type: '',
    hint : '',
    required: false
};

describe('InputSelect', () => {
  it('renders select input with options correctly', () => {
    const { getByTestId, getByLabelText } = render(
      <InputSelect {...mockFields} label="Select an option" options={mockOptions} onChange={() => {}} />
    );

    const selectElement = getByTestId('input-select').querySelector('select');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement?.required).toBe(false); // Assuming props.required defaults to false

    expect(getByLabelText('Select an option')).toBeInTheDocument();
    expect(selectElement?.querySelectorAll('option').length).toBe(mockOptions.length);
    expect(selectElement?.querySelector('option[value="option1"]')).toBeInTheDocument();
    expect(selectElement?.querySelector('option[value="option2"]')).toBeInTheDocument();
  });

  it('calls onChange handler when an option is selected', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <InputSelect {...mockFields} label="Select an option" options={mockOptions} onChange={handleChange} />
    );

    const selectElement = getByTestId('input-select').querySelector('select');
    fireEvent.change(selectElement!, { target: { value: 'option1' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it('displays accent class when a deal breaker option is selected', () => {
    const { getByTestId } = render(
      <InputSelect {...mockFields} label="Select an option" options={mockOptions} onChange={() => {}} />
    );

    const inputSelect = getByTestId('input-select');
    expect(inputSelect.classList.contains('accent')).toBe(false);

    const selectElement = inputSelect.querySelector('select');
    fireEvent.change(selectElement!, { target: { value: 'option2' } });

    expect(inputSelect.classList.contains('accent')).toBe(true);
  });

  it('displays error message if options are invalid', () => {
    console.error = jest.fn(); // Mock console.error

    const { queryByTestId } = render(
      <InputSelect {...mockFields} label="Select an option" options={[]} onChange={() => {}} />
    );

    const inputSelect = queryByTestId('input-select');
    expect(inputSelect).toBeNull(); // Component should not render if options are invalid
    expect(console.error).toHaveBeenCalledTimes(1); // Ensure console.error is called
  });
});