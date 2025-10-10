//ExploreService.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ExploreService from './ExploreService';

const MockExploreService = () => (
  <BrowserRouter>
    <ExploreService />
  </BrowserRouter>
);

describe('ExploreService Component', () => {
  test('renders ExploreService without crashing', () => {
    render(<MockExploreService />);
  });

  test('displays section heading', () => {
    render(<MockExploreService />);
    expect(screen.getByText('Explore Our Services')).toBeInTheDocument();
  });

  test('renders all service cards', () => {
    render(<MockExploreService />);
    const serviceCards = screen.getAllByTestId('service-card');
    expect(serviceCards.length).toBeGreaterThan(0);
  });

  test('displays service titles correctly', () => {
    render(<MockExploreService />);
    expect(screen.getByText('Planning & Government Approvals')).toBeInTheDocument();
    expect(screen.getByText('Architectural Design & Visualization')).toBeInTheDocument();
  });

  test('contains awards section', () => {
    render(<MockExploreService />);
    expect(screen.getByText('Our Awards')).toBeInTheDocument();
  });

  test('service cards are clickable', () => {
    render(<MockExploreService />);
    const serviceCards = screen.getAllByTestId('service-card');
    expect(serviceCards[0]).toHaveAttribute('role', 'button');
  });
});
