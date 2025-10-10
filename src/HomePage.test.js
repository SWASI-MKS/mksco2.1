import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

describe('HomePage Component', () => {
  test('renders HomePage without crashing', () => {
    render(<HomePage />);
  });

  test('displays logo', () => {
    render(<HomePage />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  test('contains navigation links', () => {
    render(<HomePage />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders video element', () => {
    render(<HomePage />);
    const video = screen.getByTestId('hero-video');
    expect(video).toBeInTheDocument();
  });

  test('contains About Us section', () => {
    render(<HomePage />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  test('contains Awards section', () => {
    render(<HomePage />);
    expect(screen.getByText('Awards')).toBeInTheDocument();
  });

  test('contains ExploreService component', () => {
    render(<HomePage />);
    expect(screen.getByTestId('explore-service')).toBeInTheDocument();
  });
});
