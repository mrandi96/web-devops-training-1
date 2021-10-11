import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('successfully edited', () => {
  render(<App />);
  const fileEdited = screen.getByText(/been edited/i);
  expect(fileEdited).toBeInTheDocument();
});

test('successfully deployed', () => {
  render(<App />);
  const deploySuccess = screen.getByText(/run successfully/i);
  expect(deploySuccess).toBeInTheDocument();
});
