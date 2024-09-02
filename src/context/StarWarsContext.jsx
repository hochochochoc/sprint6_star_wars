import React, { createContext, useState, useEffect } from "react";

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      }}
    >
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsProvider, StarWarsContext };
