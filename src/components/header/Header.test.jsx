import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";
import Header from "./Header";
import { vi } from "vitest";

// Mock the necessary hooks and functions
vi.mock("../../context/authContext", () => ({
  useAuth: vi.fn(),
}));

vi.mock("../../firebase/auth", () => ({
  doSignOut: vi.fn(),
}));

describe("Header Component", () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders login and register links when user is not logged in", () => {
    useAuth.mockReturnValue({ userLoggedIn: false });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("LOGIN")).toBeInTheDocument();
    expect(screen.getByText("REGISTER")).toBeInTheDocument();
  });
});
