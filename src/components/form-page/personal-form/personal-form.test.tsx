import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PersonalForm } from './personal-form';

describe('Given the component PersonalForm', () => {
  describe('When we render it', () => {
    const text = 'Ingresa los siguientes datos:';
    render(<PersonalForm></PersonalForm>);
    test('The text Ingresa los siguientes datos: should be in the document', () => {
      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();
    });
  });
});
