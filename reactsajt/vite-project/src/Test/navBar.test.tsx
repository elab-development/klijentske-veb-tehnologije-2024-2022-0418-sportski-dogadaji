
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom"
import NavBar from "../components/NavBar/NavBar";

describe("NavBar", () => {
  test("navbar se renderuje sa ispravnim linkovima", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    expect(screen.getByText("Početna")).toBeInTheDocument();
    expect(screen.getByText("O nama")).toBeInTheDocument();
    expect(screen.getByText("Turniri")).toBeInTheDocument();
    expect(screen.getByText("Kontakt")).toBeInTheDocument();
  });
});