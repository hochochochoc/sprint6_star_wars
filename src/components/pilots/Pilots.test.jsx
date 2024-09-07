import React from "react";
import { render, screen } from "@testing-library/react";
import { StarWarsContext } from "../../context/StarWarsContext";
import Pilots from "./Pilots";

describe("Pilots Component", () => {
  it("renders pilot names when available", () => {
    const contextValue = {
      pilots: {
        1: [{ name: "Luke Skywalker", url: "https://swapi.dev/api/people/1/" }],
      },
      selectedStarshipId: "1",
    };

    render(
      <StarWarsContext.Provider value={contextValue}>
        <Pilots />
      </StarWarsContext.Provider>
    );

    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
  });
});
