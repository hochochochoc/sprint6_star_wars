import React from "react";
import { render, screen } from "@testing-library/react";
import { StarWarsContext } from "../../context/StarWarsContext";
import Films from "./Films";

describe("Films Component", () => {
  it("renders films when available", () => {
    const contextValue = {
      films: {
        1: [{ title: "A New Hope", url: "https://swapi.dev/api/films/1/" }],
      },
      selectedStarshipId: "1",
    };
    render(
      <StarWarsContext.Provider value={contextValue}>
        <Films />
      </StarWarsContext.Provider>
    );
    expect(screen.getByText(/A New Hope/i)).toBeInTheDocument();
  });
});
