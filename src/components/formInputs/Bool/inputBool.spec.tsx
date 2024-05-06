import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react';
import { InputBool } from './inputBool';
import { FormElement, InputParams } from '../../../types/input';

const props: FormElement = {
  id: 1,
  label: 'This is a Boolea stuff',
  hint: 'This is a Boolea stuff',
  required: false,
  position: 1,
  type: 'something'
}

const renderApp = (onChange: any) => {
    return render( <InputBool onChange={onChange} {...props}/> )
};

describe('InputBool', () => {
    it('should show a required field warning for each empty input field', async () => {
      const mockOnChange = jest.fn();
      renderApp(mockOnChange);
      const element = screen.getByTestId('input-bool-checkbox');
      expect(element).not.toBeNull();
    })
  })