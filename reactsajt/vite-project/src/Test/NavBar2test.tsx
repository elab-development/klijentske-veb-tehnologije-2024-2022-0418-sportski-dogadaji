/*import { act } from "react-dom/test-utils";
  import { render,screen } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom'

  jest.mock("./NavBar", () => {
    return jest.fn(() => (
      <nav>
        <a href="/">Početna</a>
        <a href="/about">O nama</a>
        <a href="/tournaments">Turniri</a>
        <a href="/contact">Kontakt</a>
      </nav>
    ));
  });
  
  test("Navbar renders correctly", () => {
    act(() => {
      render(
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      );
    });
  
    const links = screen.getAllByRole("link");
  
    expect(links).toHaveLength(4);
    expect(links[0].textContent).toBe("Početna");
    expect(links[1].textContent).toBe("O nama");
    expect(links[2].textContent).toBe("Turniri");
    expect(links[3].textContent).toBe("Kontakt");
  });*/

/*import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar/NavBar";

jest.mock("react-router-dom", () => (
  { NavLink: ({ to, children }: { to: string; children: React.ReactNode }) => (<a href={to}>{children}</a>), }));

describe("NavBar component", () => {
  it("renders all navigation links correctly", () => {
    render(<NavBar />);

    expect(screen.getByText("Početna")).toBeInTheDocument();
    expect(screen.getByText("O nama")).toBeInTheDocument();
    expect(screen.getByText("Turniri")).toBeInTheDocument();
    expect(screen.getByText("Kontakt")).toBeInTheDocument();
  });
});*/

import { render } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';

jest.mock('react-router-dom', () => ({
  NavLink: () => <a></a>,
}));

test('renders navbar with correct links', () => {
  const { getByText } = render(<NavBar />);
  
  expect(getByText('Početna')).toBeInTheDocument();
  expect(getByText('O nama')).toBeInTheDocument();
  expect(getByText('Turniri')).toBeInTheDocument();
  expect(getByText('Kontakt')).toBeInTheDocument();
});