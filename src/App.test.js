import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const MockApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<MockApp />);
  });

  test('contains Router with routes', () => {
    render(<MockApp />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
