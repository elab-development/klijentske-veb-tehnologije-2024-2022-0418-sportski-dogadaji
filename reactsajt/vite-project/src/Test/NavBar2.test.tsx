import { render } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';

jest.mock('react-router-dom', () => ({
  NavLink: jest.fn(),
}));

test('renders navbar with correct links', () => {
  const { getByText } = render(<NavBar />);
  
  expect(getByText('Početna')).toBeInTheDocument();
  expect(getByText('O nama')).toBeInTheDocument();
  expect(getByText('Turniri')).toBeInTheDocument();
  expect(getByText('Kontakt')).toBeInTheDocument();
});