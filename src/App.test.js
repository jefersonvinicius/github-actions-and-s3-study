import { render } from '@testing-library/react';
import packageJSON from '../package.json';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  expect(getByText(/My First App/)).toBeInTheDocument();
});

test('renders the version number correctly', () => {
  const { getByText } = render(<App />);
  expect(getByText(`Version ${packageJSON.version}`)).toBeInTheDocument();
});
