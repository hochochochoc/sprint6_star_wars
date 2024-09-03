import React, { createContext, useState, useEffect } from "react";

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pilots, setPilots] = useState({});
  const [films, setFilms] = useState({});
  const [selectedStarshipId, setSelectedStarshipId] = useState(null);

  const fetchStarships = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://swapi.dev/api/starships/?page=${currentPage}`
      );
      const data = await response.json();

      if (currentPage === 1) {
        setStarships(data.results);
      } else {
        setStarships((prev) => [...prev, ...data.results]);
      }
      setTotalPages(Math.ceil(data.count / 10));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPilotsForStarship = async (starshipId) => {
    try {
      const starshipResponse = await fetch(
        `https://swapi.dev/api/starships/${starshipId}/`
      );
      const starshipData = await starshipResponse.json();

      if (starshipData.pilots.length > 0) {
        const pilotPromises = starshipData.pilots.map((pilotUrl) =>
          fetch(pilotUrl).then((res) => res.json())
        );
        const pilotData = await Promise.all(pilotPromises);
        setPilots((prev) => ({ ...prev, [starshipId]: pilotData }));
      } else {
        setPilots((prev) => ({ ...prev, [starshipId]: [] }));
      }
    } catch (err) {
      setError(err);
    }
  };

  const fetchFilmsForStarship = async (starshipId) => {
    try {
      const starshipResponse = await fetch(
        `https://swapi.dev/api/starships/${starshipId}/`
      );
      const starshipData = await starshipResponse.json();

      if (starshipData.films.length > 0) {
        const filmPromises = starshipData.films.map((filmUrl) =>
          fetch(filmUrl).then((res) => res.json())
        );
        const filmData = await Promise.all(filmPromises);
        setFilms((prev) => ({ ...prev, [starshipId]: filmData }));
      } else {
        setFilms((prev) => ({ ...prev, [starshipId]: [] }));
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchStarships();
  }, [currentPage]);

  return (
    <StarWarsContext.Provider
      value={{
        starships,
        currentPage,
        totalPages,
        isLoading,
        error,
        setCurrentPage,
        pilots,
        fetchPilotsForStarship,
        films,
        fetchFilmsForStarship,
        selectedStarshipId,
        setSelectedStarshipId,
      }}
    >
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsProvider, StarWarsContext };
