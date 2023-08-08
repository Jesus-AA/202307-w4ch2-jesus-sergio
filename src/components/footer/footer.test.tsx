import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given the component Footer', () => {
  describe('When we render it', () => {
    const text = 'Todos los derechos reservados.';
    render(<Footer></Footer>);
    test('The component should be in the document', () => {
      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();
    });
  });
});
